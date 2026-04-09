import { useMemo, useState } from 'react';
import type { Invoice } from '../types';

const PAGE_SIZE = 5;

function safeTime(iso: unknown): number {
  if (typeof iso !== 'string') return 0;
  const t = Date.parse(iso);
  return Number.isFinite(t) ? t : 0;
}

function formatDate(iso: unknown): string {
  const t = safeTime(iso);
  if (!t) return '-';
  return new Date(t).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

interface InvoiceListProps {
  invoices: Invoice[];
}

export default function InvoiceList({ invoices }: InvoiceListProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const sorted = useMemo(() => {
    return [...(invoices ?? [])].sort((a, b) => safeTime(b.date) - safeTime(a.date));
  }, [invoices]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const pageIndex = Math.min(currentPage, totalPages - 1);
  const pageInvoices = useMemo(
    () => sorted.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE),
    [sorted, pageIndex]
  );

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Invoice ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Product
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                User Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {pageInvoices.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  No invoices yet.
                </td>
              </tr>
            ) : (
              pageInvoices.map((inv) => (
                <tr key={inv.invoiceId} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-mono text-gray-900">{inv.invoiceId}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">{inv.productName}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{inv.userEmail}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{formatDate(inv.date)}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                        inv.status === 'paid'
                          ? 'bg-green-100 text-green-800'
                          : inv.status === 'pending'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {sorted.length > 0 && (
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={pageIndex === 0}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &larr; Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {pageIndex + 1} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={pageIndex >= totalPages - 1}
            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
}

