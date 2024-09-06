import { useBalance } from "@repo/lib/hooks/useBalance";
import { memo } from "react";

export const Balance = () => {
  const balance = useBalance();
  return <>
    <div>
      ₹{balance}.00
    </div>
  </>
};
