import { CreateDTO } from "@/src/entities/models/user.model";
import { IUserRepository } from "../../repositories/user.repository.interface";
import { DBConflictError } from "@/src/entities/errors/database.error";

export type ICreateUserUseCase = ReturnType<typeof createUserUseCase>;

export const createUserUseCase =
  (userRepository: IUserRepository) =>
  async (data: CreateDTO): Promise<void> => {
    const userByEmail = await userRepository.getUserByEmail(data.email);

    if (userByEmail) {
      throw new DBConflictError("User already created");
    }

    return await userRepository.createUser(data);
  };
