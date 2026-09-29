import React from 'react';
import { GlobalHeader, GlobalFooter, DripDivider, StaffGrid } from '@donutland/ui';

export default function About01Page() {
  const crew = [
    { name: 'Axel Kane', role: 'Skate Team & Baker', bio: 'Started frying donuts in an abandoned garage after skate sessions in 2018.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
    { name: 'Dexter Cruz', role: 'Graphic Director', bio: 'Designs the limited edition midnight drop apparel and packaging.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf8e807ceb0ff1741c_donutland.webflow.io_homepages_home-04.webp' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#1b1b1b] text-white">
      <GlobalHeader activePath="/about-us/about-us-01" config={{ bgColor: '#1b1b1b', textColor: '#ffffff' }} />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#f21d33] text-white font-sans font-bold text-xs uppercase tracking-widest mb-4">
          Underground Garage Origins
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#f21d33] mb-6">
          The Creation of Donutland
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-300 leading-relaxed font-semibold">
          Born under neon streetlights and skateboard ramps. We rebelled against bland corporate bakeries to bring loud glazes and midnight cravings to life.
        </p>
      </section>
      <StaffGrid members={crew} title="The Garage Collective" subtitle="Street skaters and nocturnal bakers." />
      <GlobalFooter config={{ bgColor: '#000000', dripColor: '#f21d33' }} />
    </div>
  );
}
