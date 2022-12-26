import { UserRole } from "./UserRole";

export type User = {
  username: string;
  password: string;
  role: UserRole;
};
