import { ChevronDown, MoreHorizontal } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AvatarGroup from "@/components/ui/AvatarGroup";
import Tabs from "@/components/ui/Tabs";
import OverviewTab from "@/components/dashboard/OverviewTab";
import Summary from "@/components/dashboard/Summary";
import TransactionTable from "@/components/dashboard/TransactionTable";
// import TransactionsTab from "@/components/dashboard/TransactionsTab";
import { users } from "@/constant/data/avatar";

export default function DashboardPage() {
  // const tabs = [
  //   {
  //     id: 'overview',
  //     label: 'Overview',
  //     content: <OverviewTab />
  //   },
  //   {
  //     id: 'transactions',
  //     label: 'Transactions',
  //     content: <TransactionsTab />
  //   }
  // ];

  return (
    <div>
      <div className="flex justify-between items-center">
         <div className="flex items-center gap-2 ">
              <h1 className="text-large   font-bold  leading-large">Wallet Ledger</h1>
            <ChevronDown size={20} className="cursor-pointer" />
            <Badge value="Active" variant="success" />
         </div>
                   <div className="flex items-center gap-2">
<button className="cursor-pointer bg-[#4B8B9F] text-text-primary rounded-full px-[18px] py-1.5 text-medium leading-medium">Share</button>
         <div className="border-[1.5px] border-[#49656E33] rounded-full p-2">   <MoreHorizontal size={20} className="cursor-pointer" />
         </div>
          </div>
      </div>
      <div className="py-[26px]">
        <AvatarGroup users={users} />
      </div>
      <Summary />
      <div className="mt-10">
        <TransactionTable />
      </div>
     
      {/* <Tabs tabs={tabs} defaultTab="overview" className="max-w-7xl mx-auto" /> */}
    </div>
  );
}
