import { render, fireEvent } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));
const mockNavigate = jest.fn();
const mockDispatch = jest.fn();
describe("Given the header component", () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    localStorage.clear();
  });
});
describe("when the user is authenticated token exist", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({ token: "mockedToken" });
  });
  test("renders the logout button", () => {
    const { getByText } = render(
      <Header>
        <span>Children</span>
      </Header>
    );
    expect(getByText("logout")).toBeInTheDocument();
  });
  test("logs the user out when logout button is clicjk", () => {
    const { getByText } = render(
      <Header>
        <span>Children</span>
      </Header>
    );
    fireEvent.click(getByText("logout"));
    expect(mockDispatch).toHaveBeenCalled();
    expect(localStorage.removeItem).toHaveBeenCalledWith("storeName");
  });
  test("renders the 'Register' and 'Login' buttons", () => {
    const { getByText } = render(
      <Header>
        <span>Children</span>
      </Header>
    );
    expect(getByText("Register")).toBeInTheDocument();
    expect(getByText("Login")).toBeInTheDocument();
  });
});
describe("when the user is not authenticated no token", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({});
  });
  test("navigate to register page when is clicked", () => {
    const { getByText } = render(
      <Header>
        <span>Children</span>
      </Header>
    );
    fireEvent.click(getByText("Login"));
    expect(mockNavigate).toHaveBeenCalledWith("login");
  });
});
