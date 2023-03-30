import { User } from './User';

export interface Comment {
  content: string;
  portfolioID: string;
  user: User;
}
