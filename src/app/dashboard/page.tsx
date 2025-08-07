import { ChevronDown, MoreHorizontal } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AvatarGroup from "@/components/ui/AvatarGroup";
import Tabs from "@/components/ui/Tabs";
import Summary from "@/components/dashboard/Summary";
import TransactionTable from "@/components/dashboard/TransactionTable";
import Image from 'next/image';
import { users } from "@/constant/data/avatar";

export default function DashboardPage() {
  const content=<div>
     <Summary />
      <div className="mt-10">
        <TransactionTable />
      </div>
      </div>
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content:content
    },
    {
      id: 'transactions',
      label: 'Transactions',
      content: <h1>Transactions</h1>
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
         <div className="flex items-center gap-4 ">
              <h1 className=" text-xl lg:text-large   font-bold leading-6 lg:leading-large flex items-center gap-2">Wallet Ledger <span className="text-text-secondary text-medium leading-medium">
              <Image src="/caret-down.svg" alt="Caret Down" width={16} height={16} /> 
              </span></h1>
        
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
    
     
      <Tabs tabs={tabs} defaultTab="overview"  /> 
    </div>
  );
}
