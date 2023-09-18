import { render } from "@testing-library/react";
import { Menu } from "./menu";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

jest.mock("react-redux/es/hooks/useSelector");

describe("Menu Component", () => {
  const menuOptions = [
    { label: "public", url: "/public", protected: false },
    { label: "protected", url: "/protected", protected: true },
  ];
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should always render that not protectred", () => {
    (useSelector as jest.Mock).mockReturnValue({
      token: null,
    });
    const { getByText } = render(
      <Router>
        <Menu options={menuOptions} />
      </Router>
    );
    expect(getByText("Public")), toBeInTheDocument();
  });
});
