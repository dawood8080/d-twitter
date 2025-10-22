import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className="flex justify-between items-center w-full p-7 font-bold text-xl border-b-2 ">
      <div className="cursor-pointer">Gallery</div>
      <div className="cursor-pointer">
        <SignedOut>
          <SignInButton>Sign in</SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}