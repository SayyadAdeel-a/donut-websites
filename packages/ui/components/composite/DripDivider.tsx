'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SVG_DRIP_CANONICAL } from '../../tokens/svgDrips';

export interface DripDividerProps {
  color?: string;
  className?: string;
  flip?: boolean;
}

export const DripDivider: React.FC<DripDividerProps> = ({
  color,
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
      style={{ color: color || 'currentColor' }}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={SVG_DRIP_CANONICAL.viewBox}
        className="w-full h-auto block min-w-[700px] md:min-w-[1200px]"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="drip-clip-left">
            <path d={SVG_DRIP_CANONICAL.clipLeft} clipRule="nonzero" />
          </clipPath>
          <clipPath id="drip-clip-right">
            <path d={SVG_DRIP_CANONICAL.clipRight} clipRule="nonzero" />
          </clipPath>
        </defs>
        <g clipPath="url(#drip-clip-left)">
          <path fill="currentColor" d={SVG_DRIP_CANONICAL.pathLeft} />
        </g>
        <g clipPath="url(#drip-clip-right)">
          <path fill="currentColor" d={SVG_DRIP_CANONICAL.pathRight} />
        </g>
      </svg>
    </div>
  );
};
