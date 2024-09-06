import { useRecoilState } from "recoil";
import { balanceAtom } from "../atoms"; 
import getBalance from "../actions/getBalance";
import {useEffect} from "react";
import {useSession} from "next-auth/react"

export function useBalance(){
    const session = useSession();
    //@ts-ignore
    const userId = session.data?.user?.id;
    const [balance,setBalance] = useRecoilState(balanceAtom);
    useEffect(()=>{
        setInterval(()=>{
            getBalance(userId).then((result) => {
                if (result !== undefined) {
                    setBalance(result);
                } else {
                    setBalance(0); // or some other default value
                }
            });
        },3000);
    },[]);

    return balance.toString();
}