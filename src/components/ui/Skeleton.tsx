import React from 'react';
import { cn } from '@/utils/cn';

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => (
  <div
    className={cn(
      'animate-pulse bg-gray-200 rounded',
      className
    )}
    {...props}
  />
);

export default Skeleton;