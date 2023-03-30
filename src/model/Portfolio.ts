import { Thumbnail } from './Thumbnail';
import { User } from './User';

export interface Portfolio {
  comment: Comment;
  thumbnail: Thumbnail;
  title: string;
  user: User;
}
