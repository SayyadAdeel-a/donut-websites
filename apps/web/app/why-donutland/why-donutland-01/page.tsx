import React from 'react';
import { GlobalHeader, GlobalFooter, DripDivider } from '@donutland/ui';
import { Check, X } from '@phosphor-icons/react/dist/ssr';

export default function Why01Page() {
  const comparisons = [
    { metric: 'Flour Base', ours: 'Cold-Milled California Almond Flour', industrial: 'Bleached Chlorinated Wheat' },
    { metric: 'Sweetener', ours: 'Zero-Glycemic Organic Monk Fruit', industrial: 'High Fructose Corn Syrup' },
    { metric: 'Net Carbohydrates', ours: '2g per donut (Lab Verified)', industrial: '35g - 48g fast carbs' },
    { metric: 'Frying Medium', ours: 'Pure Non-GMO Coconut Oil', industrial: 'Hydrogenated Palm / Canola Oil' },
    { metric: 'Preservatives', ours: 'None (Bake-to-Order)', industrial: 'Calcium Propionate & BHT' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/why-donutland/why-donutland-01" />
      <section className="pt-36 pb-20 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#1ac500]/10 text-[#1ac500] font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-[#1ac500]">
          Comparative Nutrition Matrix
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-[#2a3440] mb-4">
          Why Donutland 01
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-600 font-medium mb-12">
          Pure ingredients, zero junk. See how our clean nutrition formulation stacks up against standard commercial factory donuts.
        </p>

        <div className="rounded-[28px] border-4 border-[#2a3440] overflow-hidden shadow-[8px_8px_0_0_#1ac500] text-left">
          <div className="grid grid-cols-12 bg-[#2a3440] text-white p-5 font-display text-sm md:text-base uppercase tracking-wider">
            <div className="col-span-4">Metric</div>
            <div className="col-span-4 text-[#1ac500]">Donutland Clean</div>
            <div className="col-span-4 text-gray-400">Commercial Factory</div>
          </div>
          <div className="divide-y-2 divide-gray-100">
            {comparisons.map((c, i) => (
              <div key={i} className="grid grid-cols-12 p-5 font-sans text-xs md:text-sm items-center hover:bg-gray-50">
                <div className="col-span-4 font-bold text-black">{c.metric}</div>
                <div className="col-span-4 font-bold text-[#1ac500] flex items-center gap-1.5">
                  <Check size={16} weight="bold" />
                  <span>{c.ours}</span>
                </div>
                <div className="col-span-4 text-gray-500 flex items-center gap-1.5">
                  <X size={16} weight="bold" className="text-[#f21d33]" />
                  <span>{c.industrial}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <GlobalFooter config={{ bgColor: '#2a3440', dripColor: '#1ac500' }} />
    </div>
  );
}
