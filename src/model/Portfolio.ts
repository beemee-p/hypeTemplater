import { Thumbnail } from "./Thumbnail";
import { User } from "./User";

export interface Portfolio {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: number;
  user: User;
  title: string;
  comment: Comment;
  thumbnail: Thumbnail;
}
