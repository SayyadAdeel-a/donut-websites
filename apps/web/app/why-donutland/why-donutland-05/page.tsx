'use client';

import React, { useState } from 'react';
import { GlobalHeader, GlobalFooter, DripDivider, Button } from '@donutland/ui';
import { Confetti, Sparkle, Heart } from '@phosphor-icons/react';

export default function Why05Page() {
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/why-donutland/why-donutland-05" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto bg-[#f54f95] text-white">
        <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
          Celebration Statistics
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-6">
          Why Choose Donutland 05?
        </h1>
        <p className="font-sans text-base md:text-xl text-white/95 font-medium mb-12">
          Over 1,000,000 sprinkles spread, 50,000 party boxes delivered, and 100% happiness guaranteed!
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-black max-w-3xl mx-auto mb-12">
          <div className="p-6 rounded-[20px] bg-white border-2 border-black shadow-[4px_4px_0_0_#000000]">
            <span className="font-display text-4xl font-extrabold text-[#f54f95] block mb-1">1M+</span>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-700">Rainbow Sprinkles</span>
          </div>
          <div className="p-6 rounded-[20px] bg-white border-2 border-black shadow-[4px_4px_0_0_#000000]">
            <span className="font-display text-4xl font-extrabold text-[#eeae23] block mb-1">50K+</span>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-700">Birthday Boxes</span>
          </div>
          <div className="p-6 rounded-[20px] bg-white border-2 border-black shadow-[4px_4px_0_0_#000000]">
            <span className="font-display text-4xl font-extrabold text-[#3b89ff] block mb-1">99.8%</span>
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-700">Smiles Recorded</span>
          </div>
        </div>
      </section>
      <DripDivider color="#ffffff" />

      {/* Flavor Quiz Interactive Widget */}
      <section className="py-20 px-6 md:px-12 max-w-[800px] mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-4">
          Find Your Perfect Donut Match
        </h2>
        <p className="font-sans text-sm md:text-base text-gray-600 mb-8">
          Click your favorite flavor profile to discover your celebration recommendation:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Berry Fruity', donut: 'Frostberry Delight' },
            { label: 'Nutty Crunch', donut: 'Peanut Mcrunch' },
            { label: 'Dark Cacao', donut: 'Chocoglaze Deluxe' },
            { label: 'Party Rainbow', donut: 'Sprinkle Party Blast' },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setSelectedFlavor(item.donut)}
              className={`p-4 rounded-[16px] border-2 border-black font-display text-sm uppercase tracking-wide cursor-pointer transition-all ${
                selectedFlavor === item.donut
                  ? 'bg-[#f54f95] text-white shadow-[4px_4px_0_0_#000000]'
                  : 'bg-[#fafafa] hover:bg-white text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {selectedFlavor && (
          <div className="p-6 rounded-[20px] bg-[#eeae23]/20 border-2 border-[#eeae23] max-w-md mx-auto">
            <span className="font-sans text-xs font-bold text-gray-600 uppercase block mb-1">Your Match:</span>
            <h3 className="font-display text-2xl font-bold uppercase text-black mb-4">{selectedFlavor}</h3>
            <Button variant="pink" size="sm" rounded="full">Order Your Match</Button>
          </div>
        )}
      </section>
      <GlobalFooter />
    </div>
  );
}
