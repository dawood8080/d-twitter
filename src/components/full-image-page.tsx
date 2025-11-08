import { currentUser } from "@clerk/nextjs/server";
import { getImage } from "~/server/db/queries";
import DeleteImageButton from "./delete-image-button";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  const user = await currentUser();

  return image && (
    <div className="h-full w-full flex min-w-0 min-h-0">
      <div className="flex flex-shrink items-center justify-center w-[70%]">
        <img
          src={image.url}
          alt={image.name}
          className="object-contain flex-shrink max-h-full"
        />
      </div>
      <div className="w-48 flex flex-col flex-1 border-l h-full gap-2">
        <div className="text-xl border-b text-center p-2">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{user?.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created at:</span>
          <span>{new Date(image.createdAt).toLocaleString()}</span>
        </div>
        <div className="flex flex-col p-2">
          <DeleteImageButton id={id} />
        </div>
      </div>
    </div>
  );
}
