'use client';

import React, { useState } from 'react';
import { GlobalHeader, GlobalFooter, Button, Input } from '@donutland/ui';
import { Check, Calendar } from '@phosphor-icons/react';

export default function Contact02Page() {
  const [booked, setBooked] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-[#f5f6f4] text-black">
      <GlobalHeader activePath="/contact-us/contact-us-02" />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#6e2f10] text-[#f5f6f4] font-sans font-bold text-xs uppercase tracking-widest mb-4">
          Patisserie Catering
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#6e2f10] mb-4">
          Private Tastings & Catering
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-700 leading-relaxed font-medium">
          Schedule an exclusive tasting session for weddings, corporate galas, and bespoke patisserie towers.
        </p>
      </section>

      <section className="py-12 px-6 md:px-12 max-w-[800px] mx-auto flex-1 w-full">
        <div className="rounded-[28px] border-4 border-[#6e2f10] p-8 md:p-12 bg-white shadow-[8px_8px_0_0_#6e2f10]">
          {booked ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#6e2f10]/10 text-[#6e2f10] flex items-center justify-center mx-auto border-2 border-[#6e2f10]">
                <Check size={32} weight="bold" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#6e2f10]">
                Tasting Requested
              </h3>
              <p className="font-sans text-sm text-gray-600">
                Our head pastry sommelier will review your event date and contact you with custom pairing menus.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setBooked(true); }} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Organizer Name</label>
                  <Input required placeholder="Claire Blanc" />
                </div>
                <div>
                  <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Email</label>
                  <Input required type="email" placeholder="claire@events.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Guest Count</label>
                  <Input required type="number" placeholder="50 - 500" />
                </div>
                <div>
                  <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Event Date</label>
                  <Input required type="date" />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#6e2f10] text-white">
                Book Tasting Appointment
              </Button>
            </form>
          )}
        </div>
      </section>
      <GlobalFooter config={{ bgColor: '#6e2f10', dripColor: '#6e2f10' }} />
    </div>
  );
}
