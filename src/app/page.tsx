import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/db/queries";

// since there is caching, the next line make sure every time we change in the DB, the content is updated
export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-2 gap-y-4 p-4">
      {[...images, ...images, ...images, ...images, ...images, ...images].map((image, index) => (
        <div className="flex h-48 w-48 flex-col gap-0.5" key={`${image.id}-${index}`}>
            <Link href={`/img/${image.id}`} >
            <div>
              <Image
                src={image.url}
                style={{ objectFit: "contain", maxHeight: "180px" }}
                width={192}
                height={192}
                alt={image.name}
              />
            </div>
              <div className="text-sm text-white">{image.name}</div>
            </Link>
          </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">Please Sign in</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
