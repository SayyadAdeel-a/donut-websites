'use client';

import React from 'react';
import { Star } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';

interface StarRatingProps {
  rating?: number;
  count?: number;
  max?: number;
  size?: number;
  showCount?: boolean;
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating = 5,
  count,
  max = 5,
  size = 18,
  showCount = true,
  className,
}) => {
  return (
    <div className={twMerge('inline-flex items-center gap-1.5', className)}>
      <div className="flex items-center text-[#eeae23]">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            size={size}
            weight={i < Math.floor(rating) ? 'fill' : 'bold'}
            className="shrink-0"
          />
        ))}
      </div>
      {showCount && (
        <span className="text-xs font-sans font-bold text-gray-700">
          {rating.toFixed(1)} {count !== undefined && `(${count})`}
        </span>
      )}
    </div>
  );
};
