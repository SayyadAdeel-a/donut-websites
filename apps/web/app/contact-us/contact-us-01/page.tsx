import React from 'react';
import { GlobalHeader, GlobalFooter, DripDivider, Button } from '@donutland/ui';
import { MapPin, Clock, Phone } from '@phosphor-icons/react/dist/ssr';

export default function Contact01Page() {
  const locations = [
    { city: 'Brooklyn Truck Stop', address: '482 Wythe Ave, Williamsburg, NY', hours: 'Fri - Sun: 10 PM - 3 AM', phone: '(718) 555-0192' },
    { city: 'Downtown Garage Hub', address: '120 S 4th St, Los Angeles, CA', hours: 'Thu - Sat: Midnight - 4 AM', phone: '(213) 555-8831' },
    { city: 'Austin Skate Park', address: '800 E 5th St, Austin, TX', hours: 'Daily: 9 PM - 2 AM', phone: '(512) 555-4309' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#1b1b1b] text-white">
      <GlobalHeader activePath="/contact-us/contact-us-01" config={{ bgColor: '#1b1b1b', textColor: '#ffffff' }} />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#f21d33] text-white font-sans font-bold text-xs uppercase tracking-widest mb-4">
          Street Locations & Pop-Ups
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#f21d33] mb-4">
          Find The Truck
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-300 font-semibold">
          Catch us at our late-night food truck drops or permanent garage bakery counters.
        </p>
      </section>

      <section className="py-16 px-6 md:px-12 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
        {locations.map((loc, i) => (
          <div key={i} className="p-8 rounded-[24px] bg-[#222] border-2 border-white/20 shadow-[6px_6px_0_0_#f21d33] flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">{loc.city}</h3>
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <MapPin size={18} className="text-[#f98000] shrink-0" />
                <span>{loc.address}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <Clock size={18} className="text-[#eeae23] shrink-0" />
                <span>{loc.hours}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <Phone size={18} className="text-[#f21d33] shrink-0" />
                <span>{loc.phone}</span>
              </div>
            </div>
            <div className="pt-6">
              <Button variant="red" size="sm" className="w-full">Get Directions</Button>
            </div>
          </div>
        ))}
      </section>
      <GlobalFooter config={{ bgColor: '#000000', dripColor: '#f21d33' }} />
    </div>
  );
}
