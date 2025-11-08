"use client";
import { Button } from "./ui/button";
import { deleteImageAction } from "~/server/actions";
import { useRouter } from "next/navigation";

export default function DeleteImageButton({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteImageAction(id);
    router.back();
  };

  return (
    <form action={handleDelete}>
      <Button type="submit" variant="destructive">Delete</Button>
    </form>
  );
}
