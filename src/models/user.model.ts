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
  // token?: string;
};

// export type UserResponseStructure = {
//   results: Partial<UserStructure>[];
// };

// export class UserModel implements UserStructure {
//   constructor(
//     public id: string,
//     public email: string,
//     public passwd: string,
//     public firstName: string,
//     public lastName: string,
//     public role: Role,
//     public image: string,
//     public lastLogging: string
//   ) // public token: string
//   {}
// }
