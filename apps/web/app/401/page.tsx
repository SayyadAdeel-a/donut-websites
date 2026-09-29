import React from 'react';
import Link from 'next/link';
import { GlobalHeader, GlobalFooter, Button, Input } from '@donutland/ui';
import { LockSimple } from '@phosphor-icons/react/dist/ssr';

export default function ProtectedPage() {
  return (
    <div className="flex-1 flex flex-col bg-[#f5f6f4] text-black">
      <GlobalHeader />
      <main className="max-w-md mx-auto px-6 pt-40 pb-24 text-center flex-1 flex flex-col justify-center">
        <div className="w-16 h-16 rounded-full bg-[#eeae23] text-black border-2 border-black flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0_0_#000000]">
          <LockSimple size={32} weight="bold" />
        </div>
        <h1 className="font-display text-4xl font-bold uppercase tracking-tight text-black mb-3">
          Protected Page
        </h1>
        <p className="font-sans text-sm text-gray-600 mb-8">
          This area requires internal staff authorization to inspect recipes and production batches.
        </p>
        <form className="space-y-4">
          <Input type="password" placeholder="Enter bakery passkey" />
          <Button variant="pink" size="lg" className="w-full">
            Unlock Content
          </Button>
        </form>
      </main>
      <GlobalFooter />
    </div>
  );
}
