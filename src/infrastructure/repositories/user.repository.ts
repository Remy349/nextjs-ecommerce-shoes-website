import PrismaSingleton from "@/db/prisma";
import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { DBInternalServerError } from "@/src/entities/errors/database.error";
import { CreateDTO, User } from "@/src/entities/models/user.model";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

export class UserRepositoryImpl implements IUserRepository {
  private _db: PrismaClient;

  constructor() {
    this._db = PrismaSingleton.getInstance();
  }

  async isAdminCreated(): Promise<boolean> {
    try {
      const admin = await this._db.user.findFirst({
        where: {
          role: "ADMIN",
        },
      });

      return !!admin;
    } catch (err) {
      console.error(`===> ERROR FROM REPOSITORY IMPL - ${err}`);
      throw new DBInternalServerError(
        "Internal server error while fetching data",
      );
    }
  }

  async createUser(data: CreateDTO): Promise<void> {
    try {
      const passwordHash = await hash(data.password, 10);

      await this._db.user.create({
        data: {
          email: data.email,
          password: passwordHash,
          role: data.role,
        },
      });
    } catch (err) {
      console.error(`===> ERROR FROM REPOSITORY IMPL - ${err}`);
      throw new DBInternalServerError(
        "Internal server error while creating data",
      );
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      return await this._db.user.findFirst({
        where: {
          email,
        },
      });
    } catch (err) {
      console.error(`===> ERROR FROM REPOSITORY IMPL - ${err}`);
      throw new DBInternalServerError(
        "Internal server error while fetching data",
      );
    }
  }
}
