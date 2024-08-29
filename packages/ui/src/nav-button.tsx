"use client"

import {useSession, signIn, signOut} from "next-auth/react"
import { Button } from "./button";

export function NavButton(){
  const session = useSession();

  const handleSignInOut = async ()=>{
    if(session.data?.user)
    {
      await signOut();
      window.location.href = "/signin"
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
