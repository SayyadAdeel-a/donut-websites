'use client';

import React, { useState } from 'react';
import { Button, Input } from '@donutland/ui';
import { Check, PaperPlaneTilt } from '@phosphor-icons/react';
import { BrandConfig } from '../../../../config/brands/brandConfig';

export function BrandContactForm({ brand }: { brand: BrandConfig }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="md:col-span-7 rounded-[28px] border-4 border-black p-8 md:p-10 bg-white shadow-[8px_8px_0_0_#000000]">
      {submitted ? (
        <div className="p-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#1ac500]/10 text-[#1ac500] flex items-center justify-center mx-auto border-2 border-[#1ac500]">
            <Check size={32} weight="bold" />
          </div>
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
            Message Dispatched!
          </h3>
          <p className="font-sans text-sm text-gray-600">
            Thank you for reaching out to {brand.name}. Our bakery coordinator will respond within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2 text-black">
              Your Full Name
            </label>
            <Input
              required
              placeholder="E.g. Emily Parker"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2 text-black">
              Your Email Address
            </label>
            <Input
              required
              type="email"
              placeholder="emily@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2 text-black">
              How Can We Help You?
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell us about your event date, box size, or flavor inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3.5 rounded-[12px] font-sans text-sm border-2 border-black/10 focus:border-[#f54f95] focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full flex items-center justify-center gap-2 text-white"
            style={{ backgroundColor: brand.theme.primaryColor }}
          >
            <PaperPlaneTilt size={18} weight="bold" />
            <span>Send Inquiry</span>
          </Button>
        </form>
      )}
    </div>
  );
}
