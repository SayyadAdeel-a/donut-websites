'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Flame } from '@phosphor-icons/react';
import { Button } from '../atomic/Button';

export const Hero04: React.FC<{
  title?: string;
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
}> = ({
  title = 'DOUGHBOYZ',
  tagline = 'Late night glaze. Streetwear appetite. Underground garage bakery popping up at midnight.',
  ctaText = 'Get The Drop',
  ctaHref = '/subscribe-save/subscribe-save-01',
}) => {
  return (
    <section className="relative w-full bg-[#1b1b1b] text-white pt-32 md:pt-40 pb-0 overflow-hidden border-b-4 border-black">
      {/* Streetwear Marquee Ticker */}
      <div className="w-full bg-[#f21d33] py-2 overflow-hidden border-y-2 border-black rotate-[-1deg] -mx-2 mb-8">
        <div className="flex w-max animate-marquee space-x-6 font-display font-bold text-sm tracking-widest uppercase text-white">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              <span>★ MIDNIGHT DROP CLUB</span>
              <span>•</span>
              <span>LIMITED BATCH ONLY</span>
              <span>•</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f98000] text-black font-sans font-black text-xs uppercase tracking-wider border-2 border-white shadow-[3px_3px_0_0_#ffffff]">
              <Flame size={18} weight="fill" />
              <span>SKATE & BAKE CO.</span>
            </div>

            <motion.h1
              initial={{ x: -60, rotate: -4, opacity: 0 }}
              animate={{ x: 0, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold uppercase tracking-tighter text-[#f21d33] drop-shadow-[5px_5px_0_#ffffff] leading-[0.88]"
            >
              {title}
            </motion.h1>

            <p className="font-sans text-base md:text-xl text-gray-300 max-w-lg leading-relaxed font-semibold">
              {tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href={ctaHref}>
                <Button
                  variant="red"
                  size="lg"
                  className="bg-[#f21d33] text-white border-2 border-white shadow-[5px_5px_0_0_#ffffff] hover:shadow-none flex items-center gap-2 font-black"
                >
                  <span>{ctaText}</span>
                  <ArrowRight size={18} weight="bold" />
                </Button>
              </Link>

              <Link href="/all-donuts">
                <Button
                  variant="black"
                  size="lg"
                  className="bg-black text-white border-2 border-white shadow-[5px_5px_0_0_#f98000] hover:shadow-none font-bold"
                >
                  View Street Menu
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Cutout Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
              animate={{ scale: 1, rotate: -6, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[420px] drop-shadow-[0_20px_40px_rgba(242,29,51,0.4)]"
            >
              <Image
                src="https://cdn.prod.website-files.com/6569d73055568668783bf587/657d94a61eee1bef26d6f5b9_finger-donut.webp"
                alt="Streetwear Finger Donut"
                width={420}
                height={480}
                className="w-full h-auto object-contain"
                priority
                unoptimized
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
