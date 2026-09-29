import React from 'react';
import { GlobalHeader, GlobalFooter, Button, NutritionBadge, FAQAccordion } from '@donutland/ui';

export default function Subscribe04Page() {
  const faqs = [
    { question: 'How do I freeze and reheat the keto donuts?', answer: 'Our almond-flour donuts freeze exceptionally well for up to 3 months. Pop in the air-fryer for 2 minutes for bakery-fresh crunch.' },
    { question: 'Can I swap flavors every week?', answer: 'Yes, your subscriber dashboard lets you change flavors, pause delivery, or adjust quantities anytime.' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/subscribe-save/subscribe-save-04" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#1ac500]/10 text-[#1ac500] font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-[#1ac500]">
          Weekly Fitness Bundle
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#2a3440] mb-4">
          Weekly Gym & Keto Box
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-600 font-medium mb-10">
          High-protein, grain-free fuel for athletes, low-carb keto dieters, and healthy treat lovers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <NutritionBadge label="Per Donut" value="15g Protein" variant="blue" />
          <NutritionBadge label="Net Carbs" value="2g" variant="green" />
          <NutritionBadge label="Added Sugar" value="0g" variant="green" />
        </div>
        <div className="max-w-md mx-auto">
          <Button variant="green" size="lg" className="w-full bg-[#1ac500] text-white">
            Start Weekly Fitness Box ($24/wk)
          </Button>
        </div>
      </section>
      <FAQAccordion items={faqs} />
      <GlobalFooter config={{ bgColor: '#2a3440', dripColor: '#1ac500' }} />
    </div>
  );
}
