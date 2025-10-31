import { getImage } from "~/server/db/queries";
import Image from "next/image";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  return <Image src={image.url} alt={image.name} width={400} height={400} />;
}
