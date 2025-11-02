import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export default function TopNav() {

  return (
    <nav className="flex justify-between items-center w-full p-7 font-bold text-xl border-b-2 ">
      <div className="cursor-pointer">Gallery</div>
      <div className="cursor-pointer flex gap-4 items-center">
        <SignedOut>
          <SignInButton>Sign in</SignInButton>
        </SignedOut>
        <SignedIn>
          {/* <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {router.refresh()}} /> */}
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
