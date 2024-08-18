import { NextResponse,NextRequest } from "next/server";
import bcrypt from "bcrypt"
import {z} from "zod"
import db from "@repo/db/client"

const userSignupSchema = z.object({
    email : z.string().email(),
    name : z.string(),
    number : z.string().length(10),
    password : z.string().min(1)
  
});

export const GET = async () => {
    return NextResponse.json({
        msg : "hey signup"
    });
}

export async function POST(req:NextRequest){
    const payload = await req.json();
    const validation = userSignupSchema.safeParse(payload);
    if(!validation.success)
    {
        return NextResponse.json({
            "msg" : "Invalid credential format"
        },
        {
            status : 403
        })
    }


    const password = payload.password;
    const finalPassword = bcrypt.hashSync(password,bcrypt.genSaltSync());

    try{
        const existingUser = await db.user.findFirst({
            where : {
                number : payload.number
            }
        });
    
        if(existingUser)
        {
            return NextResponse.json({
                msg : "User already exists"
            },{
                status : 403
            });
        }
    
        await db.user.create({
            data : {
                ...payload,
                password : finalPassword
            }
        });
    
        return NextResponse.json({
            "password" : finalPassword
        },{
            status : 200
        });
    }
    catch(e)
    {
        return NextResponse.json({
            "Error msg" : e
        });
    }
    
}

