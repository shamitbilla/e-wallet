import bcrypt from "bcrypt"
import db from "@repo/db/client"
import { JWT_SECRET } from "../config";
import GoogleProvider from "next-auth/providers/google";
import {GOOGLE_ID, GOOGLE_SECRET} from "../config"


export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: GOOGLE_ID || "",
        clientSecret: GOOGLE_SECRET || ""
      })
    ],
    secret: JWT_SECRET || "secret",
    callbacks: {
        
        async signIn({ user, account } : any)
        {   
            const ExistingUser = await db.merchant.findFirst({
                where : {
                    email : user.email
                }
            });

            if(ExistingUser)
            {
                console.log("old user");
                return true;
            }
            else
            {
                try{
                    const newUser = await db.merchant.create({
                        data : {
                            name : user.name,
                            email : user.email,
                            auth_type : account.provider
                        }
                    });

                    console.log("new user")

                    return true;
    
                }
                catch(e){
                    console.log(e);

                    return false;
                }
            }
                

            
        },

        async session({ token, session }: any) {
            session.user.id = token.sub
            return session
        },
        async callbackUrl(req: any) {
            const host = req.headers.host;
            return `http://${host}/`;
        }
    }
  }