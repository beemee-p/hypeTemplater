import { BaseModel } from "./Common";
import { User } from "./User";

export interface Comment extends BaseModel {
  content: string;
  portfolioID: string;
  user: User;
}
