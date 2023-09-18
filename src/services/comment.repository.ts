import { commentModel as Comment } from "../models/comment.model";
import { ApiRepository } from "./api.repository";
type ApiResponse = {
  items: Comment[];
};

export class CommentRepository extends ApiRepository<Comment> {
  constructor(public url: string = "") {
    super(url);
  }

  async getAll(): Promise<Comment[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error:${response.status}.${response.statusText}`;
      throw new Error(message);
    }
    const data = response.json() as Promise<ApiResponse>;
    return (await data).items;
  }

  async createComment(item: Partial<Comment>): Promise<Comment> {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Error:${response.status}.${response.statusText}`);
    }
    return response.json();
  }

  async updateComment(id: string, item: Partial<Comment>): Promise<Comment> {
    const response = await fetch(`${this.url}/comments/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        Authorization: `Bearer ${this.token}`,
        "Content-Type": "application/json",
      },
    });
    return response.json() as Promise<Comment>;
  }
}
