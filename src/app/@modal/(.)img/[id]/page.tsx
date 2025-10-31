import { getImage } from "~/server/db/queries";
import Image from "next/image";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  if (Number.isNaN(Number(photoId))) {
    throw new Error("Invalid photo ID");
  }

  const image = await getImage(Number(photoId));
  return <Image src={image.url} alt={image.name} width={400} height={400} />;
}
