import { getImage } from "~/server/db/queries";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  return (
    <div className="h-full w-full flex items-center  justify-center bg-green-500/50 min-w-0 min-h-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="object-contain flex-shrink max-h-screen"
        />
      </div>
      <div className="w-48 flex flex-col flex-shrink-0 border-l h-full">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
