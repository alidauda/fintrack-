import React from 'react';
import { cn } from '@/utils/cn';

interface SortCaretIconProps {
  active?: 'asc' | 'desc';
  className?: string;
  size?: number;
}

export const SortCaretIcon: React.FC<SortCaretIconProps> = ({ active, className, size = 8 }) => (
  <span className={cn('flex flex-col ml-1', className)}>

    <svg
      width={size}
      height={size}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'mb-0.5 transition-transform rotate-180',
        active === 'asc' ? 'text-[#437D8E] opacity-100' : 'text-gray-400 opacity-50'
      )}
    >
      <path d="M2.86274 0.25C1.65111 0.25 1.04529 0.25 0.764766 0.489594C0.521356 0.697486 0.392181 1.00934 0.417296 1.32846C0.446241 1.69624 0.874618 2.12462 1.73137 2.98137L3.86863 5.11863C4.26465 5.51465 4.46265 5.71265 4.69098 5.78684C4.89183 5.8521 5.10817 5.8521 5.30902 5.78684C5.53735 5.71265 5.73535 5.51465 6.13137 5.11863L8.26863 2.98137C9.12538 2.12462 9.55376 1.69624 9.5827 1.32846C9.60782 1.00934 9.47864 0.697486 9.23523 0.489594C8.95471 0.25 8.34889 0.25 7.13726 0.25H2.86274Z" fill="currentColor"/>
    </svg>
   
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'transition-transform',
        active === 'desc' ? 'text-[#437D8E] opacity-100' : 'text-gray-400 opacity-50'
      )}
    >
      <path d="M2.86274 0.25C1.65111 0.25 1.04529 0.25 0.764766 0.489594C0.521356 0.697486 0.392181 1.00934 0.417296 1.32846C0.446241 1.69624 0.874618 2.12462 1.73137 2.98137L3.86863 5.11863C4.26465 5.51465 4.46265 5.71265 4.69098 5.78684C4.89183 5.8521 5.10817 5.8521 5.30902 5.78684C5.53735 5.71265 5.73535 5.51465 6.13137 5.11863L8.26863 2.98137C9.12538 2.12462 9.55376 1.69624 9.5827 1.32846C9.60782 1.00934 9.47864 0.697486 9.23523 0.489594C8.95471 0.25 8.34889 0.25 7.13726 0.25H2.86274Z" fill="currentColor"/>
    </svg>
  </span>
);

export default SortCaretIcon;