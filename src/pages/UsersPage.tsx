import { useState } from 'react';
import { usePurchase } from '../context/PurchaseContext';
import UserTable from '../components/UserTable';
import ManageUserModal from '../components/ManageUserModal';
import type { User } from '../types';

export default function UsersPage() {
  const { users, updateUser } = usePurchase();
  const [nameFilter, setNameFilter] = useState('');
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  const handleSave = (email: string, updates: { name: string; role: string }) => {
    updateUser(email, updates);
    setUserToEdit(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Manage</h1>
      <div className="mb-4">
        <label htmlFor="user-name-filter" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          id="user-name-filter"
          type="text"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          placeholder="Filter by name"
          className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
        />
      </div>
      <UserTable
        users={users}
        nameFilter={nameFilter}
        onEdit={setUserToEdit}
      />
      <ManageUserModal
        isOpen={!!userToEdit}
        onClose={() => setUserToEdit(null)}
        user={userToEdit}
        onSave={handleSave}
      />
    </div>
  );
}
