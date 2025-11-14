import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;

  if (Number.isNaN(Number(photoId))) {
    throw new Error("Invalid photo ID");
  }

  return <FullPageImageView id={Number(photoId)} />;
}
