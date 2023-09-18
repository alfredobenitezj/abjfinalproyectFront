import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import { commentModel } from "../models/comment.model";
type Keys = keyof typeof actionTypes;
export type CommentAction = {
  type: (typeof actionTypes)[Keys];
  payload: commentModel[] | commentModel | number;
};
export const loadCommentAction = createAction<commentModel[]>(actionTypes.load);
export const deleteCommentAction = createAction<string>(actionTypes.delete);
export const createCommentAction = createAction<commentModel>(
  actionTypes.create
);
export const updateCommentAction = createAction<commentModel>(
  actionTypes.update
);
