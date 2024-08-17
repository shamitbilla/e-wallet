"use client"
import { useState, useEffect } from 'react';
import { default as Image } from 'next/image';
import Heading from "@repo/ui/Heading";

const Data = [
  {
    src: "/loginImage.svg",
    heading: "Receive payments from any banking system",
    subHeading: "Connect your bank card, and create accounts in the selected currency."
  },
  {
    src: "/loginImage2.svg",
    heading: "Shop in world-famous online stores",
    subHeading: "Popular things, big discounts - all this will be available to you."
  },
  {
    src: "/loginImage3.svg",
    heading: "Transfers without commission",
    subHeading: "Send and receive money without paying commissions."
  }
]

export const SlidingPages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % Data.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      <div className="bg-[#E2F0FF] h-screen flex flex-col justify-center items-center pt-12">
            <Image
                key={currentIndex}
                src={Data[currentIndex]?.src || ""}
                alt={""}
                width={500}
                height={500}
              />
            <div className='py-10 text-center'>
              <div className='px-12 max-w-md px-4 '>
                <Heading title={Data[currentIndex]?.heading || ""} />
                <div className='py-6 text-gray-500'>
                  {Data[currentIndex]?.subHeading}
                </div>
              </div>
            </div>
        </div>
          
      </div>
  );
};