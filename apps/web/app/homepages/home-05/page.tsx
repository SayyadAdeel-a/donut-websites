import React from 'react';
import { GlobalHeader, GlobalFooter, Hero05, ProductGrid, FAQAccordion } from '@donutland/ui';
import { products } from '../../../content/products';

export default function Home05Page() {
  const productCards = products.slice(0, 4).map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    category: p.category,
    badge: 'Keto Clean',
    bgColor: p.bgColor,
  }));

  const faqs = [
    { question: 'How do you achieve 2g net carbs?', answer: 'We subtract soluble prebiotic fibers and sugar alcohols from total carbohydrates.' },
    { question: 'Are these donuts suitable for diabetics?', answer: 'Yes! Sweetened solely with organic monk fruit and erythritol, causing zero glycemic spike.' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white">
      <GlobalHeader activePath="/homepages/home-05" />
      <Hero05 />
      <ProductGrid
        title="Clean Nutrition Donut Series"
        subtitle="Grain-free, gluten-free, and guilt-free bakery treats."
        products={productCards}
      />
      <FAQAccordion items={faqs} title="Nutrition Science FAQ" />
      <GlobalFooter config={{ bgColor: '#2a3440', dripColor: '#1ac500' }} />
    </div>
  );
}
