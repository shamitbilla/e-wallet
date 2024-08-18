"use client"

import { default as Image } from 'next/image';
import Heading from "@repo/ui/Heading"
import { PassInput } from './pass-input';
import { Button } from './button';
import { useState } from 'react';
import {useRouter} from "next/navigation"
import {z} from "zod"
import {signIn} from "next-auth/react"
import axios from "axios"

const userSignupSchema = z.object({
  email : z.string().email(),
  name : z.string(),
  number : z.string().length(10),
  password : z.string().min(1)

});

type userSignupType = z.infer<typeof userSignupSchema>;


export const SignupCard = () => {
  const router = useRouter();
  const [phoneNumber,setphoneNumber] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [msg,setMsg] = useState("Please Signup to create your account.");


  function onClick() {
    const payload : userSignupType  = {
      email,
      name,
      number : phoneNumber,
      password
    }

    const validation = userSignupSchema.safeParse(payload);
    if(!validation.success)
    {
      setMsg("Invalid format, try again");
    }
    else
    {
      axios.post("api/user/signup",payload).then(async (r)=>{
        if(r.status == 200)
        {
          const result = await signIn("credentials", {
            phone: phoneNumber,
            password,
            redirect: false
          });
          
          console.log(result);

          if (result?.ok != true) {
            setMsg("Invalid creds, try again") 
          } else {
            router.push("/dashboard");
          }
        }
        else
        {
          setMsg("Invalid creds, try again");
        }
      });
    }



      
      
  }

  return (
    <div className='p-6'>
         <div className="flex flex-col justify-start">
            <Image src="/wave.svg" alt="Login Image" width={30} height={30} />
            <div className='py-4'>
                <Heading title='Welcome!' />
                <div className='py-2 text-gray-500'>
                    {msg}
                </div> 
            </div>

            <div className='py-2 text-gray-500 text-sm'>
              Please enter your name
            </div>
            <div className='py-1'>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-12 w-96 p-2" placeholder="John Doe" onChange={(e:any)=>{setName(e.target.value)}}/>
            </div>

            <div className='py-2 text-gray-500 text-sm'>
              Please enter your phone number
            </div>
            <div className='py-1'>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-12 w-96 p-2" placeholder="xxx xxxx xxx" onChange={(e:any)=>{setphoneNumber(e.target.value)}}/>
            </div>

            <div className='py-2 text-gray-500 text-sm'>
              Please enter your email
            </div>
            <div className='py-1'>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-12 w-96 p-2" placeholder="johndoe@gmail.com" onChange={(e:any)=>{setEmail(e.target.value)}}/>
            </div>

            <div className='py-4'>
              <PassInput onChange={(e: any)=>{setPassword(e.target.value)}}/>
            </div>
            
          
            <div className='py-4'>
              <Button onClick={onClick} content='Sign Up' height={45} width={386} />
            </div>
            <div className='px-3'>
              Already have an account? 
              <span className='px-2 text-[#89CFF0]'>
                <a href='/signin'>Sign In</a> 
              </span>
            </div>
        </div>
    </div>
       
  );
};


