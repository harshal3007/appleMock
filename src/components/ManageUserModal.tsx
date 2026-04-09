import { useState, useEffect } from 'react';
import type { User } from '../types';

interface ManageUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onSave: (email: string, updates: { name: string; role: string }) => void;
}

export default function ManageUserModal({ isOpen, onClose, user, onSave }: ManageUserModalProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setRole(user.role);
    }
  }, [user]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    onSave(user.email, { name: name.trim() || user.name, role: role.trim() || user.role });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div
        className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="manage-user-title"
      >
        <h2 id="manage-user-title" className="text-xl font-semibold text-gray-900 mb-4">
          Manage User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="manage-user-name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              id="manage-user-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="manage-user-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="manage-user-email"
              type="text"
              value={user?.email ?? ''}
              readOnly
              className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="manage-user-role" className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <input
              id="manage-user-role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 px-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 px-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
