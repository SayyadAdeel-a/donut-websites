import React from 'react';
import { GlobalHeader, GlobalFooter, StaffGrid } from '@donutland/ui';

export default function About04Page() {
  const heritageTeam = [
    { name: 'Grandpa Joe Miller', role: 'Founder (1958)', bio: 'Opened the original roadside wooden counter on Route 1 in summer 1958.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
    { name: 'Bobby Miller', role: '3rd Generation Baker', bio: 'Preserving the original cast iron kettle frying and buttermilk cruller recipes.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#fff5ea] text-black">
      <GlobalHeader activePath="/about-us/about-us-04" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#3b89ff] text-white font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black">
          Heritage Americana Diner
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-6">
          About The Counter
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-700 leading-relaxed font-medium">
          Three generations of early morning dough kneading, steaming porcelain coffee mugs, and warm smiles across the counter.
        </p>
      </section>
      <StaffGrid members={heritageTeam} title="Generations of Bakers" />
      <GlobalFooter config={{ bgColor: '#3b89ff', dripColor: '#3b89ff' }} />
    </div>
  );
}
