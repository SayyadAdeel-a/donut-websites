import React from 'react';
import {
  GlobalHeader,
  GlobalFooter,
  Button,
  Badge,
  Input,
  QuantitySelector,
  PriceTag,
  StarRating,
  DripDivider,
  WaveDivider,
  NutritionBadge,
} from '@donutland/ui';

export default function StyleGuidePage() {
  const colors = [
    { name: 'Hot Pink (Primary)', hex: '#f54f95', bg: 'bg-[#f54f95]' },
    { name: 'Streetwear Red', hex: '#f21d33', bg: 'bg-[#f21d33]' },
    { name: 'Trust Blue', hex: '#3b89ff', bg: 'bg-[#3b89ff]' },
    { name: 'Glaze Yellow', hex: '#eeae23', bg: 'bg-[#eeae23]' },
    { name: 'Artisan Purple', hex: '#686ad7', bg: 'bg-[#686ad7]' },
    { name: 'Belgian Chocolate', hex: '#6e2f10', bg: 'bg-[#6e2f10]' },
    { name: 'Organic Green', hex: '#1ac500', bg: 'bg-[#1ac500]' },
    { name: 'Charcoal Black', hex: '#1b1b1b', bg: 'bg-[#1b1b1b]' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/admin/style-guide" />

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20 space-y-16">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#eeae23] text-black font-sans font-bold text-xs uppercase tracking-wider mb-2">
            Living Design System
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black">
            Style Guide & Primitives
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-600">
            Interactive token showcase adhering to Adeel Dev Standard: Anton typography, Plus Jakarta Sans, and Phosphor Icons.
          </p>
        </div>

        {/* 1. Color Palette Tokens */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black border-b-2 border-black/10 pb-2">
            1. Confectionery Color Tokens
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {colors.map((c) => (
              <div key={c.hex} className="p-4 rounded-[16px] border-2 border-black bg-white shadow-[3px_3px_0_0_#000000]">
                <div className={`h-16 w-full rounded-[10px] ${c.bg} border border-black mb-3`} />
                <span className="font-display text-sm uppercase font-bold block">{c.name}</span>
                <span className="font-mono text-xs text-gray-500">{c.hex}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black border-b-2 border-black/10 pb-2">
            2. Typographic Scale
          </h2>
          <div className="space-y-4 p-6 rounded-[20px] bg-[#fafafa] border-2 border-black">
            <div>
              <span className="text-xs font-mono text-gray-400">Display Anton Large</span>
              <h1 className="font-display text-5xl uppercase font-bold text-black">DONUTLAND HERO (45px+)</h1>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400">Display Anton Medium</span>
              <h2 className="font-display text-3xl uppercase font-bold text-black">Section Headline H2</h2>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400">Display Anton Card</span>
              <h3 className="font-display text-xl uppercase font-bold text-black">Product & Flavor Card H3</h3>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400">Body Plus Jakarta Sans Medium</span>
              <p className="font-sans text-base text-gray-700">
                Freshly fried sourdough donuts rested for 48 hours in temperature-controlled chambers with organic fruit glazes.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Tactile Neo-Brutalist Buttons */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black border-b-2 border-black/10 pb-2">
            3. Button Primitives & Offset Shadows
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="pink" size="md">Pink Primary</Button>
            <Button variant="white-pink" size="md">White-Pink</Button>
            <Button variant="yellow" size="md">Yellow Glow</Button>
            <Button variant="red" size="md">Streetwear Red</Button>
            <Button variant="blue" size="md">Americana Blue</Button>
            <Button variant="black" size="md">Matte Black</Button>
            <Button variant="pink" size="pill">Pill Shop CTA</Button>
          </div>
        </section>

        {/* 4. Badges & Micro-Interactions */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black border-b-2 border-black/10 pb-2">
            4. Sticker Badges & Rotations
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Badge variant="yellow" rotate="-9">Bestseller</Badge>
            <Badge variant="pink" rotate="7">100% Organic</Badge>
            <Badge variant="red" rotate="-12">New Drop</Badge>
            <Badge variant="green" rotate="9">Keto Clean</Badge>
            <Badge variant="blue" rotate="0">Gluten-Free</Badge>
          </div>
        </section>

        {/* 5. Rating, Price & Quantity Stepper */}
        <section className="space-y-6">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black border-b-2 border-black/10 pb-2">
            5. Commerce Atoms
          </h2>
          <div className="flex flex-wrap gap-8 items-center p-6 rounded-[20px] bg-[#f5f6f4] border-2 border-black">
            <div>
              <span className="text-xs font-mono text-gray-500 block mb-2">PriceTag</span>
              <PriceTag price={4.5} originalPrice={5.5} size="lg" />
            </div>
            <div>
              <span className="text-xs font-mono text-gray-500 block mb-2">StarRating (Phosphor)</span>
              <StarRating rating={4.9} count={142} />
            </div>
            <div>
              <span className="text-xs font-mono text-gray-500 block mb-2">Nutrition Badge</span>
              <NutritionBadge label="Net Carbs" value="2g" variant="green" />
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
