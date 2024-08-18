import { SigninCard } from "@repo/ui/signin-card";
import { SignupCard } from "@repo/ui/signup-card";
import { SlidingPages } from "@repo/ui/sliding-pages";

export default function Home(){
    return <>
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className="hidden lg:block">
            <SlidingPages></SlidingPages>
        </div>
        <div className="h-screen flex justify-center items-center">
            <SignupCard></SignupCard>
        </div>
    </div>
</>
}