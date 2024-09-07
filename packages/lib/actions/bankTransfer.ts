"use server"

import axios from "axios";
import { BankServerURL } from "../config";
import {getServerSession} from "next-auth";
import { authOptions } from "../auth";
import db from "../../db";



interface bankTransferProps{
    amount : number,
    action : number,
    provider : string
}

enum OnRampStatus{
    Success = "Success",
    Failure = "Failure",
    Processing = "Processing"
};


export default async function bankTransfer({amount, action, provider} : bankTransferProps){
    if(action == 0)
        return 0;
    else if(action == 2)
        amount *= -1;

    const session = await getServerSession(authOptions);
    //@ts-ignore
    const userId = session.user.id;
    console.log("Transfer Initiated");


    const tokenResponse = await axios.get(`${BankServerURL}/get-token`);
    const token = tokenResponse.data.token;

    await db.onRampTransaction.create({
        data : {
            token,
            status : OnRampStatus.Processing as unknown as "Processing",
            provider,
            amount,
            startTime : new Date(),
            user : {
                connect : {
                    id : userId
                }
            }
        }
    });

    console.log("On ramping Initiated...");

    
    const transferPayload = {
        token,
        userId,
        amount
    };

    const result = await transfer(transferPayload);
    if(result == 1)
    {
        let faultCounter = 1;
        const transferRequest = setInterval(async ()=>{

            const result = await transfer(transferPayload);
            if(result == 0)
            {
                clearInterval(transferRequest);
            }
            else
            {
                faultCounter++;
            }

            if(faultCounter > 3)
            {
                await db.onRampTransaction.update({
                    where : {
                        token,
                    },
                    data : {
                        status : OnRampStatus.Failure as unknown as "Failure"
                    }
                });

                console.log("Transaction failed");
                clearInterval(transferRequest);
            }

        },3000);
    }


}



async function transfer(transferPayload : {
    amount : number,
    token : string,
    userId : string
})
{
    try{
        const transferResponse = await axios.post(`${BankServerURL}/hdfc/withdraw`,transferPayload);
        console.log("On Ramping Accomplished !!");
        return 0;
    }
    catch
    {
        console.log("error in transfer");
        return 1;
    }
}