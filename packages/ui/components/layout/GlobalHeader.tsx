'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, List } from '@phosphor-icons/react';
import { twMerge } from 'tailwind-merge';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useCart } from '../../hooks/useCart';
import { MegaDropdown, DropdownItem } from '../composite/MegaDropdown';
import { MobileNav, NavCategory } from '../composite/MobileNav';

export interface HeaderConfig {
  logoUrl?: string;
  brandName?: string;
  brandHref?: string;
  bgColor?: string;
  textColor?: string;
  accentColor?: string;
}

const defaultHomeItems: DropdownItem[] = [
  { label: 'Home 01 (Tri-Donut Hero)', href: '/homepages/home-01' },
  { label: 'Home 02 (Letter Cascade)', href: '/homepages/home-02' },
  { label: 'Home 03 (Split Directory)', href: '/homepages/home-03' },
  { label: 'Home 04 (Streetwear Ticker)', href: '/homepages/home-04' },
  { label: 'Home 05 (Healthy & Keto)', href: '/homepages/home-05' },
];

const defaultAboutItems: DropdownItem[] = [
  { label: 'About 01 (Streetwear Garage)', href: '/about-us/about-us-01' },
  { label: 'About 02 (Artisanal Sourdough)', href: '/about-us/about-us-02' },
  { label: 'About 03 (Clean Food Science)', href: '/about-us/about-us-03' },
  { label: 'About 04 (Heritage Diner)', href: '/about-us/about-us-04' },
  { label: 'About 05 (Team & Celebrations)', href: '/about-us/about-us-05' },
];

const defaultContactItems: DropdownItem[] = [
  { label: 'Contact 01 (Store Locator)', href: '/contact-us/contact-us-01' },
  { label: 'Contact 02 (Catering Concierge)', href: '/contact-us/contact-us-02' },
  { label: 'Contact 03 (Feedback & Franchise)', href: '/contact-us/contact-us-03' },
  { label: 'Contact 04 (Nutrition Support)', href: '/contact-us/contact-us-04' },
  { label: 'Contact 05 (Party Wholesale)', href: '/contact-us/contact-us-05' },
];

const defaultSubscribeItems: DropdownItem[] = [
  { label: 'Subscribe 01 (Drop Club)', href: '/subscribe-save/subscribe-save-01' },
  { label: 'Subscribe 02 (Chef Patisserie)', href: '/subscribe-save/subscribe-save-02' },
  { label: 'Subscribe 03 (Donut of the Month)', href: '/subscribe-save/subscribe-save-03' },
  { label: 'Subscribe 04 (Fitness Box)', href: '/subscribe-save/subscribe-save-04' },
  { label: 'Subscribe 05 (Commuter Coffee)', href: '/subscribe-save/subscribe-save-05' },
];

const defaultWhyItems: DropdownItem[] = [
  { label: 'Why 01 (Flour Comparison)', href: '/why-donutland/why-donutland-01' },
  { label: 'Why 02 (Slow Fermentation)', href: '/why-donutland/why-donutland-02' },
  { label: 'Why 03 (Street Manifesto)', href: '/why-donutland/why-donutland-03' },
  { label: 'Why 04 (Local Dairy Heritage)', href: '/why-donutland/why-donutland-04' },
  { label: 'Why 05 (Flavor Preference Quiz)', href: '/why-donutland/why-donutland-05' },
];

const defaultCmsItems: DropdownItem[] = [
  { label: 'All Donuts Catalog', href: '/all-donuts', badge: 'Shop' },
  { label: 'Featured Product', href: '/product/peanut-mcrunch' },
  { label: 'Specialty Category', href: '/category/special' },
  { label: 'All Blogs Editorial', href: '/all-blogs', badge: 'Blog' },
  { label: 'Story Article', href: '/blog-article/how-donutland-got-started' },
  { label: 'Event Category', href: '/blog-category/event' },
  { label: 'Style Guide', href: '/admin/style-guide', badge: 'Admin' },
  { label: 'Asset Licenses', href: '/admin/licenses', badge: 'Admin' },
];

