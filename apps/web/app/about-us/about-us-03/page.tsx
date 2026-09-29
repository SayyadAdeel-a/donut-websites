import React from 'react';
import { GlobalHeader, GlobalFooter, DripDivider, StaffGrid } from '@donutland/ui';

export default function About03Page() {
  const scientists = [
    { name: 'Dr. Elena Sourdough', role: 'Chief Food Biochemist', bio: 'PhD in Nutritional Food Sciences. Specializes in low-glycemic natural keto alternatives.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586deb77efa8f55632d684e_pink-splash-donut-pink.webp' },
    { name: 'Liam Vance', role: 'Nutritional Formulation', bio: 'Ensures strict ketogenic macro compliance and third-party laboratory verification.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/about-us/about-us-03" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#1ac500]/10 text-[#1ac500] border-2 border-[#1ac500] font-sans font-bold text-xs uppercase tracking-widest mb-4">
          Clean Food Science Lab
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#2a3440] mb-6">
          Donuts Engineered For Health
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-600 leading-relaxed font-medium">
          Zero sugar. California almond flour. Soluble prebiotic fibers. Backed by science, verified by nutritionists.
        </p>
      </section>
      <StaffGrid members={scientists} title="Nutrition Science Team" />
      <GlobalFooter config={{ bgColor: '#2a3440', dripColor: '#1ac500' }} />
    </div>
  );
}
