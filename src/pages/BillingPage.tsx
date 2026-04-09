import { useMemo } from 'react';
import { usePurchase } from '../context/PurchaseContext';
import InvoiceList from '../components/InvoiceList.tsx';

export default function BillingPage() {
  const { invoices } = usePurchase();

  const trending = useMemo(() => {
    const byProduct: Record<string, number> = {};
    invoices.forEach((inv) => {
      byProduct[inv.productName] = (byProduct[inv.productName] ?? 0) + 1;
    });
    return Object.entries(byProduct)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [invoices]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Billing</h1>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-3">Trending products</h2>
        {trending.length === 0 ? (
          <p className="text-gray-500 text-sm">No purchases yet. Trending is based on most purchased items.</p>
        ) : (
          <ul className="flex flex-wrap gap-3">
            {trending.map(({ name, count }) => (
              <li
                key={name}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 text-sm font-medium"
              >
                {name} <span className="text-gray-500 font-normal">({count})</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-lg font-medium text-gray-900 mb-3">Invoices</h2>
        <InvoiceList invoices={invoices} />
      </section>
    </div>
  );
}
