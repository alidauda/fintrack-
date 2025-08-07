import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <svg width="120" height="120" fill="none" viewBox="0 0 120 120" className="mx-auto">
            <circle cx="60" cy="60" r="58" fill="#fee2e2" stroke="#f87171" strokeWidth="4" />
            <text x="60" y="75" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#f87171">404</text>
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[#437D8E] text-white font-medium rounded-lg hover:bg-[#3A6C7B] transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
} 