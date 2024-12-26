"use server";

import { getInjection } from "@/di/container";
import { DatabaseError } from "@/src/entities/errors/database.error";
import { CreateDTO } from "@/src/entities/models/user.model";
import { revalidatePath } from "next/cache";

export const createUserAction = async (data: CreateDTO) => {
  try {
    const createUserController = getInjection("user", "ICreateUserController");

    await createUserController(data);
  } catch (err) {
    if (err instanceof DatabaseError) {
      return { success: false, message: err.message };
    }
  }

  revalidatePath("/admin");

  return { success: true, message: "User successfully created" };
};
