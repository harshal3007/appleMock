import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCarousel from '../components/ProductCarousel';
import ProductCategoryRow from '../components/ProductCategoryRow';
import PurchaseModal from '../components/PurchaseModal';
import { sponsors } from '../data/products';
import { appleProducts, appleProductsWithCategory } from '../data/appleProducts';
import Footer from '../components/Footer';
import type { Product } from '../types';

const categorySections: Array<{ key: string; title: string; subtitle: string }> = [
  {
    key: 'iphone',
    title: 'iPhone',
    subtitle: 'The latest iPhone lineup with powerful performance.',
  },
  {
    key: 'mackbooks',
    title: 'MacBook',
    subtitle: 'Powerful notebooks for creators, developers, and students.',
  },
  {
    key: 'iwatchs',
    title: 'Apple Watch',
    subtitle: 'Health, fitness, and connectivity right on your wrist.',
  },
  {
    key: 'earpods and headphones',
    title: 'Audio',
    subtitle: 'Immersive sound with AirPods and premium headphones.',
  },
];

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const iphoneCarouselProducts = appleProducts
    .filter((product) => product.name.toLowerCase().includes('iphone'))
    .slice(-6);

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Navbar />
      <main className="pt-11 bg-[#f5f5f7]">
        <ProductCarousel products={iphoneCarouselProducts} onBuyNow={handleBuyNow} />
        <section id="products" className="max-w-screen-2xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-10 text-center">
            Explore Products
          </h2>
          <div className="space-y-12">
            {categorySections.map((section) => {
              const sectionProducts = appleProductsWithCategory.filter(
                (product) => product.category === section.key
              );
              if (!sectionProducts.length) return null;
              return (
                <ProductCategoryRow
                  key={section.key}
                  title={section.title}
                  subtitle={section.subtitle}
                  products={sectionProducts}
                  onBuyNow={handleBuyNow}
                />
              );
            })}
          </div>
        </section>
        <section id="sponsors" className="bg-[#f5f5f7] border-t border-gray-200">
          <div className="max-w-screen-2xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Sponsors
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsors.map((s) => (
                <div
                  key={s.id}
                  className="w-40 h-24 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center"
                >
                  <span className="text-sm font-medium text-gray-700">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PurchaseModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        product={selectedProduct}
      />
    </div>
  );
}
