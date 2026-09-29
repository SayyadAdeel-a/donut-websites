'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'pink' | 'white-pink' | 'orange' | 'red' | 'blue' | 'black' | 'outline' | 'yellow' | 'green';
  size?: 'sm' | 'md' | 'lg' | 'pill';
  rounded?: 'sm' | 'md' | 'full' | 'none';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'pink', size = 'md', rounded = 'sm', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-sans font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-50 disabled:pointer-events-none';

    const variants: Record<string, string> = {
      pink: 'bg-[#f54f95] text-white border-2 border-white shadow-[5px_4px_0_0_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
      'white-pink':
        'bg-white text-[#f54f95] border-2 border-[#f54f95] shadow-[5px_4px_0_0_#f54f95] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
      orange:
        'bg-[#f98000] text-white border-2 border-white shadow-[5px_4px_0_0_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
      red: 'bg-[#f21d33] text-white border-2 border-white shadow-[5px_4px_0_0_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
      blue: 'bg-[#3b89ff] text-white border-2 border-white shadow-[5px_4px_0_0_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
      yellow:
        'bg-[#eeae23] text-black border-2 border-black shadow-[5px_4px_0_0_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
      green:
        'bg-[#1ac500] text-white border-2 border-white shadow-[5px_4px_0_0_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
      black:
        'bg-[#1b1b1b] text-white border-2 border-white shadow-[5px_4px_0_0_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]',
      outline:
        'bg-transparent text-current border-2 border-current hover:bg-white/10 shadow-[3px_3px_0_0_currentColor] hover:shadow-none',
    };

    const sizes: Record<string, string> = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3.5 text-sm',
      lg: 'px-8 py-4 text-base font-extrabold',
      pill: 'px-8 py-3.5 text-sm rounded-full tracking-widest',
    };

    const radiuses: Record<string, string> = {
      none: 'rounded-none',
      sm: 'rounded-[6px]',
      md: 'rounded-[12px]',
      full: 'rounded-full',
    };

    return (
      <button
        ref={ref}
        className={twMerge(
          clsx(
            baseStyles,
            variants[variant],
            sizes[size],
            radiuses[rounded],
            className
          )
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
