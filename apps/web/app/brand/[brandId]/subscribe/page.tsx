import React from 'react';
import { notFound } from 'next/navigation';
import { GlobalHeader, GlobalFooter, DripDivider, Button, ProcessSteps } from '@donutland/ui';
import { getBrand, getAllBrands } from '../../../../config/brands/activeBrand';
import { Check, Sparkle, Tag } from '@phosphor-icons/react/dist/ssr';

export function generateStaticParams() {
  const brands = getAllBrands();
  return brands.flatMap((b) => [{ brandId: b.id }, { brandId: b.slug }]);
}

export default async function BrandSubscribePage({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const { brandId } = await params;
  const brand = getBrand(brandId);
  if (!brand) notFound();

  const plans = [
    {
      name: 'The Weekly Treat',
      freq: 'Every 7 Days',
      price: '$18.00',
      regularPrice: '$22.00',
      badge: 'Most Popular',
      box: '4 Artisan Donuts',
      features: ['Choose 4 custom flavors weekly', 'Free early-morning delivery', 'Pause or cancel anytime', 'Seasonal chef specials'],
    },
    {
      name: 'Family Celebration Box',
      freq: 'Every 14 Days',
      price: '$38.00',
      regularPrice: '$46.00',
      box: '12 Party Batch Donuts',
      features: ['Full party dozen assortment', 'VIP priority delivery slot', 'Double birthday sprinkle box', '15% storewide discount'],
    },
    {
      name: 'The Executive Office Dozen',
      freq: 'Every Month',
      price: '$72.00',
      regularPrice: '$88.00',
      box: '24 Gourmet Donuts',
      features: ['Two dozen chef selected varieties', 'Individual presentation sleeves', 'Includes fresh filter coffee beans', 'Dedicated account manager'],
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <GlobalHeader
        config={{
          brandName: brand.name,
          brandHref: `/brand/${brand.id}`,
        }}
        activePath={`/brand/${brand.id}/subscribe`}
      />

      <section
        className="relative w-full pt-32 md:pt-40 pb-16 text-center"
        style={{ backgroundColor: brand.theme.primaryColor, color: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider mb-4 border border-black">
            Variation {brand.layoutMapping.subscribeVariation} Recurring Club
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
            Subscribe & Save {(brand.commerce.subscriptionDiscount * 100).toFixed(0)}%
          </h1>
          <p className="font-sans text-base md:text-xl text-white/90 leading-relaxed font-medium">
            Never miss freshly baked morning joy. Hand-dipped donuts delivered to your door on your schedule.
          </p>
        </div>
        <DripDivider color="#ffffff" />
      </section>

      {/* Subscription Plans */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-[28px] border-4 border-black p-8 flex flex-col justify-between shadow-[8px_8px_0_0_#000000] relative bg-white ${
                plan.badge ? 'ring-4 ring-[#eeae23]' : ''
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#eeae23] text-black font-sans font-extrabold text-xs uppercase tracking-wider border-2 border-black">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
                    {plan.name}
                  </h3>
                  <Tag size={20} weight="bold" className="text-[#f54f95]" />
                </div>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-500 block mb-6">
                  {plan.freq} • {plan.box}
                </span>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl font-extrabold text-black">
                    {plan.price}
                  </span>
                  <span className="font-sans text-sm text-gray-400 line-through">
                    {plan.regularPrice}
                  </span>
                  <span className="font-sans text-xs font-bold text-[#1ac500] uppercase">
                    / delivery
                  </span>
                </div>

                <ul className="space-y-3 pt-4 border-t border-black/10 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-sans text-xs text-gray-700">
                      <Check size={16} weight="bold" className="text-[#1ac500] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                size="lg"
                rounded="full"
                className="w-full text-white"
                style={{ backgroundColor: brand.theme.primaryColor }}
              >
                Join {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Step Walkthrough */}
      <ProcessSteps
        title="How Subscription Works"
        subtitle="Custom frequency, instant rescheduling, and zero lock-in."
      />

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
