'use client';

import React from 'react';
import { GlobalHeader, GlobalFooter, FAQAccordion, Button, Input } from '@donutland/ui';

export default function Contact04Page() {
  const nutritionFaqs = [
    { question: 'Are any tree nuts processed in the keto facility?', answer: 'We use California almond flour extensively. While peanut glazes are prepared on isolated lines, individuals with severe tree nut allergies should exercise caution.' },
    { question: 'What is the glycemic index of your monk fruit glaze?', answer: 'Our organic monk fruit extract combined with erythritol has a verified glycemic index of 0.' },
    { question: 'Are all batches tested for gluten contamination?', answer: 'Yes! Every production batch undergoes independent ELISA laboratory testing to verify less than 5 ppm gluten.' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/contact-us/contact-us-04" />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#1ac500]/10 text-[#1ac500] font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-[#1ac500]">
          Clean Nutrition & Allergen Desk
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#2a3440] mb-4">
          Allergen & Science Support
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-600 font-medium">
          Have specific dietary questions, diabetic inquiries, or allergen verification requests?
        </p>
      </section>

      <section className="py-12 px-6 md:px-12 max-w-[800px] mx-auto w-full">
        <div className="rounded-[28px] border-4 border-[#2a3440] p-8 md:p-12 bg-white shadow-[8px_8px_0_0_#1ac500]">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">Direct Dietitian Line</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert('Dietitian inquiry sent!'); }} className="space-y-4">
            <Input required placeholder="Your Name" />
            <Input required type="email" placeholder="Your Email" />
            <textarea rows={3} required placeholder="State your allergen or macro nutrition inquiry..." className="w-full px-5 py-3.5 rounded-[12px] border-2 border-black/10 focus:border-[#1ac500] focus:outline-none" />
            <Button type="submit" size="lg" className="w-full bg-[#1ac500] text-white">Ask Nutrition Team</Button>
          </form>
        </div>
      </section>

      <FAQAccordion items={nutritionFaqs} title="Allergen & Safety Reference" />
      <GlobalFooter config={{ bgColor: '#2a3440', dripColor: '#1ac500' }} />
    </div>
  );
}
