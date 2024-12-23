import PrismaSingleton from "@/db/prisma";
import { IUserRepository } from "@/src/application/repositories/user.repository.interface";
import { DBInternalServerError } from "@/src/entities/errors/database.error";
import { PrismaClient } from "@prisma/client";

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
}
