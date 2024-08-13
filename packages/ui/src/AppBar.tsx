import Image from 'next/image'
import Heading from './Heading'
import { Button } from './button'

interface AppBarProps{
    user? : {
        name : string | null;
    },
    onSignin : ()=>void,
    onSignout : ()=>void
}

export default async ({user, onSignin, onSignout} : AppBarProps)=>{

    return <>
    
        <div className="p-2 px-16 py-4 flex items-center justify-between">
            <div className='flex items-center'>
                <Image
                    src="/walletIcon.svg"
                    alt='wallie icon'
                    width={50} 
                    height={100} 
                />
                <div className='pt-2 px-1'>
                    <Heading title='Wallie' />
                </div>
            </div>
           <Button content={user? "logout" : "Sign In"} onClick={()=>{}}/>
           
            
        </div>
        
        <div className="border-b border-gray-200 h-2px">

        </div>
    </>
}