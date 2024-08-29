import { useRecoilState } from "recoil";
import { balanceAtom } from "../atoms"; 
import getBalance from "../actions/getBalance";
import {useEffect} from "react";

export function useBalance(userId:string){
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
        },5000);
    },[]);

    return [balance.toString(),setBalance];
}