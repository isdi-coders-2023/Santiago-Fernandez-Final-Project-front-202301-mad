export type Role = "admin" | "user";

export type UserStructure = {
  id: string;
  email: string;
  passwd: string;
  firstName: string;
  lastName: string;
  role: Role;
  image: string;
  lastLogging: string;
};
