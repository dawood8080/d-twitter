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

export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-1">{mockImages.map((image) => (
          <div key={image.id} className="w-48 ">
            <img src={image.url} />
          </div>
        ))}</div>
    </main>
  );
}
