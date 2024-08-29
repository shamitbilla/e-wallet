import { AppBar } from "@repo/ui/app-bar";
import {BalanceCard} from "@repo/ui/balance-card" 

export default async function Page() {
  return (
    <div>
      <AppBar/>
      <div className="bg-[#f1f4f9] h-screen">
        <BalanceCard></BalanceCard>
      </div>
      
    </div>
  );
}