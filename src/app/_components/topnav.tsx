'use client'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center w-full p-7 font-bold text-xl border-b-2 ">
      <div className="cursor-pointer">Gallery</div>
      <div className="cursor-pointer flex gap-1">
        <SignedOut>
          <SignInButton>Sign in</SignInButton>
        </SignedOut>
        <SignedIn>
          <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {router.refresh()}} />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
