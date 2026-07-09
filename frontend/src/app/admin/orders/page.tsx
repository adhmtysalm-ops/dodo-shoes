"use client";
import { useState, useEffect } from 'react';

type Order = {
  id: number;
  user_id: number;
  total_amount: number;
  status: string;
};

export default function OrdersAdmin() {
  const [orders, setOrders] = useState<Order[]>([]);

  // We need to fetch all orders but the current API only has /api/orders/:userId
  // In a real app we would have an admin route /api/admin/orders
  // For UI sake, we will leave this empty initially or show a dummy list.

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold tracking-tight">Orders</h1>
      </div>

      <div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
            <tr>
              <th className="px-6 py-4 font-medium">Order ID</th>
              <th className="px-6 py-4 font-medium">User ID</th>
              <th className="px-6 py-4 font-medium">Total</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td colSpan={5} className="px-6 py-8 text-center text-gray-500">No recent orders.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
