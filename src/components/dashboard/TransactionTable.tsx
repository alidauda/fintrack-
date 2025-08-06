'use client'

import { useState } from 'react'

interface Transaction {
  date: string
  remark: string
  amount: number
  currency: string
  type: 'Credit' | 'Debit'
}

type SortField = keyof Transaction
type SortDirection = 'asc' | 'desc'

export default function TransactionTable() {
  const [transactions] = useState<Transaction[]>([
    { date: '2023-10-01', remark: 'Salary', amount: 3000, currency: 'USD', type: 'Credit' },
    { date: '2023-10-02', remark: 'Groceries', amount: -150, currency: 'USD', type: 'Debit' },
    { date: '2023-10-03', remark: 'Gym Membership', amount: -50, currency: 'USD', type: 'Debit' },
    { date: '2023-10-04', remark: 'Dinner', amount: -40, currency: 'USD', type: 'Debit' },
    { date: '2023-10-05', remark: 'Movie Tickets', amount: -30, currency: 'USD', type: 'Debit' },
    { date: '2023-10-06', remark: 'Rent', amount: -1200, currency: 'USD', type: 'Debit' },
    { date: '2023-10-07', remark: 'Utilities', amount: -100, currency: 'USD', type: 'Debit' },
    { date: '2023-10-08', remark: 'Car Payment', amount: -400, currency: 'USD', type: 'Debit' },
    { date: '2023-10-09', remark: 'Insurance', amount: -200, currency: 'USD', type: 'Debit' },
  ])

  const [sortField, setSortField] = useState<SortField>('date')
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

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
    if (sortField !== field) {
      return (
        <div className="flex flex-col ml-1">
          <div className="w-4 h-4 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-400 mb-0.5"></div>
          <div className="w-4 h-4 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400"></div>
        </div>
      )
    }

    return (
      <div className="flex flex-col ml-1">
            <div className={`w-4 h-4 border-l-2 border-r-2 border-b-2 border-transparent mb-0.5 ${
          sortDirection === 'asc' ? 'border-b-blue-600' : 'border-b-gray-400'
        }`}></div>
        <div className={`w-4 h-4 border-l-2 border-r-2 border-t-2 border-transparent ${
          sortDirection === 'desc' ? 'border-t-blue-600' : 'border-t-gray-400'
        }`}></div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center">
                  Date
                  <SortIcon field="date" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('remark')}
              >
                <div className="flex items-center">
                  Remark
                  <SortIcon field="remark" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center">
                  Amount
                  <SortIcon field="amount" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('currency')}
              >
                <div className="flex items-center">
                  Currency
                  <SortIcon field="currency" />
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => handleSort('type')}
              >
                <div className="flex items-center">
                  Type
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
                  <div className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      transaction.type === 'Credit' ? 'bg-green-500' : 'bg-red-500'
                    }`}></div>
                    {transaction.type}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
