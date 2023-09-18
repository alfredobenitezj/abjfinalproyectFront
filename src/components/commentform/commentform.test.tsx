import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { appStore } from "../../store/store";
import { useComment } from "../../hooks/use.comment";
import { CommentForm } from "./commentform";

// Mockear el hook y la función navigate
jest.mock("../../hooks/use.comment");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("CommentForm Component", () => {
  beforeEach(() => {
    (useComment as jest.Mock).mockReturnValue({
      handleAddComment: jest.fn().mockResolvedValue(true),
    });
  });

  test("renders correctly", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <CommentForm />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("form")).toBeInTheDocument();
    expect(screen.getByLabelText("Comentario:")).toBeInTheDocument();
    expect(screen.getByLabelText("Subir Imagen:")).toBeInTheDocument();
  });

  test("alert user when fields are empty on submit", () => {
    window.alert = jest.fn(); // mockear la función alert
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <CommentForm />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.submit(screen.getByRole("form"));
    expect(window.alert).toHaveBeenCalledWith(
      "Por favor, completa todos los campos."
    );
  });

  test("submits the form correctly", async () => {
    const handleAddCommentMock = jest.fn().mockResolvedValue(true);
    (useComment as jest.Mock).mockReturnValue({
      handleAddComment: handleAddCommentMock,
    });

    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <CommentForm />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("Comentario:"), {
      target: { value: "Test Comment" },
    });
    const file = new File([""], "file.png", { type: "image/png" });
    fireEvent.change(screen.getByLabelText("Subir Imagen:"), {
      target: { files: [file] },
    });

    fireEvent.submit(screen.getByRole("form"));

    await expect(handleAddCommentMock).toHaveBeenCalledWith(
      expect.any(FormData)
    );
    const formData = handleAddCommentMock.mock.calls[0][0] as FormData;
    expect(formData.get("content")).toBe("Test Comment");
    expect(formData.get("image")).toEqual(file);
  });
});
