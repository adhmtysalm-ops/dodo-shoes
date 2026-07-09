export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Overview</h1>
        <button className="bg-brand-black text-brand-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Revenue</h3>
          <p className="text-3xl font-semibold">$12,450</p>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <span>+14% from last month</span>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Active Orders</h3>
          <p className="text-3xl font-semibold">45</p>
          <div className="mt-4 flex items-center text-sm text-brand-red">
            <span>-2% from last month</span>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Products in Stock</h3>
          <p className="text-3xl font-semibold">124</p>
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl p-6 bg-white">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div>
              <p className="font-medium text-sm">Order #3049</p>
              <p className="text-xs text-gray-500">Placed 2 hours ago</p>
            </div>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pending</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div>
              <p className="font-medium text-sm">Order #3048</p>
              <p className="text-xs text-gray-500">Placed 5 hours ago</p>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Shipped</span>
          </div>
        </div>
      </div>
    </div>
  );
}
