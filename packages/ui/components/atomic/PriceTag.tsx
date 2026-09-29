'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface PriceTagProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  originalPrice,
  currency = '$',
  className,
  size = 'md',
}) => {
  const sizes: Record<string, string> = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
    xl: 'text-4xl',
  };

  return (
    <div className={twMerge('inline-flex items-baseline gap-2 font-display font-bold', className)}>
      <span className={twMerge('text-current', sizes[size])}>
        {currency}
        {price.toFixed(2)}
      </span>
      {originalPrice && originalPrice > price && (
        <span className="text-gray-400 line-through text-sm font-sans font-medium">
          {currency}
          {originalPrice.toFixed(2)}
        </span>
      )}
    </div>
  );
};
