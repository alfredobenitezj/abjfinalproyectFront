export class ApiRepository<T extends { id: string | number }> {
  protected token?: string;
  constructor(protected url: string) {}
  setToken(token: string) {
    this.token = token;
  }
  private getHeaders() {
    if (!this.token) {
      throw new Error("No se ha especificado un token");
    }
    return {
      Authorization: `Bearer ${this.token}`,
    };
  }

  async getAll(): Promise<T[]> {
    const response = await fetch(this.url, {
      headers: this.getHeaders(),
    });
    if (!response.ok) {
      const message = `Error:${response.status}.${response.statusText}`;
      throw new Error(message);
    }

    return response.json() as Promise<T[]>;
  }
  async create(item: FormData): Promise<T> {
    const response = await fetch(this.url, {
      method: "POST",
      body: item,
      headers: this.getHeaders(),
    });
    return response.json() as Promise<T>;
  }

  async get(id: T["id"]): Promise<T> {
    const response = await fetch(`${this.url}/${id as string}`, {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }
}
