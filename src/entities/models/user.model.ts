type Role = "ADMIN" | "CUSTOMER";

export type User = {
  id: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
};

export type CreateDTO = Pick<User, "email" | "password" | "role">;
