'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface WaveDividerProps {
  color?: string;
  className?: string;
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  color = 'currentColor',
  className,
  flip = false,
}) => {
  return (
    <div
      className={twMerge(
        'w-full overflow-hidden leading-none select-none pointer-events-none -mb-[1px]',
        flip && 'rotate-180 -mt-[1px] mb-0',
        className
      )}
      style={{ color }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        className="w-full h-auto block min-w-[700px]"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,64C1200,75,1320,85,1380,90.7L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
        />
      </svg>
    </div>
  );
};
