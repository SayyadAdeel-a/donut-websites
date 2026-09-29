'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Sparkle } from '@phosphor-icons/react';
import { Button } from '../atomic/Button';
import { WaveDivider } from '../composite/WaveDivider';

export const Hero02: React.FC<{
  title?: string;
  tagline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}> = ({
  title = 'donutland',
  tagline = '48-hour slow fermented sourdough brioche glazed with single-origin Belgian chocolate.',
  ctaText = 'Shop Now',
  ctaHref = '/all-donuts',
  secondaryCtaText = 'Create a Box',
  secondaryCtaHref = '/all-donuts',
}) => {
  const letters = title.split('');

  return (
    <section className="relative w-full bg-[#f5f6f4] text-[#1b1b1b] pt-32 md:pt-40 pb-0 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#6e2f10] text-[#f5f6f4] font-sans font-bold text-xs uppercase tracking-widest mb-6">
          <Sparkle size={14} weight="fill" className="text-[#eeae23]" />
          <span>Artisanal Patisserie Collection</span>
        </div>

        {/* 9-Letter Cascade Reveal */}
        <div className="flex items-center justify-center flex-wrap select-none mb-6">
          {letters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-[15vw] md:text-[13rem] lg:text-[16rem] leading-[0.85] font-bold uppercase tracking-tighter text-[#6e2f10] inline-block hover:scale-110 transition-transform duration-200"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Feature Split Donut & Box Visual */}
        <div className="relative max-w-3xl mx-auto -mt-6 md:-mt-16 mb-8 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-72 md:w-[480px] drop-shadow-2xl z-10"
          >
            <Image
              src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6586deb77efa8f55632d684e_pink-splash-donut-pink.webp"
              alt="Gourmet Artisanal Donut"
              width={520}
              height={300}
              className="w-full h-auto object-contain"
              priority
              unoptimized
            />
          </motion.div>

          {/* Floating Sticker 1 */}
          <div className="hidden sm:block absolute left-4 top-1/4 bg-white text-black border-2 border-black p-3 rounded-[16px] shadow-[4px_4px_0_0_#000000] -rotate-12 z-20">
            <span className="font-display text-sm font-bold uppercase block text-[#6e2f10]">
              48h Sourdough
            </span>
            <span className="font-sans text-[11px] text-gray-600 block">Wild yeast brioche</span>
          </div>

          {/* Floating Sticker 2 */}
          <div className="hidden sm:block absolute right-4 top-1/3 bg-[#eeae23] text-black border-2 border-black p-3 rounded-[16px] shadow-[4px_4px_0_0_#000000] rotate-12 z-20">
            <span className="font-display text-sm font-bold uppercase block">
              72% Cacao
            </span>
            <span className="font-sans text-[11px] text-black/80 block">Single-origin ganache</span>
          </div>
        </div>

        {/* Subtitle & Actions */}
        <div className="max-w-xl mx-auto pb-16">
          <p className="font-sans text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
            {tagline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={ctaHref}>
              <Button
                variant="pink"
                size="lg"
                rounded="full"
                className="w-full sm:w-auto bg-[#6e2f10] border-[#6e2f10] shadow-[5px_4px_0_0_#000000] flex items-center justify-center gap-2 text-white"
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

      <WaveDivider color="#ffffff" />
    </section>
  );
};
