'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'yellow' | 'pink' | 'red' | 'blue' | 'white' | 'green' | 'black';
  size?: 'sm' | 'md' | 'lg' | 'pill';
  rotate?: '-12' | '-9' | '-7' | '0' | '7' | '9' | '12';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'yellow',
  size = 'md',
  rotate = '0',
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-sans font-extrabold uppercase tracking-wider select-none';

  const variants: Record<string, string> = {
    yellow: 'bg-[#eeae23] text-black border border-black shadow-[2px_2px_0_0_#000000]',
    pink: 'bg-[#f54f95] text-white border border-white shadow-[2px_2px_0_0_#ffffff]',
    red: 'bg-[#f21d33] text-white border border-white shadow-[2px_2px_0_0_#ffffff]',
    blue: 'bg-[#3b89ff] text-white border border-white shadow-[2px_2px_0_0_#ffffff]',
    green: 'bg-[#1ac500] text-white border border-white shadow-[2px_2px_0_0_#ffffff]',
    white: 'bg-white text-black border border-black shadow-[2px_2px_0_0_#000000]',
    black: 'bg-[#1b1b1b] text-white border border-white shadow-[2px_2px_0_0_#ffffff]',
  };

  const sizes: Record<string, string> = {
    sm: 'px-2.5 py-0.5 text-[10px] rounded-full',
    md: 'px-3.5 py-1 text-xs rounded-full',
    lg: 'px-5 py-2 text-sm rounded-full',
    pill: 'px-6 py-2.5 text-sm rounded-full tracking-widest',
  };

  const rotations: Record<string, string> = {
    '-12': '-rotate-12',
    '-9': '-rotate-9',
    '-7': '-rotate-6',
    '0': 'rotate-0',
    '7': 'rotate-6',
    '9': 'rotate-9',
    '12': 'rotate-12',
  };

  return (
    <span
      className={twMerge(clsx(base, variants[variant], sizes[size], rotations[rotate], className))}
      {...props}
    >
      {children}
    </span>
  );
};
