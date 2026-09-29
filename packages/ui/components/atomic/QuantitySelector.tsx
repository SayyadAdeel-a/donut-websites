'use client';

import React from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
  size?: 'sm' | 'md';
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
  className,
  size = 'md',
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const isSm = size === 'sm';

  return (
    <div
      className={twMerge(
        'inline-flex items-center border-2 border-black rounded-full bg-white shadow-[2px_2px_0_0_#000000]',
        isSm ? 'px-2 py-0.5' : 'px-3 py-1.5',
        className
      )}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className="p-1 hover:text-[#f54f95] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={isSm ? 12 : 16} weight="bold" />
      </button>

      <span
        className={twMerge(
          'font-sans font-bold text-center select-none',
          isSm ? 'w-6 text-xs' : 'w-8 text-sm'
        )}
      >
        {value}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className="p-1 hover:text-[#f54f95] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={isSm ? 12 : 16} weight="bold" />
      </button>
    </div>
  );
};
