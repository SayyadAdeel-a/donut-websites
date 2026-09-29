import React from 'react';
import { notFound } from 'next/navigation';
import { GlobalHeader, GlobalFooter, DripDivider, Button, ProcessSteps } from '@donutland/ui';
import { getBrand, getAllBrands } from '../../../../config/brands/activeBrand';
import { ShieldCheck, Heart, Sparkle } from '@phosphor-icons/react/dist/ssr';

export function generateStaticParams() {
  const brands = getAllBrands();
  return brands.flatMap((b) => [{ brandId: b.id }, { brandId: b.slug }]);
}

export default async function BrandWhyPage({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const { brandId } = await params;
  const brand = getBrand(brandId);
  if (!brand) notFound();

  const comparisonRows = [
    { feature: 'Fermentation Time', us: '48-Hour Slow Cold Proof', them: '30-45 Minute Flash Rise' },
    { feature: 'Flour Quality', us: 'California Almond & Organic Wheat', them: 'Bleached Industrial White Flour' },
    { feature: 'Glaze Sweeteners', us: 'Monk Fruit & Organic Cane Sugar', them: 'High Fructose Corn Syrup' },
    { feature: 'Chocolate Source', us: 'Single-Origin 72% Ecuadorian Cacao', them: 'Artificial Compound Coating' },
    { feature: 'Digestibility', us: 'Prebiotic & Easy On The Stomach', them: 'Heavy, Oily Insulin Spike' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <GlobalHeader
        config={{
          brandName: brand.name,
          brandHref: `/brand/${brand.id}`,
        }}
        activePath={`/brand/${brand.id}/why`}
      />

      <section
        className="relative w-full pt-32 md:pt-40 pb-16 text-center"
        style={{ backgroundColor: brand.theme.primaryColor, color: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider mb-4 border border-black">
            Variation {brand.layoutMapping.whyVariation} Value Matrix
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
            Why Choose {brand.name}?
          </h1>
          <p className="font-sans text-base md:text-xl text-white/90 leading-relaxed font-medium">
            The difference is in the dough. Compare our artisan craftsmanship against industrial shortcuts.
          </p>
        </div>
        <DripDivider color="#ffffff" />
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-20 px-6 md:px-12 max-w-[1100px] mx-auto flex-1">
        <div className="rounded-[28px] border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0_0_#000000]">
          <div className="grid grid-cols-12 bg-black text-white p-6 font-display text-sm md:text-lg uppercase tracking-wider">
            <div className="col-span-5 md:col-span-6">Standard Standard</div>
            <div className="col-span-4 md:col-span-3 text-[#eeae23]">{brand.name}</div>
            <div className="col-span-3 md:col-span-3 text-gray-400">Commercial Bakery</div>
          </div>

          <div className="divide-y-2 divide-black/10">
            {comparisonRows.map((row, i) => (
              <div key={i} className="grid grid-cols-12 p-6 font-sans text-xs md:text-sm items-center hover:bg-gray-50 transition-colors">
                <div className="col-span-5 md:col-span-6 font-bold text-black flex items-center gap-2">
                  <Sparkle size={16} weight="fill" className="text-[#f54f95] shrink-0" />
                  <span>{row.feature}</span>
                </div>
                <div className="col-span-4 md:col-span-3 font-extrabold text-[#1ac500]">
                  {row.us}
                </div>
                <div className="col-span-3 md:col-span-3 text-gray-500">
                  {row.them}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      <GlobalFooter
        config={{
          brandName: brand.name,
          bgColor: brand.theme.footerBg,
          dripColor: brand.theme.footerDrip,
        }}
      />
    </div>
  );
}
