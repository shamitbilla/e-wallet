"use server"

import db from "../../db/index"

export default async function getBalance(userId : string){
    const balance = await db.balance.findFirst({
        where : {
            userId
        },
        select : {
            amount : true
        }
    });

    return balance?.amount;
}