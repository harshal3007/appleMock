import type { Product } from '../types';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

interface ProductCardProps {
  product: Product;
  onBuyNow?: (product: Product) => void;
}

export default function ProductCard({ product, onBuyNow }: ProductCardProps) {
  return (
    <article className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-xl font-medium text-gray-700 mb-4">
          {formatPrice(product.price)}
        </p>
        <button
          type="button"
          onClick={() => onBuyNow?.(product)}
          className="mt-auto w-full py-3 px-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}
