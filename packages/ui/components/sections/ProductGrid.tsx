'use client';

import React, { useState } from 'react';
import { ProductCard, ProductCardProps } from '../composite/ProductCard';

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: ProductCardProps[];
  categories?: string[];
  columns?: 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  title = 'Our Fresh Baked Menu',
  subtitle = 'Baked daily in small artisanal batches with natural ingredients.',
  products,
  categories,
  columns = 4,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category?.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Category Filter Pills */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-[#f54f95] text-white shadow-[3px_3px_0_0_#000000]'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              All Donuts
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#f54f95] text-white shadow-[3px_3px_0_0_#000000]'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
        } gap-8`}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
