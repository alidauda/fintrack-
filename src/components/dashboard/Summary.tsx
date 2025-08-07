'use client'
import { useQuery } from '@tanstack/react-query';
import { getSummary } from '@/api/summary';
import { SummaryItem } from '@/types/summary';
import SummarySkeleton from '@/components/ui/SummarySkeleton';
import SummaryErrorState from '@/components/ui/SummaryErrorState';
import SummaryEmptyState from '@/components/ui/SummaryEmptyState';
import { MoreHorizontal } from 'lucide-react';

export default function Summary() {
  const { data: summaryData, isLoading, isError, error } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
  });

  if (isLoading) return <SummarySkeleton />;
  if (isError) return <SummaryErrorState message={error.message} />;
  if (!summaryData || summaryData.length === 0) return <SummaryEmptyState />;

  return (
    <div className="w-full">
      <h2 className="text-[20px] font-bold text-text-primary leading-6 mb-4">Summary</h2>
      <div className="flex flex-wrap lg:flex-nowrap gap-4">
        {summaryData.map((item: SummaryItem) => (
          <div key={item.name} className="w-full sm:w-1/2 lg:w-1/4 bg-background-secondary rounded-[20px] p-4 sm:p-7 overflow-hidden">
            <div className="flex justify-between items-center">
              <h3 className="text-sm sm:text-lg font-bold text-text-primary leading-6 truncate">{item.name}</h3>
              <div className="flex-shrink-0"><MoreHorizontal className="w-4 h-4 sm:w-6 sm:h-6 text-text-primary" /></div>
            </div>
            <p className="text-lg sm:text-2xl font-bold text-large leading-10 mt-4 truncate">{item.amount}</p>
            <span className={`text-xs sm:text-sm ${item.isPositive ? "text-[#3E7383]" : "text-[#C6381B]"}`}>{item.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}