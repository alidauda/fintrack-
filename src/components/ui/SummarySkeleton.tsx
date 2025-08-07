import Skeleton from './Skeleton';

const SummarySkeleton = () => (
  <div>
    <h2 className="text-[20px] font-bold text-text-primary leading-6 mb-4">
      <Skeleton className="h-6 w-32" />
    </h2>
    <div className="flex flex-wrap lg:flex-nowrap gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-full lg:w-1/2 bg-background-secondary rounded-[20px] p-7">
          <div className="flex justify-between items-center mb-4">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-6 w-6" />
          </div>
          <Skeleton className="h-8 w-32 mb-2" />
          <Skeleton className="h-4 w-16" />
        </div>
      ))}
    </div>
  </div>
);

export default SummarySkeleton;