"use client";

import Card from "./card";
import useName from "@repo/lib/hooks/useName";


interface AvatarProps{
  name? : string,
  image? : string

}
export const Avatar = ({name, image}: AvatarProps) => {

  const username = useName();

  function giveAvatar(){
    if(image)
    {
      return <div className="avatar">
        <div className="w-10">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="rounded-lg"/>
        </div>
      </div>
    }
    else if(name)
    {
      return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </div>
    }
    else
    {
      return  <div className="flex justify-center items-center w-10 h-10 bg-gray-200 rounded-lg">
        <span className="text-blue-800 font-medium">A</span>
      </div>
    }
  }
  return (
    <Card title="">
      <div className="flex justify-center items-center w-10 h-10 bg-gray-200 rounded-lg">
        <span className="text-blue-800 font-medium">{username}</span>
      </div>
    </Card>
  );
};

function initials(name: string): string {
  const fullname = name.split(" ");
  const fname = fullname[0];
  const lname = fullname[fullname.length - 1];

  if(fname && lname)
  {
    return `${fname[0]}${lname[0]}`;
  }
  else
  {
    return "A";
  }

}