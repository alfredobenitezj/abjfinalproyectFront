import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./home";
("./home");

describe("Given the Home Component ", () => {
  describe("Then it is instanciated", () => {
    test("render home h2 title  ", () => {
      render(<Home></Home>);
      const h2Element = screen.getByRole("heading");
      expect(h2Element).toBeInTheDocument();
    });
  });
});
