import React from 'react';

const SummaryEmptyState: React.FC = () => (
  <div className="w-full flex flex-col items-center justify-center py-12 text-gray-400">
    <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="mb-4">
      <rect x="6" y="14" width="36" height="24" rx="4" fill="#e5e7eb" />
      <rect x="12" y="20" width="24" height="4" rx="2" fill="#d1d5db" />
      <rect x="12" y="28" width="16" height="4" rx="2" fill="#d1d5db" />
    </svg>
    <span className="text-lg font-medium">No summary data found.</span>
  </div>
);

export default SummaryEmptyState;