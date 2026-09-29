'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';
import { PriceTag } from '../atomic/PriceTag';
import { useCart } from '../../hooks/useCart';

export interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category?: string;
  badge?: string;
  bgColor?: string;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  slug,
  name,
  price,
  originalPrice,
  image,
  category,
  badge,
  bgColor = '#ffffff',
  className,
}) => {
  const addItem = useCart((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id,
      slug,
      name,
      price,
      image,
      boxSize: 1,
    });
  };

  return (
    <div
      className={twMerge(
        'group relative flex flex-col rounded-[24px] border-2 border-black p-5 transition-all duration-300 hover:-translate-y-1.5 shadow-[5px_5px_0_0_#000000] hover:shadow-[7px_7px_0_0_#000000]',
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block bg-[#eeae23] text-black font-sans font-extrabold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-black shadow-[2px_2px_0_0_#000000]">
            {badge}
          </span>
        </div>
      )}

      <Link href={`/product/${slug}`} className="block relative aspect-square w-full mb-4 overflow-hidden rounded-[16px] bg-white/40 flex items-center justify-center p-4">
        <Image
          src={image}
          alt={name}
          width={320}
          height={320}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
          unoptimized
        />
      </Link>

      <div className="flex flex-col flex-grow justify-between gap-3">
        <div>
          {category && (
            <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-black/60 mb-1 block">
              {category}
            </span>
          )}
          <Link href={`/product/${slug}`} className="hover:text-[#f54f95] transition-colors">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black line-clamp-1">
              {name}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-black/10">
          <PriceTag price={price} originalPrice={originalPrice} size="md" />

          <button
            type="button"
            onClick={handleQuickAdd}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f54f95] text-white border-2 border-black font-sans text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_0_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer transition-all active:scale-95"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingBag size={14} weight="bold" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
