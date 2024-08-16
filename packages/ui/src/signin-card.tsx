"use client"

import { default as Image } from 'next/image';
import Heading from "@repo/ui/Heading"
import { PassInput } from './pass-input';
import { Button } from './button';

export const SigninCard = () => {
  return (
    <div className='p-6'>
         <div className="flex flex-col justify-start">
            <Image src="/wave.svg" alt="Login Image" width={30} height={30} />
            <div className='py-4'>
                <Heading title='Welcome back!' />
                <div className='py-2 text-gray-500'>
                    Please login to access your account.  
                </div> 
            </div>

            <div className='py-2 text-gray-500'>
              Please enter your phone number
            </div>
            <div className='py-1'>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-12 w-96 p-2" placeholder="xxx xxxx xxx" />
            </div>
            <div className='py-4'>
              <PassInput onChange={(e: any)=>{console.log(e.target.value)}}/>
            </div>
            <div className='py-4'>
              <Button onClick={()=>{}} content='Sign in' height={40} width={96}/>
            </div>
        </div>
    </div>
       
  );
};
