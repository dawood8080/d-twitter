import "server-only";
import { db } from ".";
import { auth } from "@clerk/nextjs/server";
import { images } from "./schema";
import { and, eq } from "drizzle-orm";

export async function getMyImages() {
  const user = await auth();

  if (!user.userId) {
    throw new Error("User not authenticated");
  }

  return await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => [desc(model.createdAt)],
  });
}

export async function getImage(id: number) {
  const user = await auth();

  if (!user.userId) {
    throw new Error("User not authenticated");
  }

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  return image;
}

export async function deleteImage(id: number) {
  const user = await auth();

  if (!user.userId) {
    throw new Error("User not authenticated");
  }

  await db
  .delete(images)
  .where(and(eq(images.id, id), eq(images.userId, user.userId)));
}
