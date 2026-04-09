import { Outlet, NavLink, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 h-14 flex items-center justify-between">
          <span className="font-semibold text-gray-800">Dashboard</span>
          <Link
            to="/"
            className="text-xs text-gray-500 hover:text-gray-900"
          >
            Store
          </Link>
        </div>
        <nav className="p-2 flex flex-col gap-1">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/dashboard/billing"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            Billing
          </NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
