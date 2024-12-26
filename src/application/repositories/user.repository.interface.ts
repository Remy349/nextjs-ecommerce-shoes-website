import { CreateDTO, User } from "@/src/entities/models/user.model";

export interface IUserRepository {
  isAdminCreated(): Promise<boolean>;
  createUser(data: CreateDTO): Promise<void>;
  getUserByEmail(email: string): Promise<User | null>;
}
