import Skeleton from './Skeleton';

const TableSkeleton = () => (
  <div className="w-full">
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-6 py-3"><Skeleton className="h-4 w-16 mx-auto" /></th>
            <th className="px-6 py-3"><Skeleton className="h-4 w-24 mx-auto" /></th>
            <th className="px-6 py-3"><Skeleton className="h-4 w-20 mx-auto" /></th>
            <th className="px-6 py-3"><Skeleton className="h-4 w-16 mx-auto" /></th>
            <th className="px-6 py-3"><Skeleton className="h-4 w-12 mx-auto" /></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr key={i}>
              {[...Array(5)].map((_, j) => (
                <td key={j} className="px-6 py-4">
                  <Skeleton className="h-4 w-full" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TableSkeleton;