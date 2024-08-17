import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import db from "@repo/db/client"
import { JWT_SECRET } from "@/config";
// import userSigninType from "@repo/store/userSigninType"
import {z} from "zod"
import { basename } from "path";
import { pages } from "next/dist/build/templates/app-page";
import { signIn } from "next-auth/react";

const userSigninSchema = z.object({
    csrfToken : z.string(),
    phone : z.string().length(10),
    password : z.string().min(1)
});


export const authOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          phone: { label: "Phone number", type: "text", placeholder: "1231231231" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials: Record<"phone" | "password", string> | undefined) {          
           const parsedCreds = await userSigninSchema.safeParse(credentials);
            if(!parsedCreds.success || !credentials)
                return null;

            else{
                const existingUser = await db.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString()
                        }
                    }
                    return null;
                }

                return null;
            }

            
        }
    })
    ],
    secret: JWT_SECRET || "secret",
    
    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub
            return session
        }
    },
    pages : {
        signIn : "/signin"
    }   
    
}
