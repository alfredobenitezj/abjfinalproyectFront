import { User } from "../models/user.model";
type ApiRespose = {
  items: User[];
};
export class userRepository {
  query() {
    throw new Error("Method not implemented.");
  }
  constructor(public url: string) {}
  async getAll(): Promise<User[]> {
    const response = await fetch(this.url);
    if (!response.ok) {
      const message = `Error:${response.status}.${response.statusText}`;
      throw new Error(message);
    }
    const data = response.json() as Promise<ApiRespose>;
    return (await data).items;
  }

  async register(item: Partial<User>): Promise<User> {
    const response = await fetch(this.url + "user/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    return response.json() as Promise<User>;
  }

  async login(item: Partial<User>): Promise<User> {
    const response = await fetch(this.url + "user/login/", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    return response.json() as Promise<User>;
  }
}
