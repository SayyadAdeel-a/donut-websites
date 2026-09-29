'use client';

import React, { useState } from 'react';
import { GlobalHeader, GlobalFooter, DripDivider, Button, Input } from '@donutland/ui';
import { Confetti, Check } from '@phosphor-icons/react';

export default function Contact05Page() {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/contact-us/contact-us-05" />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto bg-[#f54f95] text-white">
        <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
          Party & Events Desk
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
          Party Catering & Wholesale
        </h1>
        <p className="font-sans text-base md:text-xl text-white/95 font-medium">
          Birthdays, school celebrations, sweet 16s, and custom-sprinkled party towers!
        </p>
      </section>
      <DripDivider color="#ffffff" />

      <section className="py-12 px-6 md:px-12 max-w-[800px] mx-auto flex-1 w-full">
        <div className="rounded-[28px] border-4 border-black p-8 md:p-12 bg-white shadow-[8px_8px_0_0_#000000]">
          {sent ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f54f95]/10 text-[#f54f95] flex items-center justify-center mx-auto border-2 border-[#f54f95]">
                <Check size={32} weight="bold" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black">Party Booked!</h3>
              <p className="font-sans text-sm text-gray-600">Our party coordinator will call you to finalize sprinkle colors and donut tower dimensions.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input required placeholder="Party Host Name" />
                <Input required type="email" placeholder="Host Email" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input required placeholder="Celebration Type (e.g. 7th Birthday)" />
                <Input required placeholder="Estimated Donut Boxes (e.g. 5 Dozen)" />
              </div>
              <textarea rows={3} required placeholder="Tell us about special color themes, custom sprinkles, or delivery timing..." className="w-full px-5 py-3.5 rounded-[12px] border-2 border-black/10 focus:border-[#f54f95] focus:outline-none" />
              <Button type="submit" size="lg" className="w-full bg-[#f54f95] text-white">
                Book Party Celebration
              </Button>
            </form>
          )}
        </div>
      </section>
      <GlobalFooter />
    </div>
  );
}
