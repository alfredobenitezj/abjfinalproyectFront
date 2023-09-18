import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import { commentModel } from "../models/comment.model";

import { userRepository } from "../services/user.repository";
import { User } from "../models/user.model";
import { ApiRepository } from "../services/api.repository";
import { CommentRepository } from "../services/comment.repository";

export const loadCommentAsync = createAsyncThunk(
  actionTypes.load,
  async (repo: ApiRepository<commentModel>) => {
    return await repo.getAll();
  }
);

export const addCommentAsync = createAsyncThunk(
  "comments/add",
  async ({ repo, comment }: { repo: CommentRepository; comment: FormData }) => {
    const commentObj: { [key: string]: any } = {};
    comment.forEach((value, key) => {
      commentObj[key] = value;
    });
    return (await repo.createComment(commentObj)) as Partial<commentModel>;
  }
);

export const registerUserAsync = createAsyncThunk(
  "/register",
  async ({ repo, user }: { repo: userRepository; user: Partial<User> }) => {
    return await repo.register(user);
  }
);

export const loginUserAsync = createAsyncThunk<
  Partial<User>,
  { repo: userRepository; user: Partial<User> }
>("/login", async ({ repo, user }) => {
  const result = await repo.login(user);

  return result;
});

export const loadUserAsync = createAsyncThunk(
  actionTypes.load,
  async (repo: userRepository) => {
    const response = await repo.query();
    return response;
  }
);
