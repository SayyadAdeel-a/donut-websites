import React from 'react';
import { GlobalHeader, GlobalFooter, Button, ProcessSteps } from '@donutland/ui';
import { Sparkle, Check } from '@phosphor-icons/react/dist/ssr';

export default function Subscribe02Page() {
  return (
    <div className="flex-1 flex flex-col bg-[#f5f6f4] text-black">
      <GlobalHeader activePath="/subscribe-save/subscribe-save-02" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#6e2f10] text-[#f5f6f4] font-sans font-bold text-xs uppercase tracking-widest mb-4">
          Chef Tasting Club
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#6e2f10] mb-6">
          Executive Patisserie Box
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-700 leading-relaxed font-medium mb-12">
          Monthly curated tasting boxes featuring reserve sourdough brioche, seasonal fruit ganaches, and sommelier pairing notes.
        </p>

        <div className="p-8 rounded-[28px] border-4 border-[#6e2f10] bg-white shadow-[8px_8px_0_0_#6e2f10] max-w-xl mx-auto text-left">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-2xl uppercase font-bold text-[#6e2f10]">Patisserie Master Selection</h3>
            <span className="font-display text-3xl font-extrabold text-[#6e2f10]">$45/mo</span>
          </div>
          <ul className="space-y-2 mb-8 text-xs font-sans text-gray-700">
            <li className="flex items-center gap-2"><Check size={16} className="text-[#1ac500]" /><span>6 limited-edition chef creation donuts</span></li>
            <li className="flex items-center gap-2"><Check size={16} className="text-[#1ac500]" /><span>Sommelier beverage & wine pairing guidebook</span></li>
            <li className="flex items-center gap-2"><Check size={16} className="text-[#1ac500]" /><span>Custom wooden presentation gift sleeve</span></li>
          </ul>
          <Button size="lg" className="w-full bg-[#6e2f10] text-white">Subscribe To Chef Box</Button>
        </div>
      </section>
      <ProcessSteps title="Curated Tasting Process" />
      <GlobalFooter config={{ bgColor: '#6e2f10', dripColor: '#6e2f10' }} />
    </div>
  );
}
