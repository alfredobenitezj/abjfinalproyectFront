import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "./footer";
describe("Given the footer component ", () => {
  describe("Then it is instanciated", () => {
    test("renders footer with Role ", () => {
      render(<Footer></Footer>);
      const h2E = screen.getByRole("heading");
      expect(h2E).toBeInTheDocument();
    });
  });
});
