"use client"

import Card from "./card";

export const P2pTransferMain = () => {
  return (
    <div className="">
      <div className="flex gap-4">
        <div className="md:w-full lg:w-1/2">
            <div className="p-4">
              <Card title="Transfer funds">
                <div className="p-2 py-8">
                  <label className="block mb-2 font-medium text-blue-800">Recipient</label>
                  <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2 py-2.5" 
                    onChange={(e)=>{}} 
                    placeholder="Enter recipient's name or email" 
                  />
                </div>
                <div className="p-2 py-2">
                  <label className="block mb-2 font-medium text-blue-800">Amount</label>
                  <input 
                    type="text" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2 pu-2.5" 
                    onChange={(e)=>{}} 
                    placeholder="Enter Amount" 
                  />
                </div>

                <div className="p-4 pt-14 flex justify-center">
                    <button className="bg-gradient-to-bl from-[#3a72ec] to-blue-700 hover:bg-gradient-to-bl hover:from-[#3a72ec] hover:to-blue-900 text-white font-bold py-2 px-4 rounded w-96" onClick={async ()=>{
                      
                    }}>
                       Transfer
                    </button>
                </div>
              </Card>
            </div>
         
        </div>

      </div>
    </div>
  );
};
