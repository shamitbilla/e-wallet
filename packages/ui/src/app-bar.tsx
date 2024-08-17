import Image from "next/image";
import { NavButton } from "./nav-button";



export function AppBar(){

  return (
      <div className="flex justify-between">
        <div className="p-6 flex items-center">
          <Image src={"/walletIcon.svg"} alt="wallie" height={40} width={40} />
          <div className="text-xl font-playfair font-bold ml-4 pt-1">
            Wallie
          </div>
        </div>
        <div className="p-6">
            <NavButton/>
        </div>
      </div>
  );
};