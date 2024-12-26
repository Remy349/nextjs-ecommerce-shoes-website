import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { ICreateUserUseCase } from "@/src/application/use-cases/user/create-user.use-case";
import { IIsAdminCreatedUseCase } from "@/src/application/use-cases/user/is-admin-created.use-case";
import { ICreateUserController } from "@/src/interface-adapters/controllers/user/create-user.controller";
import { IIsAdminCreatedController } from "@/src/interface-adapters/controllers/user/is-admin-created.controller";

export const DI_USER_SYMBOLS = {
  // REPOSITORY
  IUserRepository: Symbol.for("IUserRepository"),
  // USE CASES
  IIsAdminCreatedUseCase: Symbol.for("IIsAdminCreatedUseCase"),
  ICreateUserUseCase: Symbol.for("ICreateUserUseCase"),
  // CONTROLLERS
  IIsAdminCreatedController: Symbol.for("IIsAdminCreatedController"),
  ICreateUserController: Symbol.for("ICreateUserController"),
};

export type DI_USER_RETURN_TYPES = {
  // REPOSITORY
  IUserRepository: IUserRepository;
  // USE CASES
  IIsAdminCreatedUseCase: IIsAdminCreatedUseCase;
  ICreateUserUseCase: ICreateUserUseCase;
  // CONTROLLERS
  IIsAdminCreatedController: IIsAdminCreatedController;
  ICreateUserController: ICreateUserController;
};
