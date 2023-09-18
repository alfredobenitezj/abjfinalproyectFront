import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AppRoutes } from "./app.routes";

describe("given  the app routes component", () => {
  describe("when it is rendered", () => {
    test("renders the home page", () => {
      render(
        <Router initialEntries={["/"]}>
          <AppRoutes></AppRoutes>
        </Router>
      );
      expect(screen.getByText(/algo/)).toBeInTheDocument();
    });
    test("render la pagina de login", () => {
      render(
        <Router initialEntries={["/login"]}>
          <AppRoutes></AppRoutes>
        </Router>
      );
      expect(screen.getByText(/login/)).toBeInTheDocument();
    });
    test("render la pagina de register", () => {
      render(
        <Router initialEntries={["/register"]}>
          <AppRoutes></AppRoutes>
        </Router>
      );
      expect(screen.getByText(/register/)).toBeInTheDocument();
    });

    test("render la pagina de stage", () => {
      render(
        <Router initialEntries={["/stage"]}>
          <AppRoutes></AppRoutes>
        </Router>
      );
      expect(screen.getByText(/stage/)).toBeInTheDocument();
    });

    test("render la pagina de commentform", () => {
      render(
        <Router initialEntries={["/add_comment"]}>
          <AppRoutes></AppRoutes>
        </Router>
      );
      expect(screen.getByText(/add_comment/)).toBeInTheDocument();
    });
    test("render la pagina de error", () => {
      render(
        <Router initialEntries={["/error"]}>
          <AppRoutes></AppRoutes>
        </Router>
      );
      expect(screen.getByText(/error/)).toBeInTheDocument();
    });
    test("render la pagina de home", () => {
      render(
        <Router initialEntries={["/home"]}>
          <AppRoutes></AppRoutes>
        </Router>
      );
      expect(screen.getByText(/home/)).toBeInTheDocument();
    });
  });
});
