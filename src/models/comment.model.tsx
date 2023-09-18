import { User } from "./user.model";
import { Image } from "../types/image";

export type commentModel = {
  id: string;
  message: string;
  owner: User;

  image: Image;
};
