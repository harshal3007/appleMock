import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">Overview and quick links.</p>
      <div className="flex gap-4">
        <Link
          to="/dashboard/users"
          className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800"
        >
          Manage Users
        </Link>
        <Link
          to="/dashboard/billing"
          className="px-4 py-2 bg-gray-200 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-300"
        >
          Billing
        </Link>
      </div>
    </div>
  );
}
