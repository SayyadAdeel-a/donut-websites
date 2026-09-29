import React from 'react';
import Link from 'next/link';
import { GlobalHeader, GlobalFooter, Button } from '@donutland/ui';
import { Cookie, ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col bg-[#fff5ea] text-black min-h-screen">
      <GlobalHeader />
      <main className="max-w-xl mx-auto px-6 pt-40 pb-24 text-center flex-1 flex flex-col items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-[#f54f95] text-white border-4 border-black flex items-center justify-center mb-6 shadow-[6px_6px_0_0_#000000]">
          <Cookie size={48} weight="bold" />
        </div>
        <span className="font-display text-8xl font-black text-[#f54f95] block mb-2 leading-none">
          404
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-black mb-4">
          Someone Ate This Donut!
        </h1>
        <p className="font-sans text-base text-gray-700 max-w-md mx-auto mb-8">
          The page or flavor you were searching for has rolled off the bakery counter. Let&apos;s get you back to the fresh glaze!
        </p>
        <Link href="/">
          <Button variant="pink" size="lg" rounded="full" className="flex items-center gap-2">
            <span>Return to Bakery Home</span>
            <ArrowRight size={18} weight="bold" />
          </Button>
        </Link>
      </main>
      <GlobalFooter />
    </div>
  );
}
