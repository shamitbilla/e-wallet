import { default as Image } from 'next/image';
import Heading from "@repo/ui/Heading"
import {SigninCard} from "@repo/ui/signin-card"

export default function Home(){
    return <>
       
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='hidden lg:block'>
                    <div className="bg-[#E2F0FF] h-screen flex flex-col justify-center items-center">
                        <Image
                            src="/loginImage.svg"
                            alt="Login Image"
                            width={500} // optional
                            height={500} // optional
                            className="max-w-md" // add this class to set max width
                        />
                        <div className='py-10 text-center'>
                            <div className='px-12 max-w-md px-4 '>
                                <Heading title='Recieve Payments from any Banking System' />
                                <div className='py-6 text-gray-500'>
                                    Connect your bank card, and create accounts in the selected currency.
                                </div> 
                            </div>
                            
                        </div>
                    </div>

                </div>

                <div>
                    <SigninCard></SigninCard>
                </div>

                
        
           
            </div>

        

    </>
}