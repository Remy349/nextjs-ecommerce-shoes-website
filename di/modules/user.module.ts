import { createModule } from "@evyweb/ioctopus";
import { DI_SYMBOLS } from "../types";
import { UserRepositoryImpl } from "@/src/infrastructure/repositories/user.repository";
import { isAdminCreatedUseCase } from "@/src/application/use-cases/user/is-admin-created.use-case";
import { isAdminCreatedController } from "@/src/interface-adapters/controllers/user/is-admin-created.controller";
import { createUserUseCase } from "@/src/application/use-cases/user/create-user.use-case";
import { createUserController } from "@/src/interface-adapters/controllers/user/create-user.controller";

export const createUserModule = () => {
  const userModule = createModule();

  // REPOSITORY
  userModule.bind(DI_SYMBOLS.user.IUserRepository).toClass(UserRepositoryImpl);

  // USE CASES
  userModule
    .bind(DI_SYMBOLS.user.IIsAdminCreatedUseCase)
    .toHigherOrderFunction(isAdminCreatedUseCase, [
      DI_SYMBOLS.user.IUserRepository,
    ]);
  userModule
    .bind(DI_SYMBOLS.user.ICreateUserUseCase)
    .toHigherOrderFunction(createUserUseCase, [
      DI_SYMBOLS.user.IUserRepository,
    ]);

  // CONTROLLERS
  userModule
    .bind(DI_SYMBOLS.user.IIsAdminCreatedController)
    .toHigherOrderFunction(isAdminCreatedController, [
      DI_SYMBOLS.user.IIsAdminCreatedUseCase,
    ]);
  userModule
    .bind(DI_SYMBOLS.user.ICreateUserController)
    .toHigherOrderFunction(createUserController, [
      DI_SYMBOLS.user.ICreateUserUseCase,
    ]);

  return userModule;
};
