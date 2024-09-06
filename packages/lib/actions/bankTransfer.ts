"use server"

import axios from "axios";
import { BankServerURL } from "../config";
import {getServerSession} from "next-auth";
import {NextApiRequest, NextApiResponse} from "next";
import { authOptions } from "../auth";


interface bankTransferProps{
    amount : number,
    action : number
}


export default async function bankTransfer({amount, action} : bankTransferProps){
    if(action == 0)
        return 0;
    else if(action == 2)
        amount *= -1;

    const session = await getServerSession(authOptions);
    //@ts-ignore
    const userId = session.user.id;

    const tokenResponse = await axios.get(`${BankServerURL}/get-token`);
    const token = tokenResponse.data.token;
    console.log("token recieved was "+token);

    const transferPayload = {
        token,
        userId,
        amount
    };

    const transferResponse = await axios.post(`${BankServerURL}/hdfc/withdraw`,transferPayload);

}