import React from 'react';
import { GlobalHeader, GlobalFooter, DripDivider, StaffGrid, ProcessSteps } from '@donutland/ui';

export default function About02Page() {
  const masters = [
    { name: 'Chef Julien Blanc', role: 'Executive Pastry Master', bio: 'Trained at Ferrandi Paris; spent 10 years mastering wild yeast microbiology.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
    { name: 'Claire Fontaine', role: 'Chocolatier', bio: 'Directs bean-to-bar sourcing in South America and single-origin ganache tempering.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#f5f6f4] text-black">
      <GlobalHeader activePath="/about-us/about-us-02" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#6e2f10] text-[#f5f6f4] font-sans font-bold text-xs uppercase tracking-widest mb-4">
          Artisanal Heritage
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#6e2f10] mb-6">
          About The Patisserie
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-700 leading-relaxed font-medium">
          Where slow sourdough fermentation meets single-origin Belgian chocolate. Crafting confectionery poetry one batch at a time.
        </p>
      </section>
      <ProcessSteps title="The 48-Hour Fermentation Philosophy" />
      <StaffGrid members={masters} title="Master Bakers" />
      <GlobalFooter config={{ bgColor: '#6e2f10', dripColor: '#6e2f10' }} />
    </div>
  );
}
