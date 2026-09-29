'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, PriceTag, QuantitySelector, StarRating, useCart } from '@donutland/ui';
import { ShoppingBag, Truck, ShieldCheck, Sparkle } from '@phosphor-icons/react';
import { ProductItem } from '../../../content/products';

export function ProductPurchaseSection({ product }: { product: ProductItem }) {
  const [boxSize, setBoxSize] = useState<number>(1);
  const [quantity, setQuantity] = useState<number>(1);
  const addItem = useCart((state) => state.addItem);

  // Box size multiplier pricing
  const unitMultiplier = boxSize === 1 ? 1 : boxSize === 2 ? 1.9 : 3.6;
  const calculatedPrice = product.price * unitMultiplier;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: calculatedPrice,
      image: product.image,
      boxSize,
      quantity,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Product Visual Showcase */}
      <div
        className="lg:col-span-6 relative flex items-center justify-center p-8 md:p-16 rounded-[32px] border-4 border-black shadow-[10px_10px_0_0_#000000]"
        style={{ backgroundColor: product.bgColor }}
      >
        {product.badge && (
          <div className="absolute top-6 left-6 z-10">
            <span className="px-4 py-1.5 rounded-full bg-[#eeae23] text-black font-sans font-extrabold text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0_0_#000000]">
              {product.badge}
            </span>
          </div>
        )}

        <div className="relative w-full aspect-square max-w-[480px]">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-500"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Right Column: Purchasing & Details */}
      <div className="lg:col-span-6 space-y-6">
        <div>
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#f54f95] block mb-2">
            {product.category}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black mb-3">
            {product.name}
          </h1>
          <div className="flex items-center gap-4">
            <StarRating rating={product.rating} count={product.reviewCount} />
            <span className="text-xs font-sans text-gray-500 font-medium">• Freshly Baked Today</span>
          </div>
        </div>

        <div className="pt-2 pb-4 border-y-2 border-black/10">
          <PriceTag
            price={calculatedPrice}
            originalPrice={product.originalPrice ? product.originalPrice * unitMultiplier : undefined}
            size="xl"
          />
        </div>

        <p className="font-sans text-base text-gray-700 leading-relaxed">
          {product.description}
        </p>

        {/* Box Size Selector Pills */}
        <div className="space-y-3 pt-2">
          <label className="font-display text-sm font-bold uppercase tracking-wider block text-black">
            Select Box Packaging:
          </label>
          <div className="flex flex-wrap gap-3">
            {[
              { size: 1, label: 'Single Donut' },
              { size: 2, label: 'Duo Box (2 Pcs - 5% Off)' },
              { size: 4, label: 'Party Box (4 Pcs - 10% Off)' },
            ].map((box) => (
              <button
                key={box.size}
                type="button"
                onClick={() => setBoxSize(box.size)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
                  boxSize === box.size
                    ? 'bg-[#f54f95] text-white shadow-[3px_3px_0_0_#000000]'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {box.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Stepper & Add to Cart */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
          <QuantitySelector value={quantity} onChange={setQuantity} />
          <Button
            variant="pink"
            size="lg"
            rounded="full"
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} weight="bold" />
            <span>Add To Cart • ${(calculatedPrice * quantity).toFixed(2)}</span>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-3 pt-6 border-t-2 border-black/10">
          <div className="flex items-center gap-2 text-xs font-sans text-gray-600 font-medium">
            <Truck size={20} className="text-[#3b89ff] shrink-0" />
            <span>Free Ship $35+</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-gray-600 font-medium">
            <ShieldCheck size={20} className="text-[#1ac500] shrink-0" />
            <span>100% Artisanal</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-gray-600 font-medium">
            <Sparkle size={20} className="text-[#eeae23] shrink-0" />
            <span>48h Proofed</span>
          </div>
        </div>

        {/* Nutrition & Ingredients */}
        <div className="p-6 rounded-[20px] bg-[#fafafa] border-2 border-black space-y-4">
          <h3 className="font-display text-lg font-bold uppercase tracking-tight text-black">
            Macro Nutrition & Ingredients
          </h3>
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-sans">
            <div className="p-2 rounded-[10px] bg-white border border-black/10">
              <span className="font-bold block text-black">{product.nutrition.calories}</span>
              <span className="text-gray-500 text-[10px]">Calories</span>
            </div>
            <div className="p-2 rounded-[10px] bg-white border border-black/10">
              <span className="font-bold block text-black">{product.nutrition.protein}</span>
              <span className="text-gray-500 text-[10px]">Protein</span>
            </div>
            <div className="p-2 rounded-[10px] bg-white border border-black/10">
              <span className="font-bold block text-black">{product.nutrition.carbs}</span>
              <span className="text-gray-500 text-[10px]">Carbs</span>
            </div>
            <div className="p-2 rounded-[10px] bg-white border border-black/10">
              <span className="font-bold block text-black">{product.nutrition.sugar}</span>
              <span className="text-gray-500 text-[10px]">Sugar</span>
            </div>
          </div>
          <p className="text-xs font-sans text-gray-600">
            <strong className="text-black">Ingredients:</strong> {product.ingredients.join(', ')}.
          </p>
        </div>
      </div>
    </div>
  );
}
