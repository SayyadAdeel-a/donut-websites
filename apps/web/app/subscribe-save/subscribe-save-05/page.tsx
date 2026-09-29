import React from 'react';
import { GlobalHeader, GlobalFooter, Button } from '@donutland/ui';
import { Coffee, Cookie, Clock } from '@phosphor-icons/react/dist/ssr';

export default function Subscribe05Page() {
  return (
    <div className="flex-1 flex flex-col bg-[#fff5ea] text-black">
      <GlobalHeader activePath="/subscribe-save/subscribe-save-05" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#3b89ff] text-white font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black">
          Morning Commuter Special
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-4">
          Coffee & Cruller Pass
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-700 font-medium mb-12">
          Your morning routine made effortless. Hot freshly roasted filter coffee and warm buttermilk donut waiting for pickup every weekday morning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
          <div className="p-8 rounded-[24px] bg-white border-4 border-black shadow-[6px_6px_0_0_#3b89ff]">
            <div className="flex items-center gap-2 mb-3">
              <Coffee size={24} weight="bold" className="text-[#3b89ff]" />
              <h3 className="font-display text-xl uppercase font-bold">5-Day Weekday Pass</h3>
            </div>
            <p className="font-sans text-xs text-gray-600 mb-6">Monday through Friday locker pickup at 7:00 AM.</p>
            <div className="font-display text-3xl font-extrabold mb-6">$19.50 / week</div>
            <Button size="md" className="w-full bg-[#3b89ff] text-white">Select Weekday Pass</Button>
          </div>

          <div className="p-8 rounded-[24px] bg-white border-4 border-black shadow-[6px_6px_0_0_#eeae23]">
            <div className="flex items-center gap-2 mb-3">
              <Cookie size={24} weight="bold" className="text-[#eeae23]" />
              <h3 className="font-display text-xl uppercase font-bold">Weekend Baker Dozen</h3>
            </div>
            <p className="font-sans text-xs text-gray-600 mb-6">Saturday morning fresh dozen box ready for family breakfast.</p>
            <div className="font-display text-3xl font-extrabold mb-6">$28.00 / weekend</div>
            <Button size="md" className="w-full bg-[#eeae23] text-black">Select Weekend Box</Button>
          </div>
        </div>
      </section>
      <GlobalFooter config={{ bgColor: '#3b89ff', dripColor: '#3b89ff' }} />
    </div>
  );
}
