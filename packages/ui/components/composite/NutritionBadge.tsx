'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface NutritionBadgeProps {
  label: string;
  value: string;
  className?: string;
  variant?: 'green' | 'blue' | 'pink' | 'white';
}

export const NutritionBadge: React.FC<NutritionBadgeProps> = ({
  label,
  value,
  className,
  variant = 'green',
}) => {
  const variants: Record<string, string> = {
    green: 'bg-[#1ac500]/10 text-[#1ac500] border-[#1ac500]',
    blue: 'bg-[#3b89ff]/10 text-[#3b89ff] border-[#3b89ff]',
    pink: 'bg-[#f54f95]/10 text-[#f54f95] border-[#f54f95]',
    white: 'bg-white text-black border-black shadow-[2px_2px_0_0_#000000]',
  };

  return (
    <div
      className={twMerge(
        'inline-flex flex-col items-center justify-center p-3 rounded-[16px] border-2 text-center min-w-[90px]',
        variants[variant],
        className
      )}
    >
      <span className="font-display text-xl font-extrabold tracking-tight">{value}</span>
      <span className="font-sans text-[11px] font-bold uppercase tracking-wider opacity-80">
        {label}
      </span>
    </div>
  );
};
