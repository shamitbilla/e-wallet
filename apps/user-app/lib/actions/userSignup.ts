"use server"

import {z} from "zod"

const userSignupSchema = z.object({
    email : z.string().email(),
    name : z.string(),
    phone : z.string().length(10),
    password : z.string().min(1)

});

export type userSignupType = z.infer<typeof userSignupSchema>;
export default async function userSignup(data : userSignupType){
    const validation = userSignupSchema.safeParse(data);
    if(validation.success)
    {
        return "yay";
    }
    else
    {
        return "no";
    }
}