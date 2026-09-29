import React from 'react';
import { GlobalHeader, GlobalFooter, Hero03, ProductGrid, FAQAccordion } from '@donutland/ui';
import { products } from '../../../content/products';

export default function Home03Page() {
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

  const faqs = [
    { question: 'Do you offer catering for morning office meetings?', answer: 'Yes! Our Baker Dozen combo boxes can be pre-ordered for delivery as early as 7 AM.' },
    { question: 'What filter coffee blend do you serve?', answer: 'We brew a custom medium-roast Colombian blend roasted locally every week.' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#fff5ea]">
      <GlobalHeader activePath="/homepages/home-03" />
      <Hero03 />
      <ProductGrid
        title="Diner Classics & Crullers"
        subtitle="Heritage recipes perfected over six decades of American bakery tradition."
        products={productCards}
        categories={['Traditional', 'Filled Series', 'Crunch Series']}
      />
      <FAQAccordion items={faqs} />
      <GlobalFooter config={{ bgColor: '#3b89ff', dripColor: '#3b89ff' }} />
    </div>
  );
}
