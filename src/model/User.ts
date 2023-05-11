import { User as FirebaseUser } from 'firebase/auth';

type USER_ROLE = 'admin' | 'designer';
export interface User extends FirebaseUser {
  userRole?: USER_ROLE;
}
