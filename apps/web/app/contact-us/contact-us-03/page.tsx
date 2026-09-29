'use client';

import React, { useState } from 'react';
import { GlobalHeader, GlobalFooter, Button, Input } from '@donutland/ui';
import { Check } from '@phosphor-icons/react';

export default function Contact03Page() {
  const [inquiryType, setInquiryType] = useState<'feedback' | 'franchise'>('franchise');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex-1 flex flex-col bg-[#fff5ea] text-black">
      <GlobalHeader activePath="/contact-us/contact-us-03" />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-[#3b89ff] text-white font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black">
          Americana Diner Routing
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight text-black mb-4">
          Franchise & Feedback
        </h1>
        <p className="font-sans text-base md:text-xl text-gray-700 font-medium">
          Interested in bringing a Donut Counter franchise to your town, or sharing your diner feedback?
        </p>

        {/* Toggle Pills */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => setInquiryType('franchise')}
            className={`px-6 py-2 rounded-full font-display text-sm uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
              inquiryType === 'franchise' ? 'bg-[#3b89ff] text-white shadow-[3px_3px_0_0_#000000]' : 'bg-white text-black'
            }`}
          >
            Franchise Application
          </button>
          <button
            type="button"
            onClick={() => setInquiryType('feedback')}
            className={`px-6 py-2 rounded-full font-display text-sm uppercase tracking-wider border-2 border-black transition-all cursor-pointer ${
              inquiryType === 'feedback' ? 'bg-[#eeae23] text-black shadow-[3px_3px_0_0_#000000]' : 'bg-white text-black'
            }`}
          >
            Guest Feedback
          </button>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 max-w-[800px] mx-auto flex-1 w-full">
        <div className="rounded-[28px] border-4 border-black p-8 md:p-12 bg-white shadow-[8px_8px_0_0_#3b89ff]">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#3b89ff]/10 text-[#3b89ff] flex items-center justify-center mx-auto border-2 border-[#3b89ff]">
                <Check size={32} weight="bold" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-black">
                {inquiryType === 'franchise' ? 'Franchise Dossier Received' : 'Thank You For Your Feedback'}
              </h3>
              <p className="font-sans text-sm text-gray-600">
                Our franchise development officer will review your territory qualifications shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Full Name</label>
                  <Input required placeholder="Robert Miller" />
                </div>
                <div>
                  <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Email Address</label>
                  <Input required type="email" placeholder="robert@example.com" />
                </div>
              </div>
              {inquiryType === 'franchise' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Desired Territory</label>
                    <Input required placeholder="City, State" />
                  </div>
                  <div>
                    <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Liquid Capital Range</label>
                    <Input required placeholder="$100k - $250k" />
                  </div>
                </div>
              )}
              <div>
                <label className="font-display text-xs font-bold uppercase tracking-wider block mb-2">Message or Notes</label>
                <textarea rows={4} required placeholder="Tell us about your background or visit experience..." className="w-full px-5 py-3.5 rounded-[12px] border-2 border-black/10 focus:border-[#3b89ff] focus:outline-none" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#3b89ff] text-white border-2 border-black">
                Submit {inquiryType === 'franchise' ? 'Franchise Inquiry' : 'Feedback'}
              </Button>
            </form>
          )}
        </div>
      </section>
      <GlobalFooter config={{ bgColor: '#3b89ff', dripColor: '#3b89ff' }} />
    </div>
  );
}
