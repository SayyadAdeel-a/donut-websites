'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUp, EnvelopeSimple, Check } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';
import { DripDivider } from '../composite/DripDivider';
import { getActiveBrand } from '../../tokens/brands';

export interface FooterConfig {
  bgColor?: string;
  textColor?: string;
  dripColor?: string;
  brandName?: string;
}

export const GlobalFooter: React.FC<{ config?: FooterConfig }> = ({ config }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const brand = getActiveBrand(config?.brandName);

  const bgColor = config?.bgColor || brand?.theme.footerBg || '#f54f95';
  const textColor = config?.textColor || (brand ? '#ffffff' : '#ffffff');
  const dripColor = config?.dripColor || brand?.theme.footerDrip || bgColor;
  const brandName = config?.brandName || brand?.name || 'Donutland';

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full overflow-hidden" style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Top SVG Drip Divider */}
      <DripDivider color={dripColor} flip />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-12">
        {/* Newsletter Section */}
        <div className="rounded-[28px] bg-white text-black border-4 border-black p-8 md:p-12 mb-16 shadow-[8px_8px_0_0_#000000]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#eeae23] text-black font-sans font-bold text-xs uppercase tracking-wider border border-black mb-3">
                Fresh From The Oven
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-3">
                Join the Glaze Club!
              </h3>
              <p className="font-sans text-sm md:text-base text-gray-700 max-w-[480px]">
                Subscribe for weekly secret flavors, VIP unboxing boxes, and 15% off your first bakery order.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-[16px] bg-[#1ac500]/10 border-2 border-[#1ac500] text-[#1ac500] font-sans font-bold text-sm">
                  <Check size={20} weight="bold" />
                  <span>Welcome to the club! Check your inbox for sweet treats.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <EnvelopeSimple
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your sweet email..."
                      className="w-full pl-11 pr-4 py-3.5 rounded-full border-2 border-black font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#f54f95]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#f54f95] text-white border-2 border-black font-sans font-extrabold text-sm uppercase tracking-wider shadow-[3px_3px_0_0_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        {brand ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-16 border-b border-white/20">
            {/* Brand Info */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">
                {brand.name}
              </h4>
              <p className="font-sans text-xs opacity-90 leading-relaxed mb-4">
                {brand.description || 'Baking moments of pure confectionery joy since 1958. Real sourdough, authentic fruit glazes, and zero compromises.'}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                  100% Artisanal
                </span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h5 className="font-display text-base font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-1">
                Navigation
              </h5>
              <ul className="space-y-2 font-sans text-xs uppercase tracking-wider opacity-90">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline">About Us</Link></li>
                <li><Link href="/why" className="hover:underline">Why Us</Link></li>
                <li><Link href="/subscribe" className="hover:underline">Subscribe & Save</Link></li>
                <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>

            {/* Our Menu */}
            <div>
              <h5 className="font-display text-base font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-1">
                Our Menu
              </h5>
              <ul className="space-y-2 font-sans text-xs uppercase tracking-wider opacity-90">
                <li><Link href="/all-donuts" className="hover:underline">All Donuts</Link></li>
                <li><Link href="/category/special" className="hover:underline">Special Collection</Link></li>
                <li><Link href="/category/glazed" className="hover:underline">Glazed Collection</Link></li>
                <li><Link href="/category/chocolate" className="hover:underline">Chocolate Collection</Link></li>
              </ul>
            </div>

            {/* Stories & News */}
            <div>
              <h5 className="font-display text-base font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-1">
                Stories & News
              </h5>
              <ul className="space-y-2 font-sans text-xs uppercase tracking-wider opacity-90">
                <li><Link href="/all-blogs" className="hover:underline">All Stories</Link></li>
                <li><Link href="/blog-article/our-top-five-best-selling-donuts" className="hover:underline">Featured Article</Link></li>
                <li><Link href="/blog-category/event" className="hover:underline">Events & Community</Link></li>
              </ul>
            </div>

            {/* Support & Info */}
            <div>
              <h5 className="font-display text-base font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-1">
                Support & Info
              </h5>
              <ul className="space-y-2 font-sans text-xs uppercase tracking-wider opacity-90">
                <li><Link href="/contact" className="hover:underline">Contact Support</Link></li>
                <li><Link href="/checkout" className="hover:underline">Cart & Checkout</Link></li>
                <li><Link href="/admin/licenses" className="hover:underline">Licenses & Credits</Link></li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-16 border-b border-white/20">
            {/* Brand Info */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <h4 className="font-display text-2xl font-bold uppercase tracking-tight mb-4">
                {brandName}
              </h4>
              <p className="font-sans text-xs opacity-90 leading-relaxed mb-4">
                Baking moments of pure confectionery joy since 1958. Real sourdough, authentic fruit glazes, and zero compromises.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                  100% Artisanal
                </span>
              </div>
            </div>

            {/* Homepages */}
            <div>
              <h5 className="font-display text-base font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-1">
                Homepages
              </h5>
              <ul className="space-y-2 font-sans text-xs uppercase tracking-wider opacity-90">
                <li><Link href="/homepages/home-01" className="hover:underline">Home 01 (Tri-Donut)</Link></li>
                <li><Link href="/homepages/home-02" className="hover:underline">Home 02 (Letter Cascade)</Link></li>
                <li><Link href="/homepages/home-03" className="hover:underline">Home 03 (Split Directory)</Link></li>
                <li><Link href="/homepages/home-04" className="hover:underline">Home 04 (Street Ticker)</Link></li>
                <li><Link href="/homepages/home-05" className="hover:underline">Home 05 (Keto & Clean)</Link></li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h5 className="font-display text-base font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-1">
                About Us
              </h5>
              <ul className="space-y-2 font-sans text-xs uppercase tracking-wider opacity-90">
                <li><Link href="/about-us/about-us-01" className="hover:underline">About 01 (Garage Bakery)</Link></li>
                <li><Link href="/about-us/about-us-02" className="hover:underline">About 02 (Artisan Sourdough)</Link></li>
                <li><Link href="/about-us/about-us-03" className="hover:underline">About 03 (Food Science Lab)</Link></li>
                <li><Link href="/about-us/about-us-04" className="hover:underline">About 04 (Heritage Diner)</Link></li>
                <li><Link href="/about-us/about-us-05" className="hover:underline">About 05 (Staff & Events)</Link></li>
              </ul>
            </div>

            {/* Contact & Subscribe */}
            <div>
              <h5 className="font-display text-base font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-1">
                Contact & Club
              </h5>
              <ul className="space-y-2 font-sans text-xs uppercase tracking-wider opacity-90">
                <li><Link href="/contact-us/contact-us-01" className="hover:underline">Store Locator (01)</Link></li>
                <li><Link href="/contact-us/contact-us-02" className="hover:underline">Concierge Catering (02)</Link></li>
                <li><Link href="/contact-us/contact-us-05" className="hover:underline">Party Wholesale (05)</Link></li>
                <li><Link href="/subscribe-save/subscribe-save-01" className="hover:underline">Drop Club (01)</Link></li>
                <li><Link href="/subscribe-save/subscribe-save-03" className="hover:underline">Donut of Month (03)</Link></li>
              </ul>
            </div>

            {/* Five Brand Websites */}
            <div>
              <h5 className="font-display text-base font-bold uppercase tracking-wider mb-4 border-b border-white/20 pb-1">
                Five Brands
              </h5>
              <ul className="space-y-2 font-sans text-xs uppercase tracking-wider opacity-90">
                <li><Link href="/brand/site-01" className="hover:underline">Site 1: SprinkleSpree</Link></li>
                <li><Link href="/brand/site-02" className="hover:underline">Site 2: Glaze & Co.</Link></li>
                <li><Link href="/brand/site-03" className="hover:underline">Site 3: PureDonut</Link></li>
                <li><Link href="/brand/site-04" className="hover:underline">Site 4: DoughBoyz</Link></li>
                <li><Link href="/brand/site-05" className="hover:underline">Site 5: The Donut Counter</Link></li>
                <li className="pt-2 border-t border-white/20">
                  <Link href="/admin/licenses" className="hover:underline text-xs">Asset Licenses</Link>
                </li>
                <li>
                  <Link href="/admin/style-guide" className="hover:underline text-xs">Design System</Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs font-sans opacity-80 gap-4">
          <p>© {new Date().getFullYear()} {brandName}. All rights reserved. Created by Sayyad Studio.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} weight="bold" />
          </button>
        </div>
      </div>
    </footer>
  );
};
