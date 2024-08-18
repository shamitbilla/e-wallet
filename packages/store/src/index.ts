import {z} from "zod"

const userSigninSchema = z.object({
    csrfToken : z.string(),
    phone : z.string().length(10),
    password : z.string()
});


export type userSigninType = z.infer<typeof userSigninSchema>;

const userSignupSchema = z.object({
    email : z.string().email(),
    name : z.string(),
    phone : z.string().length(10),
    password : z.string().min(1)

});

export type userSignupType = z.infer<typeof userSignupSchema>;