import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export const GET = async () => {

    const session : any = await getServerSession(authOptions);
    console.log('Session:', session);

    if (session && session.user) {
        return NextResponse.json({
            user: session.user
        });
    } else {
        return NextResponse.json({
            msg: "Bitch you ain't logged in"
        });
    }
}