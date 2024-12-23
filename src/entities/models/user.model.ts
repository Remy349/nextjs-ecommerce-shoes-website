type Role = "ADMIN" | "CUSTOMER";

export type User = {
  id: string;
  email: string;
  password: string;
  role: Role;
  createdAt: Date;
};
