import { CommentRepository } from "../services/comment.repository";
import { commentModel } from "../models/comment.model";
import { User } from "../models/user.model";

export type ApiCommentResponse = {
  items: commentModel[];
  next: string | null;
  previous: string | null;
  count: number;
};

export type ApiResponse = {
  token: string;
  user: User;
};

export type GetCommentPayload = {
  repo: CommentRepository;
  url: string;
};
