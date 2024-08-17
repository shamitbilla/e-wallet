import {SlidingPages} from "@repo/ui/sliding-pages"
import {SigninCard} from "@repo/ui/signin-card"

export default function Home(){
    return <>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="hidden lg:block">
                <SlidingPages></SlidingPages>
            </div>
            <div className="h-screen flex justify-center items-center">
                <SigninCard></SigninCard>
            </div>
        </div>
    </>
}