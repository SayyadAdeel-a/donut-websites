import React from 'react';
import { GlobalHeader, GlobalFooter, Hero01, ProductGrid, ProcessSteps, FAQAccordion, TestimonialMarquee } from '@donutland/ui';
import { products } from '../../../content/products';

export default function Home01Page() {
  const productCards = products.slice(0, 8).map((p) => ({
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
    { question: 'What makes Donutland sourdough unique?', answer: 'We rest our dough for 48 hours to naturally break down gluten and unlock deep complex flavor notes.' },
    { question: 'How do you handle shipping?', answer: 'Orders are shipped fresh every morning in insulated containers with temperature control.' },
  ];

  const testimonials = [
    { id: '1', name: 'Emily Watson', role: 'Food Critic', comment: 'The tri-donut hero lives up to the hype. Sourdough perfection!', rating: 5 },
    { id: '2', name: 'David Kim', role: 'Coffee Roaster', comment: 'Pairs beautifully with specialty espresso. Real fruit glazes without the chemical aftertaste.', rating: 5 },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white">
      <GlobalHeader activePath="/homepages/home-01" />
      <Hero01 />
      <ProductGrid
        title="Our Hand-Crafted Favorites"
        subtitle="Small batches fried golden and hand-glazed every morning."
        products={productCards}
        categories={['Crunch Series', 'Chocolate Series', 'Fruit Glaze', 'Filled Series']}
      />
      <TestimonialMarquee testimonials={testimonials} bgColor="#eeae23" />
      <ProcessSteps />
      <FAQAccordion items={faqs} />
      <GlobalFooter />
    </div>
  );
}
