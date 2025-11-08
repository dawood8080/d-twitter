"use server";

import { revalidatePath } from "next/cache";
import { deleteImage } from "./db/queries";

export async function deleteImageAction(id: number) {
  await deleteImage(id);
  revalidatePath("/");
}

