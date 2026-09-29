import React from 'react';
import { GlobalHeader, GlobalFooter, Button } from '@donutland/ui';
import { Skull, Lightning, Fire } from '@phosphor-icons/react/dist/ssr';

export default function Why03Page() {
  return (
    <div className="flex-1 flex flex-col bg-[#1b1b1b] text-white">
      <GlobalHeader activePath="/why-donutland/why-donutland-03" config={{ bgColor: '#1b1b1b', textColor: '#ffffff' }} />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#f21d33] text-white font-sans font-black text-xs uppercase tracking-widest mb-4">
          Street Manifesto
        </span>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#f21d33] mb-6 drop-shadow-[4px_4px_0_#ffffff]">
          Fuck Boring Donuts
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-300 font-bold leading-relaxed mb-12">
          Corporate donuts are stale, mass-produced, and designed by boardroom suits. We bake at midnight, blast heavy music, and hand-drown each ring in unfiltered flavor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-[20px] bg-[#222] border-2 border-white/20 shadow-[4px_4px_0_0_#f21d33]">
            <Lightning size={32} weight="fill" className="text-[#eeae23] mb-3" />
            <h3 className="font-display text-xl uppercase font-bold text-white mb-2">No Artificial Bullshit</h3>
            <p className="font-sans text-xs text-gray-400">Real vanilla pods, real fruit pulp, real butter. We never cut corners to inflate margins.</p>
          </div>
          <div className="p-6 rounded-[20px] bg-[#222] border-2 border-white/20 shadow-[4px_4px_0_0_#f98000]">
            <Fire size={32} weight="fill" className="text-[#f98000] mb-3" />
            <h3 className="font-display text-xl uppercase font-bold text-white mb-2">Midnight Drops</h3>
            <p className="font-sans text-xs text-gray-400">Fried hot when the city sleeps. Find our trucks parked under highway overpasses and skate parks.</p>
          </div>
          <div className="p-6 rounded-[20px] bg-[#222] border-2 border-white/20 shadow-[4px_4px_0_0_#ffffff]">
            <Skull size={32} weight="fill" className="text-white mb-3" />
            <h3 className="font-display text-xl uppercase font-bold text-white mb-2">Street Culture First</h3>
            <p className="font-sans text-xs text-gray-400">Profits support independent skate parks, graffiti artist legal funds, and youth creator studios.</p>
          </div>
        </div>
      </section>
      <GlobalFooter config={{ bgColor: '#000000', dripColor: '#f21d33' }} />
    </div>
  );
}
