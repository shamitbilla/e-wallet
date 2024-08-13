import express from "express";
import db from "@repo/db/client"


const app = express();

app.get("/",(req,res)=>{
    res.json({
        msg : "hey"
    });

});

app.post('hdfc',async (req,res)=>{
    const paymentInfoPayload : {
        token : string,
        userId : string,
        amount : string
    } = {
        token : req.body.token,
        userId : req.body.userId,
        amount : req.body.amount
    };


    try{
        await db.$transaction([
            db.balance.updateMany({
                where : {
                    userId : paymentInfoPayload.userId
                },
                data : {
                    amount : {
                        increment : Number(paymentInfoPayload.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where : {
                    token : paymentInfoPayload.token
                },
                data : {
                    status : "Success"
                }
            })
        ]);

        res.json({
            message : "Captured"
        });

    }
    catch(e){
        console.error(e);
        res.status(411).json({
            message : "Error while processing webhook"
        });
    }



})

app.listen(3002,()=>{
    console.log("Web hook server is running on port 3002");
});