import { screen, render } from "@testing-library/react";
import Errorpage from "./error.page";
import "@testing-library/jest-dom";

describe("Given the component ErrorPage ", () => {
  describe("when is it instanciated", () => {
    test("render h2 element ", () => {
      render(<Errorpage></Errorpage>);
      const h2 = screen.getByText("Error 404");
      expect(h2).toBeInTheDocument;
    });
  });
});
