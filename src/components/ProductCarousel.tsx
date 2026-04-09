import { useState, useEffect } from 'react';
import type { Product } from '../types';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

interface ProductCarouselProps {
  products: Product[];
  onBuyNow?: (product: Product) => void;
}

export default function ProductCarousel({ products, onBuyNow }: ProductCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const transitionMs = 900;

  const displayProducts = products.length > 1 ? [...products, products[0]] : products;
  const logicalIndex = index === products.length ? 0 : index;

  useEffect(() => {
    if (products.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearInterval(id);
  }, [products.length]);

  useEffect(() => {
    if (products.length <= 1) return;
    if (index !== products.length) return;

    const timer = window.setTimeout(() => {
      setIsResetting(true);
      setIndex(0);
      requestAnimationFrame(() => setIsResetting(false));
    }, transitionMs);

    return () => window.clearTimeout(timer);
  }, [index, products.length]);

  if (!products.length) return null;

  return (
    <section id="carousel" className="relative min-h-[85vh] bg-neutral-50 overflow-hidden">
      <div
        className={`flex ${isResetting ? 'transition-none' : 'transition-transform duration-900 ease-in-out'} will-change-transform`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {displayProducts.map((product, i) => (
          <div
            key={`${product.id}-${i}`}
            className={`w-full shrink-0 min-h-[85vh] px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 transition-opacity duration-700 ease-in-out ${
              i === logicalIndex ? 'opacity-100' : 'opacity-65'
            }`}
          >
            <div className="flex-1 max-w-xl w-full flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 mb-6">
                {formatPrice(product.price)}
              </p>
              <button
                type="button"
                onClick={() => onBuyNow?.(product)}
                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Buy Now
              </button>
            </div>
            <div className="flex-1 max-w-2xl w-full flex justify-center md:justify-end">
              <div className="w-full max-w-[560px] aspect-4/3 rounded-2xl bg-white/60 border border-gray-200/70 p-4 md:p-6 flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {products.length > 1 && (
        <div className="absolute bottom-6 right-6 flex gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setIsResetting(false);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === logicalIndex ? 'w-6 bg-gray-900' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
