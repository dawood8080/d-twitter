import { db } from "~/server/db";

// since there is caching, the next line make sure every time we change in the DB, the content is updated
export const dynamic = "force-dynamic"

const mockUrls = [
 'https://atybhqqgzk.ufs.sh/f/t2uY3skTYXDOoMh1k8OjynkiSNzmlPfHeCEthRUAVux3g0c4',
 'https://atybhqqgzk.ufs.sh/f/t2uY3skTYXDOEipupbcT49Pqwm6rlSG3HvnzI2pMRNkoaJFj'
];

const mockImages = mockUrls.map((url, index) => {
  return {
    url,
    id: index + 1,
  };
});

export default async function HomePage() {
  
  const posts = await db.query.posts.findMany();
  console.log('🚀 ~ HomePage ~ posts:', posts);

  return (
    <main className="">
        <div className="flex flex-wrap gap-1">
          {posts.map((post, index) => (
            <div key={post.id + index} >{post.name}</div>
          ))}
          {mockImages.map((image, index) => (
          <div key={image.id + index} className="w-48 ">
            <img src={image.url} />
          </div>
        ))}</div>
    </main>
  );
}
