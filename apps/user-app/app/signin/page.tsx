import { default as Image } from 'next/image';
import Heading from "@repo/ui/Heading"

export default()=>{
    return <>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="bg-[#E2F0FF] h-screen flex flex-col justify-center items-center">
                <Image
                    src="/loginImage.svg"
                    alt="Login Image"
                    width={500} // optional
                    height={500} // optional
                />
                <div>
                    <Heading />
                </div>
            </div>

            <div className='hidden lg:block'>
                    signin box
            </div>

        </div>
    </>
}