import Modal from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  console.log('🚀 ~ PhotoModal ~ photoId:', photoId);
  return <Modal>{photoId}</Modal>;
}
