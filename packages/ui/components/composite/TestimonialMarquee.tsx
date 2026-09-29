'use client';

import React from 'react';
import { Star } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  comment: string;
  rating?: number;
  avatar?: string;
}

interface TestimonialMarqueeProps {
  testimonials: Testimonial[];
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = ({
  testimonials,
  bgColor = '#eeae23',
  textColor = '#000000',
  className,
}) => {
  // Duplicate for seamless infinite loop
  const duplicated = [...testimonials, ...testimonials];

  return (
    <div
      className={twMerge('relative w-full overflow-hidden py-8 border-y-2 border-black', className)}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <div className="flex w-max animate-marquee space-x-6">
        {duplicated.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="w-[320px] md:w-[380px] p-5 rounded-[20px] bg-white text-black border-2 border-black shadow-[4px_4px_0_0_#000000] shrink-0 flex flex-col justify-between"
          >
            <div className="flex items-center gap-1 text-[#eeae23] mb-3">
              {Array.from({ length: item.rating || 5 }).map((_, i) => (
                <Star key={i} size={16} weight="fill" />
              ))}
            </div>

            <p className="font-sans text-sm text-gray-800 line-clamp-3 mb-4 italic leading-relaxed">
              &ldquo;{item.comment}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-black/10">
              <div className="w-9 h-9 rounded-full bg-[#f54f95] text-white flex items-center justify-center font-display font-bold text-sm border border-black shadow-[1px_1px_0_0_#000000]">
                {item.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-display text-sm font-bold uppercase tracking-tight text-black">
                  {item.name}
                </h4>
                {item.role && (
                  <span className="text-[11px] font-sans font-medium text-gray-500 block">
                    {item.role}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
