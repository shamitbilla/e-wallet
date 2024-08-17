
import { useSession } from "next-auth/react";
import { AppBar } from "@repo/ui/app-bar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Page() {
  return (
    <div>
      <AppBar/>
    </div>
  );
}