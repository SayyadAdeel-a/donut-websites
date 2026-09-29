import React from 'react';
import { GlobalHeader, GlobalFooter, ProcessSteps } from '@donutland/ui';
import { Cow, Farm, Heart } from '@phosphor-icons/react/dist/ssr';

export default function Why04Page() {
  return (
    <div className="flex-1 flex flex-col bg-[#fff5ea] text-black">
      <GlobalHeader activePath="/why-donutland/why-donutland-04" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#3b89ff] text-white font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black">
          Heritage Sourcing
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-6">
          Why Choose Local Heritage?
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-700 leading-relaxed font-medium mb-12">
          Real buttermilk from pasture-raised Maine family dairy farms. Golden, flakey dough fried in clean kettle vats with timeless warmth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-[24px] bg-white border-2 border-black shadow-[4px_4px_0_0_#3b89ff]">
            <Farm size={32} weight="bold" className="text-[#3b89ff] mb-3" />
            <h3 className="font-display text-lg uppercase font-bold text-black mb-2">100% Family Dairy</h3>
            <p className="font-sans text-xs text-gray-600">Fresh buttermilk and pasture churned butter delivered every morning at 5 AM.</p>
          </div>
          <div className="p-6 rounded-[24px] bg-white border-2 border-black shadow-[4px_4px_0_0_#eeae23]">
            <Cow size={32} weight="bold" className="text-[#eeae23] mb-3" />
            <h3 className="font-display text-lg uppercase font-bold text-black mb-2">Grass-Fed Purity</h3>
            <p className="font-sans text-xs text-gray-600">No hormones, no antibiotics. Pure golden butter that creates delicate, melt-in-your-mouth pastry.</p>
          </div>
          <div className="p-6 rounded-[24px] bg-white border-2 border-black shadow-[4px_4px_0_0_#f21d33]">
            <Heart size={32} weight="bold" className="text-[#f21d33] mb-3" />
            <h3 className="font-display text-lg uppercase font-bold text-black mb-2">1958 diner Tradition</h3>
            <p className="font-sans text-xs text-gray-600">Every batch honors six decades of roadside hospitality and honest community baking.</p>
          </div>
        </div>
      </section>
      <GlobalFooter config={{ bgColor: '#3b89ff', dripColor: '#3b89ff' }} />
    </div>
  );
}
