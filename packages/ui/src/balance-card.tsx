"use client"

import Card from "./card";
import {useBalance} from "@repo/lib/hooks/useBalance"
import {useSession} from "next-auth/react"

export function BalanceCard(){
  const session = useSession();
  //@ts-ignore
  const [balance,setBalance] = useBalance(session.data?.user?.id);
  return (
    <div className="">
        <Card title={"Account Balance"}>
          <div className="py-8">
            <div className="flex justify-between">
              <div className="text-xl">
                Current Balance
              </div>
             
              <div className="mb-2 text-2xl font-bold text-gray-900">
                ₹{balance?.toString()}
              </div>
            </div>
            
            <hr className="h-0.5 my-4 bg-gray-300" />
              <div className="flex justify-between">
                <div className="text-xl">
                  Available Balance
                </div>
                <div className="mb-2 text-2xl font-bold text-gray-900">
                  ₹{balance?.toString()}
                </div>
              </div>
          </div>
        </Card>
    </div>
  );
};