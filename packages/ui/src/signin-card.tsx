"use client"

import { default as Image } from 'next/image';
import Heading from "@repo/ui/Heading"
import { PassInput } from './pass-input';
import { Button } from './button';
import { useState } from 'react';
import {signIn, getSession} from "next-auth/react" 
import {useRouter} from "next/navigation"
import { useSetRecoilState } from 'recoil';
import { userDataAtom } from '@repo/lib/atoms';


interface User {
  id: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

export const SigninCard = () => {
  const router = useRouter();
  const [phoneNumber,setphoneNumber] = useState();
  const [password,setPassword] = useState();
  const [msg,setMsg] = useState("Please login to access your account.");
  const setUserData = useSetRecoilState(userDataAtom);




  async function onClick() {
    const result = await signIn("credentials", {
      phone: phoneNumber,
      password,
      redirect: false
    });

    if (result?.ok != true) {
      setMsg("Invalid creds, try again") 
    } else {
      const session = await getSession();
      const user = session?.user as User;
      await setUserData({
        id : user?.id
      });

      router.push("/dashboard");
    }
  }

  return (
    <div className='p-6'>
         <div className="flex flex-col justify-start">
            <Image src="/wave.svg" alt="Login Image" width={30} height={30} />
            <div className='py-4'>
                <Heading title='Welcome back!' />
                <div className='py-2 text-gray-500'>
                    {msg}
                </div> 
            </div>

            <div className='py-2 text-gray-500 text-sm'>
              Please enter your phone number
            </div>
            <div className='py-1'>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-12 w-96 p-2" placeholder="xxx xxxx xxx" onChange={(e:any)=>{setphoneNumber(e.target.value)}}/>
            </div>
            <div className='py-4'>
              <PassInput onChange={(e: any)=>{setPassword(e.target.value)}}/>
            </div>
          
            <div className='py-4'>
              <Button onClick={onClick} content='Sign in' height={45} width={386} />
            </div>
            <div className='px-3'>
              Don't have an account? 
              <span className='px-2 text-[#89CFF0]'>
                <a href='/signup'>Sign Up</a> 
              </span>
            </div>
        </div>
    </div>
       
  );
};
