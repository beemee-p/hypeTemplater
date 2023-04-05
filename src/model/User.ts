export interface User {
  uid: string;
  email?: string;
  name: string;
  phone?: string;
  userRole: USER_ROLE;
}

type USER_ROLE = "admin" | "designer";
