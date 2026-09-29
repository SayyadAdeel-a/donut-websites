import React from 'react';
import { GlobalHeader, GlobalFooter, DripDivider, Button, ProcessSteps } from '@donutland/ui';
import { Gift, Check } from '@phosphor-icons/react/dist/ssr';

export default function Subscribe03Page() {
  const steps = [
    { number: '01', title: 'Pick Your Box Size', description: 'Select 4, 8, or 12 donuts for your family or friends celebration.', icon: 'cookie' as const },
    { number: '02', title: 'Unbox The Secret Flavor', description: 'Every monthly shipment includes 2 secret unreleased mystery glaze creations.', icon: 'sparkle' as const },
    { number: '03', title: 'Celebration Confetti', description: 'Open the box to festive bakery packaging, party stickers, and joy.', icon: 'truck' as const },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/subscribe-save/subscribe-save-03" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto bg-[#f54f95] text-white">
        <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
          Celebration Club
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
          Donut of the Month Club
        </h1>
        <p className="font-sans text-base md:text-xl text-white/95 font-medium mb-8">
          The sweetest surprise for your family. A colorful box of handcrafted bakery joy delivered every month.
        </p>
        <div className="max-w-md mx-auto">
          <Button variant="yellow" size="lg" rounded="full" className="w-full flex items-center justify-center gap-2">
            <Gift size={20} weight="bold" />
            <span>Join From $22 / Month</span>
          </Button>
        </div>
      </section>
      <DripDivider color="#ffffff" />
      <ProcessSteps title="The 3-Step Celebration Flow" steps={steps} />
      <GlobalFooter />
    </div>
  );
}
