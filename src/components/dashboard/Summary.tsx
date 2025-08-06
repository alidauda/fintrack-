import { summaryData } from "@/constant/data/summary";
import { SummaryItem } from "@/types/summary";
import { MoreHorizontal } from "lucide-react";

export default function Summary() {
  return (
    <div>
      <h2 className="text-[20px] font-bold text-text-primary leading-6">Summary</h2>
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
       {summaryData.map((item:SummaryItem) => (
          <div key={item.name} className="w-full lg:w-1/2 bg-background-secondary rounded-[20px] p-7">
         
            <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-text-primary leading-6">{item.name}
             
            </h3>
            <div><MoreHorizontal className="w-6 h-6 text-text-primary" /></div>
            </div>
            <p className="text-2xl font-bold text-large leading-10 mt-4">{item.amount}</p>
            <span className={`text-sm ${item.isPositive ? "text-[#3E7383]" : "text-[#C6381B]"}`}>{item.change}</span>
         
        </div>
       ))}
      </div>
    </div>
  );
}