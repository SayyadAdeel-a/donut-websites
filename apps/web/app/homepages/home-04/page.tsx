import React from 'react';
import { GlobalHeader, GlobalFooter, Hero04, ProductGrid, TestimonialMarquee } from '@donutland/ui';
import { products } from '../../../content/products';

export default function Home04Page() {
  const productCards = products.slice(0, 6).map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    category: p.category,
    badge: p.badge,
    bgColor: '#ffffff',
  }));

  const testimonials = [
    { id: '1', name: 'Zack Rider', role: 'Skate Collective', comment: 'DoughBoyz midnight pop-ups are legend. Crunchy glazes, loud music, real street culture.', rating: 5 },
    { id: '2', name: 'Maya Fox', role: 'Streetwear Designer', comment: 'The packaging box is a collectible item on its own. 10/10 aesthetic.', rating: 5 },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#1b1b1b] text-white">
      <GlobalHeader activePath="/homepages/home-04" config={{ bgColor: '#1b1b1b', textColor: '#ffffff' }} />
      <Hero04 />
      <ProductGrid
        title="Midnight Batch Drop"
        subtitle="Limited run donuts fried fresh for late night appetites."
        products={productCards}
        categories={['Crunch Series', 'Party Series', 'Gourmet']}
      />
      <TestimonialMarquee testimonials={testimonials} bgColor="#f21d33" textColor="#ffffff" />
      <GlobalFooter config={{ bgColor: '#000000', dripColor: '#f21d33' }} />
    </div>
  );
}
