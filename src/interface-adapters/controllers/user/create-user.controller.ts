import { ICreateUserUseCase } from "@/src/application/use-cases/user/create-user.use-case";
import { CreateDTO } from "@/src/entities/models/user.model";

export type ICreateUserController = ReturnType<typeof createUserController>;

export const createUserController =
  (createUserUseCase: ICreateUserUseCase) =>
  async (data: CreateDTO): Promise<void> => {
    await createUserUseCase(data);
  };
