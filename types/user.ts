export interface User {
  id: number;
  email: string;
  password: string;
  role: Role;
}

export type Role = "admin" | "user";

export interface UserWithToken extends User {
  token: string;
}
