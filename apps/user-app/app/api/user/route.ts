import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";

export const GET = async () => {

    return NextResponse.json({
        msg : "hey bitch"
    });
}

