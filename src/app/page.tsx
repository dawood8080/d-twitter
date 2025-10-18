import { db } from "~/server/db";

// since there is caching, the next line make sure every time we change in the DB, the content is updated
export const dynamic = "force-dynamic"


export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (images, { desc }) => [desc(images.createdAt)],
  });

  return (
    <main className="">
        <div className="flex flex-wrap gap-1">
          {[...images, ...images, ...images].map((image, index) => (
            <div className="flex flex-col gap-0.5" key={image.name + image.url + index}>
              <img src={image.url}  className="w-48 h-48 object-cover" />
              <div className="text-sm text-white">
                {image.name}
              </div>
            </div>
          ))}
        </div>
    </main>
  );
}
