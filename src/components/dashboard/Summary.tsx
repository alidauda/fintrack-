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
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary leading-6 mb-4 sm:mb-6">Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {summaryData.map((item: SummaryItem) => (
          <div key={item.name} className="bg-background-secondary rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 overflow-hidden transition-all hover:shadow-lg">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-text-primary leading-5 sm:leading-6 truncate pr-2 flex-1">{item.name}</h3>
              <div className="flex-shrink-0 ml-2">
                <MoreHorizontal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-text-primary" />
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-large leading-6 sm:leading-8 md:leading-10 mb-2 sm:mb-3 truncate">{item.amount}</p>
            <span className={`text-xs sm:text-sm md:text-base font-medium ${item.isPositive ? "text-[#3E7383]" : "text-[#C6381B]"}`}>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}