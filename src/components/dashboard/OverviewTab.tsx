export default function OverviewTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Account Overview</h2>
      
      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Current Balance</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">$2,830</p>
          <p className="mt-1 text-sm text-green-600">+2.5% from last month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Income</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">$3,000</p>
          <p className="mt-1 text-sm text-gray-500">This month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Expenses</h3>
          <p className="mt-2 text-3xl font-bold text-red-600">$2,170</p>
          <p className="mt-1 text-sm text-gray-500">This month</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Salary</p>
                  <p className="text-xs text-gray-500">2023-10-01</p>
                </div>
              </div>
              <span className="text-sm font-medium text-green-600">+$3,000</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Rent</p>
                  <p className="text-xs text-gray-500">2023-10-06</p>
                </div>
              </div>
              <span className="text-sm font-medium text-red-600">-$1,200</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Car Payment</p>
                  <p className="text-xs text-gray-500">2023-10-08</p>
                </div>
              </div>
              <span className="text-sm font-medium text-red-600">-$400</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}