const defaultBrandItems: DropdownItem[] = [
  { label: 'Site 1: SprinkleSpree (Playful)', href: '/brand/site-01', badge: 'Kids' },
  { label: 'Site 2: Glaze & Co. (Artisanal)', href: '/brand/site-02', badge: 'Gourmet' },
  { label: 'Site 3: PureDonut (Keto Lab)', href: '/brand/site-03', badge: 'Fitness' },
  { label: 'Site 4: DoughBoyz (Streetwear)', href: '/brand/site-04', badge: 'Skate' },
  { label: 'Site 5: The Donut Counter (Diner)', href: '/brand/site-05', badge: '1958' },
];

const navCategories: NavCategory[] = [
  { title: 'Five Brand Websites', items: defaultBrandItems },
  { title: 'Homepages', items: defaultHomeItems },
  { title: 'About Us', items: defaultAboutItems },
  { title: 'Contact Us', items: defaultContactItems },
  { title: 'Subscribe & Save', items: defaultSubscribeItems },
  { title: 'Why Donutland', items: defaultWhyItems },
  { title: 'CMS & Directory', items: defaultCmsItems },
];

export const GlobalHeader: React.FC<{ config?: HeaderConfig; activePath?: string }> = ({
  config,
  activePath,
}) => {
  const { isScrolled } = useScrollPosition(60);
  const openCart = useCart((state) => state.openCart);
  const totalCount = useCart((state) => state.getTotalCount());
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const brandName = config?.brandName || 'Donutland';
  const brandHref = config?.brandHref || '/';
  const logoUrl =
    config?.logoUrl ||
    'https://cdn.prod.website-files.com/6569d73055568668783bf587/65858231295addff597bd02b_small%20logo.webp';

  return (
    <>
      <header
        className={twMerge(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)] py-2 border-b-2 border-black'
            : 'bg-transparent py-4'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={brandHref}
            className="flex items-center gap-2 group transition-transform hover:scale-105"
            aria-label={`${brandName} home`}
          >
            {logoUrl.endsWith('.svg') || logoUrl.endsWith('.webp') || logoUrl.endsWith('.png') ? (
              <Image
                src={logoUrl}
                alt={brandName}
                width={160}
                height={35}
                className="h-8 md:h-10 w-auto object-contain"
                priority
                unoptimized
              />
            ) : (
              <span className="font-display text-2xl font-bold tracking-tight uppercase text-black">
                {brandName}
              </span>
            )}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              className="px-3 py-2 font-display text-sm font-bold uppercase tracking-wider text-black hover:text-[#f54f95] transition-colors"
            >
              Main Index
            </Link>

            <MegaDropdown label="Home" items={defaultHomeItems} activePath={activePath} />
            <MegaDropdown label="About" items={defaultAboutItems} activePath={activePath} />
            <MegaDropdown label="Contact" items={defaultContactItems} activePath={activePath} />
            <MegaDropdown label="Subscribe" items={defaultSubscribeItems} activePath={activePath} />
            <MegaDropdown label="Why" items={defaultWhyItems} activePath={activePath} />
            <MegaDropdown label="CMS" items={defaultCmsItems} activePath={activePath} />
            <MegaDropdown
              label="5 Brands"
              items={defaultBrandItems}
              activePath={activePath}
              className="border-l-2 border-black/10 pl-2"
            />
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              type="button"
              onClick={openCart}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#f54f95] text-white border-2 border-black shadow-[3px_3px_0_0_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer font-sans font-extrabold text-xs uppercase"
              aria-label="Open cart"
            >
              <ShoppingBag size={18} weight="bold" />
              <span className="hidden sm:inline">Cart</span>
              <span className="flex items-center justify-center min-w-[20px] h-[20px] px-1 text-[11px] rounded-full bg-[#eeae23] text-black border border-black font-extrabold">
                {totalCount}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0_0_#000000] hover:shadow-none transition-all cursor-pointer text-black"
              aria-label="Toggle navigation menu"
            >
              <List size={22} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        categories={navCategories}
      />
    </>
  );
};
