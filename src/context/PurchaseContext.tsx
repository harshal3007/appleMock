import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getItem, setItem } from '../utils/storage';
import type { Invoice, User } from '../types';

const USERS_KEY = 'apple_users';
const INVOICES_KEY = 'apple_invoices';

interface PurchaseContextValue {
  users: User[];
  invoices: Invoice[];
  addUser: (user: User) => void;
  updateUser: (email: string, updates: Partial<Pick<User, 'name' | 'role'>>) => void;
  addInvoice: (invoice: Omit<Invoice, 'invoiceId' | 'date' | 'status'>) => Invoice;
  getUserByEmail: (email: string) => User | undefined;
}

const PurchaseContext = createContext<PurchaseContextValue | null>(null);

function loadUsers(): User[] {
  const data = getItem(USERS_KEY);
  return Array.isArray(data) ? data : [];
}

function loadInvoices(): Invoice[] {
  const data = getItem(INVOICES_KEY);
  return Array.isArray(data) ? data : [];
}

export function PurchaseProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(loadUsers);
  const [invoices, setInvoices] = useState<Invoice[]>(loadInvoices);

  const persistUsers = useCallback((next: User[]) => {
    setUsers(next);
    setItem(USERS_KEY, next);
  }, []);

  const persistInvoices = useCallback((next: Invoice[]) => {
    setInvoices(next);
    setItem(INVOICES_KEY, next);
  }, []);

  const addUser = useCallback(
    (user: User) => {
      const exists = users.some((u) => u.email.toLowerCase() === user.email.toLowerCase());
      if (exists) return;
      persistUsers([...users, { ...user, itemsPurchased: user.itemsPurchased ?? 0 }]);
    },
    [users, persistUsers]
  );

  const updateUser = useCallback(
    (email: string, updates: Partial<Pick<User, 'name' | 'role'>>) => {
      const next = users.map((u) =>
        u.email.toLowerCase() === email.toLowerCase() ? { ...u, ...updates } : u
      );
      persistUsers(next);
    },
    [users, persistUsers]
  );

  const addInvoice = useCallback(
    (input: Omit<Invoice, 'invoiceId' | 'date' | 'status'>): Invoice => {
      const date = new Date().toISOString();
      const invoiceId = `inv_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      const invoice: Invoice = {
        ...input,
        invoiceId,
        date,
        status: 'paid',
      };
      persistInvoices([invoice, ...invoices]);
      const existing = users.find((u) => u.email.toLowerCase() === input.userEmail.toLowerCase());
      if (existing) {
        persistUsers(
          users.map((u) =>
            u.email.toLowerCase() === input.userEmail.toLowerCase()
              ? { ...u, itemsPurchased: (u.itemsPurchased ?? 0) + 1 }
              : u
          )
        );
      }
      return invoice;
    },
    [invoices, users, persistInvoices, persistUsers]
  );

  const getUserByEmail = useCallback(
    (email: string) => users.find((u) => u.email.toLowerCase() === email.toLowerCase()),
    [users]
  );

  const value = useMemo<PurchaseContextValue>(
    () => ({
      users,
      invoices,
      addUser,
      updateUser,
      addInvoice,
      getUserByEmail,
    }),
    [users, invoices, addUser, updateUser, addInvoice, getUserByEmail]
  );

  return (
    <PurchaseContext.Provider value={value}>
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchase() {
  const ctx = useContext(PurchaseContext);
  if (!ctx) throw new Error('usePurchase must be used within PurchaseProvider');
  return ctx;
}
