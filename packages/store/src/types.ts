import {z} from "zod"

const userSigninSchema = z.object({
    csrfToken : z.string(),
    phone : z.string().length(10),
    password : z.string()
});


export type userSigninType = z.infer<typeof userSigninSchema>;
