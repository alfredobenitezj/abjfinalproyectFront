import { useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { CommentRepository } from "../services/comment.repository";
import { addCommentAsync, loadCommentAsync } from "../reducers/thunks";

export function useComment() {
  const { token } = useSelector((state: RootState) => state.user);
  const dispacth: AppDispatch = useDispatch();
  const url = "http://localhost:4400/comment";

  const repo: CommentRepository = useMemo(
    () => new CommentRepository(url),
    [url]
  );

  const handleLoadComments = useCallback(async () => {
    dispacth(loadCommentAsync(repo));
  }, [repo, dispacth]);

  const handleAddComment = async (comment: FormData) => {
    try {
      for (const [key, value] of comment.entries()) {
        console.log(`${key}: ${value}`);
      }
      if (token) {
        comment.append("tokenPayload", token);
      }
      await dispacth(addCommentAsync({ repo, comment }));
      return true;
    } catch (error) {
      console.error("Hubo un error al agregar el comentario:", error);
      return false;
    }
  };

  useEffect(() => {
    handleLoadComments();
  }, [handleLoadComments]);

  return {
    Comment,
    handleAddComment,
    handleLoadComments,
  };
}
