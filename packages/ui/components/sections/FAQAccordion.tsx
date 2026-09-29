'use client';

import React, { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'motion/react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our dough, glazes, allergens, and deliveries.',
  items,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={`py-20 px-6 md:px-12 max-w-[1000px] mx-auto ${className || ''}`}>
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-[20px] border-2 border-black bg-white overflow-hidden shadow-[4px_4px_0_0_#000000]"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer font-display text-lg md:text-xl font-bold uppercase tracking-tight text-black hover:text-[#f54f95] transition-colors"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <CaretDown
                  size={20}
                  weight="bold"
                  className={`transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#f54f95]' : ''}`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-1 font-sans text-sm md:text-base text-gray-700 leading-relaxed border-t border-black/5">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
