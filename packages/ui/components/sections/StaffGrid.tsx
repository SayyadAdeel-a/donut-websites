'use client';

import React from 'react';
import Image from 'next/image';
import { Plus } from '@phosphor-icons/react';

export interface StaffMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
  badge?: string;
}

interface StaffGridProps {
  title?: string;
  subtitle?: string;
  members: StaffMember[];
}

export const StaffGrid: React.FC<StaffGridProps> = ({
  title = 'Meet The Master Bakers',
  subtitle = 'The passionate artisans crafting your donuts before the sun rises.',
  members,
}) => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member, i) => (
          <div
            key={i}
            className="group relative rounded-[24px] border-2 border-black bg-white overflow-hidden p-5 shadow-[6px_6px_0_0_#000000] hover:-translate-y-1.5 transition-transform duration-200"
          >
            {/* Image Container with rotating plus badge */}
            <div className="relative aspect-square w-full rounded-[16px] overflow-hidden mb-5 bg-[#ffdede] border border-black flex items-center justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={320}
                height={320}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#f54f95] text-white flex items-center justify-center border border-black shadow-[2px_2px_0_0_#000000] group-hover:rotate-90 transition-transform duration-300">
                <Plus size={16} weight="bold" />
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-black">
                {member.name}
              </h3>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#f54f95] block">
                {member.role}
              </span>
              {member.bio && (
                <p className="font-sans text-xs text-gray-600 pt-2 leading-relaxed">
                  {member.bio}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
