import Image from "next/image";
import { Button } from "./button";
import {useSession,  signIn, signOut} from "next-auth/react"

export function AppBar(){
  const session = useSession();

  const handleSignInOut = async ()=>{
    if(session.data?.user)
    {
      await signOut();
    }
    else
    {
      await signIn();
    }
  }

  return (
      <div className="flex justify-between">
        <div className="p-6 flex items-center">
          <Image src={"/walletIcon.svg"} alt="wallie" height={40} width={40} />
          <div className="text-xl font-playfair font-bold ml-4 pt-1">
            Wallie
          </div>
        </div>
        <div className="p-6">
            <Button content={session.data?.user ? "Logout" : "Signin"} onClick={handleSignInOut}/>
        </div>
      </div>
  );
};