'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, CaretDown } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';
import { DropdownItem } from './MegaDropdown';

export interface NavCategory {
  title: string;
  items: DropdownItem[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  categories: NavCategory[];
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, categories }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm lg:hidden flex flex-col"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="w-full bg-white border-b-4 border-black p-6 max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 border-b-2 border-black/10">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
                Menu
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-100 cursor-pointer text-black"
                aria-label="Close menu"
              >
                <X size={24} weight="bold" />
              </button>
            </div>

            <div className="py-4 space-y-3">
              <Link
                href="/"
                onClick={onClose}
                className="block py-2 font-display text-lg uppercase tracking-wider text-black hover:text-[#f54f95]"
              >
                Main Index
              </Link>

              {categories.map((cat) => {
                const isExpanded = expandedCategory === cat.title;
                return (
                  <div key={cat.title} className="border-b border-black/5 pb-2">
                    <button
                      type="button"
                      onClick={() => toggleCategory(cat.title)}
                      className="w-full flex items-center justify-between py-2 font-display text-base uppercase tracking-wider text-black hover:text-[#f54f95] cursor-pointer"
                    >
                      <span>{cat.title}</span>
                      <CaretDown
                        size={16}
                        weight="bold"
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 py-2 space-y-2"
                        >
                          {cat.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center justify-between py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-[#f54f95]"
                            >
                              <span>{item.label}</span>
                              {item.badge && (
                                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#eeae23] text-black border border-black">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
