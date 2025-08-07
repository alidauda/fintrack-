'use client'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import Badge from '@/components/ui/Badge'
import SortCaretIcon from '@/components/ui/SortCaretIcon';
import { getTransactions } from '@/api/transactions';
import { Transaction } from '@/constant/data/transactions';
import TableSkeleton from '@/components/ui/TableSkeleton';
import TableEmptyState from '@/components/ui/TableEmptyState';
import TableErrorState from '@/components/ui/TableErrorState';


type SortField = keyof Transaction
type SortDirection = 'asc' | 'desc'

export default function TransactionTable() {
 

  const [sortField, setSortField] = useState<SortField>('date')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  const { data: transactions, isLoading, isError, error } = useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
  });

  if (isLoading) {
    return <TableSkeleton />;
  }
  if (isError) {
    return <TableErrorState message={error.message} />;
  }
  if (!transactions || transactions.length === 0) {
    return <TableEmptyState />;
  }

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const sortedTransactions = [...transactions].sort((a, b) => {
    let aValue = a[sortField]
    let bValue = b[sortField]

    if (typeof aValue === 'string') {
      aValue = aValue.toLowerCase()
      bValue = (bValue as string).toLowerCase()
    }

    if (aValue < bValue) {
      return sortDirection === 'asc' ? -1 : 1
    }
    if (aValue > bValue) {
      return sortDirection === 'asc' ? 1 : -1
    }
    return 0
  })

  const formatAmount = (amount: number) => {
    return amount >= 0 ? `$${amount.toLocaleString()}` : `-$${Math.abs(amount).toLocaleString()}`
  }

  const SortIcon = ({ field }: { field: SortField }) => {
    const isActive = sortField === field;
    let active: 'asc' | 'desc' | undefined = undefined;
    if (isActive) active = sortDirection;
    return <SortCaretIcon active={active} />;
  };

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="min-w-full w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('date')}
                  >
                    <div className="flex items-center">
                      <span className="truncate">Date</span>
                      <SortIcon field="date" />
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('remark')}
                  >
                    <div className="flex items-center">
                      <span className="truncate">Remark</span>
                      <SortIcon field="remark" />
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('amount')}
                  >
                    <div className="flex items-center">
                      <span className="truncate">Amount</span>
                      <SortIcon field="amount" />
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('currency')}
                  >
                    <div className="flex items-center">
                      <span className="truncate">Currency</span>
                      <SortIcon field="currency" />
                    </div>
                  </th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('type')}
                  >
                    <div className="flex items-center">
                      <span className="truncate">Type</span>
                      <SortIcon field="type" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedTransactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.remark}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatAmount(transaction.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <Badge
                        value={transaction.type}
                        variant={transaction.type === 'Credit' ? 'success' : 'error'}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <span className="text-sm font-medium text-gray-700">Sort by:</span>
          <select 
            value={sortField}
            onChange={(e) => handleSort(e.target.value as SortField)}
            className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white"
          >
            <option value="date">Date</option>
            <option value="remark">Remark</option>
            <option value="amount">Amount</option>
            <option value="currency">Currency</option>
            <option value="type">Type</option>
          </select>
        </div>
        
        {sortedTransactions.map((transaction, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{transaction.remark}</p>
                <p className="text-xs text-gray-500 mt-1">{transaction.date}</p>
              </div>
              <Badge
                value={transaction.type}
                variant={transaction.type === 'Credit' ? 'success' : 'error'}
              />
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{transaction.currency}</span>
              </div>
              <span className={`text-lg font-semibold ${
                transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {formatAmount(transaction.amount)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>


  )
}
