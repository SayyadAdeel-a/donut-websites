'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'white' | 'cream' | 'dark';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'white', ...props }, ref) => {
    const variants: Record<string, string> = {
      white: 'bg-white text-black border-2 border-black/10 focus:border-[#f54f95] focus:outline-none',
      cream: 'bg-[#f5f6f4] text-black border-2 border-black/10 focus:border-[#f54f95] focus:outline-none',
      dark: 'bg-[#1b1b1b] text-white border-2 border-white/20 focus:border-[#eeae23] focus:outline-none',
    };

    return (
      <input
        ref={ref}
        className={twMerge(
          'w-full px-5 py-3.5 rounded-[12px] font-sans text-sm transition-colors duration-150 placeholder:text-gray-400',
          variants[variant],
          className
        )}
        {...props}
      >
      </input>
    );
  }
);

Input.displayName = 'Input';
