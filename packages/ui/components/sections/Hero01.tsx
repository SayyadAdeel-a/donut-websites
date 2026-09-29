'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Star } from '@phosphor-icons/react';
import { Button } from '../atomic/Button';
import { DripDivider } from '../composite/DripDivider';

export const Hero01: React.FC<{
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  accentColor?: string;
}> = ({
  title = 'DONUTS',
  subtitle = 'Freshly handcrafted every morning using wild sourdough starter and real berry glazes. Baked with happiness in every single bite.',
  ctaText = 'Shop Now',
  ctaHref = '/all-donuts',
  secondaryCtaText = 'Explore Flavors',
  secondaryCtaHref = '/category/special',
}) => {
  return (
    <section className="relative w-full bg-[#f54f95] text-white pt-32 md:pt-40 pb-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_0_#000000]">
            <Star size={16} weight="fill" className="text-[#eeae23]" />
            <span>Over 100,000+ Happy Glaze Lovers</span>
          </div>
        </div>

        {/* 3D Perspective Flip Headline */}
        <div className="text-center perspective-[1000px] mb-8">
          <motion.h1
            initial={{ rotateX: -60, opacity: 0, y: 30 }}
            animate={{ rotateX: 0, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[18vw] md:text-[14rem] lg:text-[17rem] leading-[0.85] font-bold uppercase tracking-tighter text-white drop-shadow-[0_8px_0_rgba(0,0,0,0.15)] select-none"
          >
            {title}
          </motion.h1>
        </div>

        {/* Floating Donut Elements */}
        <div className="relative max-w-4xl mx-auto -mt-10 md:-mt-24 mb-10 flex items-center justify-center">
          {/* Left Donut */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotate: -20 }}
            animate={{ x: 0, opacity: 1, rotate: -10 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden sm:block w-36 md:w-56 -mr-12 z-0 drop-shadow-2xl"
          >
            <Image
              src="https://cdn.prod.website-files.com/6569d73055568668783bf587/656a263aac3297a804a0be99_donut-1.webp"
              alt="Floating Donut Left"
              width={260}
              height={260}
              className="w-full h-auto object-contain hover:rotate-12 transition-transform duration-500"
              priority
              unoptimized
            />
          </motion.div>

          {/* Center Giant Donut */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-64 md:w-96 z-10 drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)]"
          >
            <Image
              src="https://cdn.prod.website-files.com/6569d73055568668783bf587/656a26b714ecd5c5b17edb33_donut.webp"
              alt="Main Hero Donut"
              width={420}
              height={420}
              className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              priority
              unoptimized
            />
          </motion.div>

          {/* Right Donut */}
          <motion.div
            initial={{ x: 100, opacity: 0, rotate: 20 }}
            animate={{ x: 0, opacity: 1, rotate: 12 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden sm:block w-36 md:w-56 -ml-12 z-0 drop-shadow-2xl"
          >
            <Image
              src="https://cdn.prod.website-files.com/6569d73055568668783bf587/656a263a0e562be7548600e8_donut-2.webp"
              alt="Floating Donut Right"
              width={260}
              height={260}
              className="w-full h-auto object-contain hover:-rotate-12 transition-transform duration-500"
              priority
              unoptimized
            />
          </motion.div>
        </div>

        {/* Subtitle & CTAs */}
        <div className="max-w-2xl mx-auto text-center pb-16">
          <p className="font-sans text-base md:text-xl font-medium text-white/95 leading-relaxed mb-8">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={ctaHref}>
              <Button
                variant="white-pink"
                size="lg"
                rounded="full"
                className="w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>{ctaText}</span>
                <ArrowRight size={18} weight="bold" />
              </Button>
            </Link>

            <Link href={secondaryCtaHref}>
              <Button
                variant="yellow"
                size="lg"
                rounded="full"
                className="w-full sm:w-auto"
              >
                {secondaryCtaText}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Base Drip Divider */}
      <DripDivider color="#ffffff" />
    </section>
  );
};
