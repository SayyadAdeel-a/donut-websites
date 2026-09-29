'use client';

import React from 'react';
import { Sparkle, Cookie, Truck } from '@phosphor-icons/react';

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon?: 'sparkle' | 'cookie' | 'truck';
}

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps?: StepItem[];
}

const defaultSteps: StepItem[] = [
  {
    number: '01',
    title: '48-Hour Ferment',
    description:
      'We rest our sourdough brioche for two full days, developing complex flavor notes and an airy, digestible crumb.',
    icon: 'sparkle',
  },
  {
    number: '02',
    title: 'Warm Artisan Dip',
    description:
      'Each ring is fried golden in clean oil and hand-dipped in small-batch organic fruit and cacao glazes.',
    icon: 'cookie',
  },
  {
    number: '03',
    title: 'Fresh Door Delivery',
    description:
      'Packed warm into insulated, recyclable presentation boxes and rushed to your home or office before 8 AM.',
    icon: 'truck',
  },
];

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  title = 'How Donutland Magic Happens',
  subtitle = 'From sourdough starter to your morning coffee table in three steps.',
  steps = defaultSteps,
}) => {
  const getIcon = (type?: string) => {
    switch (type) {
      case 'sparkle':
        return <Sparkle size={28} weight="fill" className="text-[#eeae23]" />;
      case 'truck':
        return <Truck size={28} weight="fill" className="text-[#3b89ff]" />;
      default:
        return <Cookie size={28} weight="fill" className="text-[#f54f95]" />;
    }
  };

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative rounded-[24px] border-2 border-black bg-white p-8 shadow-[6px_6px_0_0_#000000] hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-4xl font-extrabold text-[#f54f95]">
                {step.number}
              </span>
              <div className="w-12 h-12 rounded-full bg-[#f5f6f4] border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000000]">
                {getIcon(step.icon)}
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black mb-3">
              {step.title}
            </h3>
            <p className="font-sans text-sm text-gray-700 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
