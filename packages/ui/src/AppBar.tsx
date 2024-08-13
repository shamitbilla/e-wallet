import Image from 'next/image';
import Heading from './Heading';
import { Button } from './button';
import { signIn, signOut, useSession } from 'next-auth/react';

interface AppBarProps {
  user?: {
    name: string | null;
  };
}

export default function AppBar() {
  const session = useSession();

  const handleSignIn = () => signIn();
  const handleSignOut = () => signOut();

  return (
    <>
      <div className="p-2 px-16 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/walletIcon.svg"
            alt="wallie icon"
            width={50}
            height={100}
          />
          <div className="pt-2 px-1">
            <Heading title="Wallie" />
          </div>
        </div>
        <Button
          content={session.data?.user ? "Logout" : "Sign In"}
          onClick={session.data?.user ? handleSignOut : handleSignIn}
        />
      </div>
      <div className="border-b border-gray-200 h-2px"></div>
    </>
  );
}