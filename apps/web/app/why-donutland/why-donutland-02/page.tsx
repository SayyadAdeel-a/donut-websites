import React from 'react';
import { GlobalHeader, GlobalFooter, ProcessSteps } from '@donutland/ui';

export default function Why02Page() {
  return (
    <div className="flex-1 flex flex-col bg-[#f5f6f4] text-black">
      <GlobalHeader activePath="/why-donutland/why-donutland-02" />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#6e2f10] text-[#f5f6f4] font-sans font-bold text-xs uppercase tracking-widest mb-4">
          Baking Science
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#6e2f10] mb-4">
          Why Donutland 02: 48h Ferment
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-700 leading-relaxed font-medium">
          Fast commercial donuts are pumped full of chemical baking powders. We take two whole days for natural wild yeasts to digest complex sugars into light, honeycomb brioche.
        </p>
      </section>
      <ProcessSteps title="The Biochemical Fermentation Timeline" />
      <GlobalFooter config={{ bgColor: '#6e2f10', dripColor: '#6e2f10' }} />
    </div>
  );
}
