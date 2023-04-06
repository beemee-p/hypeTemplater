import { BaseModel } from "./Common";
import { Thumbnail } from "./Thumbnail";
import { User } from "./User";

export interface Portfolio extends BaseModel {
  user: User;
  title: string;
  comment: Comment;
  thumbnail: Thumbnail;
}
