import "server-only";
import { db } from ".";
import { auth } from "@clerk/nextjs/server";

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

  if (!image) {
    throw new Error("Image not found");
  }

  if (image.userId !== user.userId) {
    throw new Error("Unauthorized");
  }

  return image;
}
