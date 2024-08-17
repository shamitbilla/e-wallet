"use client"

import {useSession, signIn, signOut} from "next-auth/react"
import { Button } from "./button";

export const NavButton = () => {
  const session = useSession();

  const handleSignInOut = async ()=>{
    if(session.data?.user)
    {
      await signOut();
      console.log("user hai apan ke pass");
    }
    else
    {
      await signIn();
      console.log("user not got");
    }
  }
  return (
    <div>
      <Button content={session.data?.user ? "Logout" : "Signin"} onClick={handleSignInOut}/>
    </div>
  );
};
