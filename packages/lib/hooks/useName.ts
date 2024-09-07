import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { userNameAtom } from "../atoms";
import { useEffect, useState } from "react";
import db from "../../db";

export default function useName() {
  const session = useSession();
  //@ts-ignore
  const userId = session.data?.user?.id;

  const [name, setName] = useRecoilState(userNameAtom);

  useEffect(() => {
    console.log("hola");
    async function fetchName() {
      const userName = await db.user.findFirst({
        where: {
          id: userId
        },
        select: {
          name: true
        }
      });

      setName(userName?.name || "S");
    };
    fetchName();
  }, []);

  return name;
}