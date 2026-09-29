'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Coffee, Cookie } from '@phosphor-icons/react';
import { Button } from '../atomic/Button';
import { DripDivider } from '../composite/DripDivider';

export const Hero03: React.FC<{
  title?: string;
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
}> = ({
  title = 'The Donut Counter',
  tagline = 'Serving all-American comfort since 1958. Traditional golden buttermilk crullers, hot filter coffee, and fresh daily bakery dozens.',
  ctaText = 'Order Box & Coffee',
  ctaHref = '/all-donuts',
}) => {
  const categories = ['Crullers', 'Glazed Rings', 'Jelly Filled', 'Diner Coffee', 'Dozen Boxes'];

  return (
    <section className="relative w-full bg-[#fff5ea] text-black pt-32 md:pt-40 pb-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b89ff] text-white font-sans font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0_0_#000000]">
              <Coffee size={16} weight="bold" />
              <span>Est. 1958 • Classic American Diner</span>
            </div>

            <motion.h1
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-black leading-[0.95]"
            >
              {title}
            </motion.h1>

            <p className="font-sans text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
              {tagline}
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-[#eeae23] transition-colors cursor-pointer select-none"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href={ctaHref}>
                <Button
                  variant="blue"
                  size="lg"
                  rounded="full"
                  className="bg-[#3b89ff] border-2 border-black shadow-[4px_4px_0_0_#000000] flex items-center gap-2"
                >
                  <span>{ctaText}</span>
                  <ArrowRight size={18} weight="bold" />
                </Button>
              </Link>

              <Link href="/all-donuts">
                <Button
                  variant="yellow"
                  size="lg"
                  rounded="full"
                  className="border-2 border-black shadow-[4px_4px_0_0_#000000] flex items-center gap-2"
                >
                  <Cookie size={18} weight="bold" />
                  <span>View All 10 Flavors</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column Featured Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] aspect-square rounded-[32px] bg-white border-4 border-black p-6 shadow-[12px_12px_0_0_#3b89ff] flex items-center justify-center overflow-hidden"
            >
              <Image
                src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6570e3f6be742aea3c95bc1b_donuts-flying-in-air.webp"
                alt="Americana Diner Flying Donuts"
                width={400}
                height={400}
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                priority
                unoptimized
              />

              {/* Vintage Stamp */}
              <div className="absolute -bottom-2 -right-2 bg-[#eeae23] text-black font-display text-sm font-bold uppercase p-3 rounded-full border-2 border-black shadow-[3px_3px_0_0_#000000] rotate-12">
                100% Butter
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <DripDivider color="#ffffff" />
    </section>
  );
};
