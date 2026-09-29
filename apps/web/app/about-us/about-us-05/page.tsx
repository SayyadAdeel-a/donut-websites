import React from 'react';
import { GlobalHeader, GlobalFooter, StaffGrid, DripDivider } from '@donutland/ui';

export default function About05Page() {
  const partyTeam = [
    { name: 'Chloe Sprinkles', role: 'Celebration Director', bio: 'Designs birthday event setups, colorful balloon cascades, and custom glaze colors.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586deb77efa8f55632d684e_pink-splash-donut-pink.webp' },
    { name: 'Sammy Sweet', role: 'Chief Flavor Officer', bio: 'Master of rainbow confetti sprinkles, marshmallow clouds, and bubblegum glaze.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf8e807ceb0ff1741c_donutland.webflow.io_homepages_home-04.webp' },
    { name: 'Maya Berry', role: 'Party Concierge', bio: 'Coordinates children’s bakery parties, glaze workshops, and wholesale celebration orders.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
    { name: 'Leo Joy', role: 'Master Decorator', bio: 'Hand-spins every sugar drizzle and chocolate crown with festive passion.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/about-us/about-us-05" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto bg-[#f54f95] text-white">
        <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
          Party & Celebrations
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-6">
          This Is Donutland!
        </h1>
        <p className="font-sans text-base md:text-xl text-white/95 leading-relaxed font-medium">
          Spreading pure confectionery happiness, bright smiles, and rainbow sprinkles to kids and families worldwide.
        </p>
      </section>
      <DripDivider color="#ffffff" />
      <StaffGrid members={partyTeam} title="The Sprinkle Crew" subtitle="Meet the cheerful makers behind every festive box." />
      <GlobalFooter />
    </div>
  );
}
