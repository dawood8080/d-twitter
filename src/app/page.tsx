import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

// since there is caching, the next line make sure every time we change in the DB, the content is updated
export const dynamic = "force-dynamic"

async function Images () {
  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.createdAt)],
  });

  return (
    <div className="flex flex-wrap gap-1">
      {images.map((image) => (
        <div className="flex flex-col gap-0.5" key={image.id}>
          <img src={image.url}  className="w-48 h-48 object-cover" />
          <div className="text-sm text-white">
            {image.name}
          </div>
        </div>
      ))}
    </div>
  )
}


export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please Sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
