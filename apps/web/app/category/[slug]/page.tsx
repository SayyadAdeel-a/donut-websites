import React from 'react';
import { notFound } from 'next/navigation';
import { GlobalHeader, GlobalFooter, ProductGrid, DripDivider } from '@donutland/ui';
import { productCategories } from '../../../content/categories';
import { products } from '../../../content/products';

export function generateStaticParams() {
  return productCategories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = productCategories.find((c) => c.slug === slug) || productCategories[0];

  const filtered = products.map((p) => ({
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

  return (
    <div className="flex-1 flex flex-col bg-white">
      <GlobalHeader activePath={`/category/${slug}`} />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto bg-[#3b89ff] text-white">
        <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
          Category Archive
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
          {category.name}
        </h1>
        <p className="font-sans text-base md:text-xl text-white/95 font-medium">
          {category.description}
        </p>
      </section>
      <DripDivider color="#ffffff" />

      <ProductGrid
        title={`${category.name} Catalog`}
        subtitle="Freshly crafted daily in limited small batches."
        products={filtered}
        columns={4}
      />
      <GlobalFooter />
    </div>
  );
}
