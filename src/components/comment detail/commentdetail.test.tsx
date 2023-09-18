import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommentPage from "./Commentdetail";
import { commentModel } from "../../models/comment.model";

describe("When teh component Comments", () => {
  describe("then it is instantated", () => {
    test(" render Component Comments", () => {
      const comment = {} as commentModel;
      render(<CommentPage comment={comment}></CommentPage>);
      const text = screen.getByText("Comentarios por aqui");
      expect(text).toBeInTheDocument;
    });
  });
});
