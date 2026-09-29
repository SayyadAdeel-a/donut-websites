import React from 'react';
import { GlobalHeader, GlobalFooter, ProductGrid, DripDivider } from '@donutland/ui';
import { products } from '../../content/products';

export default function AllDonutsPage() {
  const productCards = products.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    category: p.category,
    badge: p.badge,
    bgColor: p.bgColor,
  }));

  const categories = ['Crunch Series', 'Chocolate Series', 'Fruit Glaze', 'Filled Series', 'Traditional', 'Party Series'];

  return (
    <div className="flex-1 flex flex-col bg-white">
      <GlobalHeader activePath="/all-donuts" />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto bg-[#f54f95] text-white">
        <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
          Fresh Bakery Catalog
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
          All Handcrafted Donuts
        </h1>
        <p className="font-sans text-base md:text-xl text-white/95 font-medium">
          Fried golden, rested for 48 hours, and hand-dipped in small-batch glazes every single morning.
        </p>
      </section>
      <DripDivider color="#ffffff" />

      <ProductGrid
        title="Explore All Flavors"
        subtitle="Filter by series or create a custom dozen box for nationwide delivery."
        products={productCards}
        categories={categories}
        columns={4}
      />
      <GlobalFooter />
    </div>
  );
}
