import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Comment = {
  id: number;
  text: string;
};

type CommentState = {
  comments: Comment[];
};

const initialState: CommentState = {
  comments: [],
};
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    updateComment: (state, action: PayloadAction<Comment>) => {
      const index = state.comments.findIndex(
        (comment) => comment.id === action.payload.id
      );
      if (index !== -1) {
        state.comments[index] = action.payload;
      }
    },
  },
});
export const { addComment, deleteComment, updateComment } =
  commentSlice.actions;

export default commentSlice.reducer;
