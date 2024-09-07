"use client"

import { useBalance } from "@repo/lib/hooks/useBalance";
import bankTransfer from "@repo/lib/actions/bankTransfer";
import Card from "./card";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { balanceAtom } from "@repo/lib/atoms";
import { Balance } from "./balance";

export const TransferCard = () => {

  const [amount,setAmount] = useState(0);
  const [bank,setBank] = useState("");
  const [action,setAction] = useState(0);


  return (
    <div className="p-6">
      <Card title="Bank Transfer">
        <div className="flex gap-6 py-8">
          <div className="w-2/3">
            <div className="flex gap-4">
              <div className="block p-6 bg-gradient-to-bl from-blue-100 to-blue-300 border border-gray-200 rounded-lg shadow">
                <div className="flex gap-6 items-center">
                  <div className="flex justify-center">
                    <Image src={"/creditCardIcon.svg"} alt="wallie" height={45} width={45} />
                  </div>
                  <div>
                    <div className="text-blue-800 whitespace-nowrap">
                      Linked Cards
                    </div>
                    <div className="text-2xl font-bold flex justify-center">
                      3
                    </div>
                  </div>
                </div>
              </div>
              <div className="block p-6 bg-gradient-to-bl from-blue-100 to-blue-300 border border-gray-200 rounded-lg shadow">
                <div className="flex gap-6 items-center">
                    <div className="flex justify-center">
                      <Image src={"/bank2Icon.svg"} alt="wallie" height={45} width={45} />
                    </div>
                    <div>
                    <div className="text-blue-800 whitespace-nowrap">
                      Linked Banks
                    </div>
                      <div className="text-2xl font-bold flex justify-center">
                        2
                      </div>
                    </div>
                </div>
              </div>
            </div>
                
            <div className="py-4">
                <label className="block mb-2 font-medium text-blue-800">Amount</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-800 block w-full p-2.5" onChange={(e)=>{
                  const num = parseInt(e.target.value);
                  setAmount(num);
                }} placeholder="Enter Amount" />
            </div>
            <div className="mx-auto">
                <label className="block mb-2 font-medium text-blue-800">Select a Bank</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e)=>{
                  setBank(e.target.value);
                }}>
                  <option disabled selected>Choose a Bank</option>
                  <option value="HDFC Bank">HDFC Bank</option>
                  <option value="Axis Bank">Axis Bank</option>
                </select>
            </div>
            <div className="flex justify-center gap-6 py-6">
            <button className={`${action === 1 ? 'bg-[#3a72ec] text-white' : 'bg-white'}  text-blue-500 font-bold py-2 px-12 rounded outline outline-1 outline-blue-500 hover:bg-[#3a72ec] hover:text-white `}
              onClick={() => {
                setAction(1);
              }}
            >
              ↓Deposit
            </button>

            <button className={`${action === 2 ? 'bg-[#3a72ec] text-white' : 'bg-white'}  text-blue-500 font-bold py-2 px-12 rounded outline outline-1 outline-blue-500 hover:bg-[#3a72ec] hover:text-white `}
              onClick={() => {
                setAction(2);
              }}
            >
              ↑Withdraw
            </button>
            </div>
            <div className="p-4 py-2 flex justify-center">
              <button className="bg-gradient-to-bl from-[#3a72ec] to-blue-700 hover:bg-gradient-to-bl hover:from-[#3a72ec] hover:to-blue-900 text-white font-bold py-2 px-4 rounded w-full" onClick={async ()=>{
                await bankTransfer({amount,action, provider : bank});
              }}>
                {action==2? "Withdraw from" : "Deposit to"} your E-Wallet
              </button>
            </div>
          </div>

          <div className="w-1/3 block bg-gradient-to-bl from-blue-300 to-blue-400 border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col h-full"> 
              <div className="flex-grow">
                <div className="text-white p-4 text-xl py-8">
                  Current Balance
                </div>
                <div className="text-white font-bold text-3xl px-6 pt-12">
                    <Balance></Balance> 
                </div>
                <div className="text-blue-100 px-5 py-2">
                  Available for transfer
                </div>
              </div>
              <div className="mt-auto bg-blue-400 rounded-b-lg">
                <div className="p-4">
                  <div className="text-white font-bold">
                    Last Updated
                  </div>
                  <div className="text-blue-100 text-sm">
                    Today, 2.30 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Card>
    </div>
  );

};