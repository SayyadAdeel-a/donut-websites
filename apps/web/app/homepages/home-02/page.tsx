import React from 'react';
import { GlobalHeader, GlobalFooter, Hero02, ProductGrid, ProcessSteps, StaffGrid } from '@donutland/ui';
import { products } from '../../../content/products';

export default function Home02Page() {
  const productCards = products.slice(0, 6).map((p) => ({
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

  const staff = [
    { name: 'Marcus Glaze', role: 'Head of Fermentation', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
    { name: 'Elena Vane', role: 'Chocolate Artisan', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f5f6f4]">
      <GlobalHeader activePath="/homepages/home-02" />
      <Hero02 />
      <ProductGrid
        title="Artisanal Patisserie Collection"
        subtitle="Slow-fermented brioche glazed with single-origin Ecuadorian cacao."
        products={productCards}
        categories={['Chocolate Series', 'Gourmet', 'Traditional']}
      />
      <ProcessSteps title="The 48-Hour Fermentation Craft" />
      <StaffGrid members={staff} title="The Sourdough Masters" />
      <GlobalFooter config={{ bgColor: '#6e2f10', dripColor: '#6e2f10' }} />
    </div>
  );
}
