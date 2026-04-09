import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../types';

interface ProductCategoryRowProps {
  title: string;
  subtitle: string;
  products: Product[];
  onBuyNow?: (product: Product) => void;
}

export default function ProductCategoryRow({
  title,
  subtitle,
  products,
  onBuyNow,
}: ProductCategoryRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const row = rowRef.current;
    if (!row) return;
    const maxScrollLeft = row.scrollWidth - row.clientWidth;
    const epsilon = 2;
    setCanScrollLeft(row.scrollLeft > epsilon);
    setCanScrollRight(row.scrollLeft < maxScrollLeft - epsilon);
  };

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    updateScrollState();
    row.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      row.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [products.length]);

  const scrollRow = (direction: 'left' | 'right') => {
    const row = rowRef.current;
    if (!row) return;
    const firstCard = row.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard?.clientWidth ?? 256;
    const style = window.getComputedStyle(row);
    const gap = Number.parseFloat(style.columnGap || style.gap || '0') || 0;
    const amount = cardWidth + gap;

    row.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1 mb-5">{subtitle}</p>
      <div className="relative">
        {canScrollLeft && (
          <button
            type="button"
            aria-label={`Scroll ${title} left`}
            onClick={() => scrollRow('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-[#d9d9de] text-[#6b6b73] hover:bg-[#cfd0d6] transition-colors flex items-center justify-center"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              aria-hidden
            >
              <path
                d="M12.5 4.5L7 10l5.5 5.5"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        <div
          ref={rowRef}
          className="no-scrollbar flex gap-5 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth"
        >
          {products.map((product) => (
            <div key={product.id} className="w-64 shrink-0 snap-start">
              <ProductCard product={product} onBuyNow={onBuyNow} />
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button
            type="button"
            aria-label={`Scroll ${title} right`}
            onClick={() => scrollRow('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-14 w-14 rounded-full bg-[#d9d9de] text-[#6b6b73] hover:bg-[#cfd0d6] transition-colors flex items-center justify-center"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              aria-hidden
            >
              <path
                d="M7.5 4.5L13 10l-5.5 5.5"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

