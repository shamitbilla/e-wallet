import {BalanceCard} from "@repo/ui/balance-card"
import {RecentTransactions} from "@repo/ui/recent-transactions" 

export default async function Page() {
  return (
    <div>
        <RecentTransactions></RecentTransactions>
        <BalanceCard></BalanceCard>
    </div>
  );
}