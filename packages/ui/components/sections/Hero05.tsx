'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck } from '@phosphor-icons/react';
import { Button } from '../atomic/Button';
import { NutritionBadge } from '../composite/NutritionBadge';
import { DripDivider } from '../composite/DripDivider';

export const Hero05: React.FC<{
  title?: string;
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
}> = ({
  title = 'HEALTHY DONUTS',
  tagline = 'Zero guilt. 100% flavor. Baked with stone-ground California almond flour, organic monk fruit, and zero artificial preservatives.',
  ctaText = 'Build Clean Box',
  ctaHref = '/all-donuts',
}) => {
  return (
    <section className="relative w-full bg-white text-[#1b1b1b] pt-32 md:pt-40 pb-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center pb-16">
        {/* Lab Certification Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1ac500]/10 text-[#1ac500] font-sans font-bold text-xs uppercase tracking-wider border-2 border-[#1ac500] mb-6">
          <Leaf size={16} weight="fill" />
          <span>Keto Certified • Gluten-Free • Non-GMO</span>
        </div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl sm:text-7xl lg:text-9xl font-bold uppercase tracking-tight text-[#2a3440] leading-[0.9] mb-6"
        >
          {title}
        </motion.h1>

        <p className="font-sans text-base md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {tagline}
        </p>

        {/* Floating Nutrition Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <NutritionBadge label="Net Carbs" value="2g" variant="green" />
          <NutritionBadge label="Protein" value="15g" variant="blue" />
          <NutritionBadge label="Added Sugar" value="0g" variant="green" />
          <NutritionBadge label="Calories" value="180" variant="white" />
        </div>

        {/* Center Donut Graphic */}
        <div className="relative max-w-md mx-auto mb-10 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-72 md:w-88 drop-shadow-[0_20px_35px_rgba(26,197,0,0.15)]"
          >
            <Image
              src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6586deb77efa8f55632d684e_pink-splash-donut-pink.webp"
              alt="Clean Fitness Donut"
              width={380}
              height={380}
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              priority
              unoptimized
            />
          </motion.div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={ctaHref}>
            <Button
              variant="green"
              size="lg"
              rounded="full"
              className="bg-[#1ac500] border-2 border-black shadow-[4px_4px_0_0_#000000] flex items-center gap-2 text-white"
            >
              <span>{ctaText}</span>
              <ArrowRight size={18} weight="bold" />
            </Button>
          </Link>

          <Link href="/why-donutland/why-donutland-01">
            <Button
              variant="outline"
              size="lg"
              rounded="full"
              className="border-2 border-black text-black hover:bg-black/5 shadow-[4px_4px_0_0_#000000] flex items-center gap-2"
            >
              <ShieldCheck size={18} weight="bold" />
              <span>Read Science Report</span>
            </Button>
          </Link>
        </div>
      </div>

      <DripDivider color="#f5f6f4" />
    </section>
  );
};
