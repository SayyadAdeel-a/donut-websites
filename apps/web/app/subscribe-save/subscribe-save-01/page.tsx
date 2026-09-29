import React from 'react';
import { GlobalHeader, GlobalFooter, Button } from '@donutland/ui';
import { Flame, Timer, Sparkle } from '@phosphor-icons/react/dist/ssr';

export default function Subscribe01Page() {
  return (
    <div className="flex-1 flex flex-col bg-[#1b1b1b] text-white">
      <GlobalHeader activePath="/subscribe-save/subscribe-save-01" config={{ bgColor: '#1b1b1b', textColor: '#ffffff' }} />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f21d33] text-white font-sans font-bold text-xs uppercase tracking-wider mb-6">
          <Flame size={18} weight="fill" />
          <span>Exclusive Street Tier</span>
        </div>
        <h1 className="font-display text-6xl sm:text-8xl font-bold uppercase tracking-tight text-[#f21d33] mb-6">
          Midnight Drop Club
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-300 font-semibold mb-8">
          Numbered collectible boxes, exclusive apparel drops, and secret midnight flavor releases.
        </p>
        <div className="p-8 rounded-[24px] bg-[#222] border-2 border-[#f21d33] shadow-[8px_8px_0_0_#f21d33] max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-2xl uppercase">Next Drop: Friday 11:59 PM</span>
            <Timer size={24} weight="bold" className="text-[#eeae23]" />
          </div>
          <p className="font-sans text-xs text-gray-400 mb-6">Members receive first access codes 15 minutes before the public release.</p>
          <Button variant="red" size="lg" className="w-full font-black">
            Join The Drop List ($25/mo)
          </Button>
        </div>
      </section>
      <GlobalFooter config={{ bgColor: '#000000', dripColor: '#f21d33' }} />
    </div>
  );
}
