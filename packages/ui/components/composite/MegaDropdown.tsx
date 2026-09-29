'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { CaretDown } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { twMerge } from 'tailwind-merge';

export interface DropdownItem {
  label: string;
  href: string;
  badge?: string;
}

interface MegaDropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
  activePath?: string;
  textColor?: string;
}

export const MegaDropdown: React.FC<MegaDropdownProps> = ({
  label,
  items,
  className,
  activePath,
  textColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className={twMerge('relative inline-block text-left', className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 font-display text-sm font-bold uppercase tracking-wider hover:text-[#f54f95] transition-colors cursor-pointer select-none"
        style={{ color: textColor || '#1b1b1b' }}
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <CaretDown
          size={14}
          weight="bold"
          className={twMerge('transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-1 min-w-[220px] rounded-[16px] bg-white border-2 border-black p-2 shadow-[4px_4px_0_0_#000000] z-50 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {items.map((item) => {
                const isActive = activePath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={twMerge(
                      'flex items-center justify-between px-3.5 py-2 rounded-[10px] font-sans text-xs font-bold uppercase tracking-wider transition-all duration-150',
                      isActive
                        ? 'bg-[#f54f95] text-white'
                        : 'text-black hover:bg-[#ffdede] hover:text-[#f54f95]'
                    )}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#eeae23] text-black border border-black shadow-[1px_1px_0_0_#000000]">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
