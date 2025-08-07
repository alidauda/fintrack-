import React from 'react';

const SummaryErrorState: React.FC<{ message?: string }> = ({ message = 'Failed to load summary.' }) => (
  <div className="w-full flex flex-col items-center justify-center py-12 text-red-400">
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-4">
      <circle cx="24" cy="24" r="22" fill="#fee2e2" stroke="#f87171" strokeWidth="2" />
      <path d="M24 16v10" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="34" r="2" fill="#f87171" />
    </svg>
    <span className="text-lg font-medium">{message}</span>
  </div>
);

export default SummaryErrorState;