import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkle, Storefront, Palette, ShieldCheck, Heart } from '@phosphor-icons/react/dist/ssr';
import { GlobalHeader, GlobalFooter, DripDivider, TestimonialMarquee, Button } from '@donutland/ui';
import { products } from '../content/products';

export default function MainPage() {
  const brandProfiles = [
    {
      id: 'site-01',
      name: 'SprinkleSpree',
      tagline: 'Kids & Party Fun World',
      pages: 'Home 01 + About 05 + Contact 05 + Subscribe 03 + Why 05',
      color: '#f54f95',
      badge: 'Site 1',
      desc: 'High-energy 3D flying donuts, rainbow confetti, and party celebration boxes.',
    },
    {
      id: 'site-02',
      name: 'Glaze & Co.',
      tagline: 'Artisanal Gourmet Patisserie',
      pages: 'Home 02 + About 02 + Contact 02 + Subscribe 02 + Why 02',
      color: '#6e2f10',
      badge: 'Site 2',
      desc: '48-hour sourdough brioche, cascading typography reveal, and single-origin chocolate.',
    },
    {
      id: 'site-03',
      name: 'PureDonut',
      tagline: 'Keto, Vegan & Fitness Lab',
      pages: 'Home 05 + About 03 + Contact 04 + Subscribe 04 + Why 01',
      color: '#1ac500',
      badge: 'Site 3',
      desc: '2g Net Carbs, zero sugar, California almond flour, and macro nutrition tables.',
    },
    {
      id: 'site-04',
      name: 'DoughBoyz',
      tagline: 'Urban Streetwear & Skate Bar',
      pages: 'Home 04 + About 01 + Contact 01 + Subscribe 01 + Why 03',
      color: '#f21d33',
      badge: 'Site 4',
      desc: 'Angled fly-in tilt (-32deg), marquee tickers, midnight drops, and neo-brutalist shadows.',
    },
    {
      id: 'site-05',
      name: 'The Donut Counter',
      tagline: '1950s Americana Diner',
      pages: 'Home 03 + About 04 + Contact 03 + Subscribe 05 + Why 04',
      color: '#3b89ff',
      badge: 'Site 5',
      desc: 'Buttermilk crullers, hot filter coffee, heritage recipes, and roadside diner comfort.',
    },
  ];

  const variationSections = [
    {
      title: 'Homepage Variations (5)',
      description: '5 completely distinct landing page archetypes with bespoke heroes.',
      items: [
        { label: 'Home 01 — Tri-Donut & Sprinkle Storm', href: '/homepages/home-01', img: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
        { label: 'Home 02 — Letter Cascade & Sourdough', href: '/homepages/home-02', img: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
        { label: 'Home 03 — Split Hero & Category Slider', href: '/homepages/home-03', img: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf8e807ceb0ff1741c_donutland.webflow.io_homepages_home-04.webp' },
        { label: 'Home 04 — Streetwear Neo-Brutalist', href: '/homepages/home-04', img: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
        { label: 'Home 05 — Clean Health & Keto Lab', href: '/homepages/home-05', img: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
      ],
    },
    {
      title: 'About Us Variations (5)',
      description: 'Unique brand origin narratives from garage bakeries to scientific food labs.',
      items: [
        { label: 'About 01 — Underground Garage Origins', href: '/about-us/about-us-01' },
        { label: 'About 02 — Artisanal 48h Ferment & Cacao', href: '/about-us/about-us-02' },
        { label: 'About 03 — Food Science Lab & Certs', href: '/about-us/about-us-03' },
        { label: 'About 04 — 1958 Heritage Americana Diner', href: '/about-us/about-us-04' },
        { label: 'About 05 — Master Bakers & Events', href: '/about-us/about-us-05' },
      ],
    },
    {
      title: 'Contact Us Variations (5)',
      description: 'Catering, franchise inquiries, nutrition support, and party forms.',
      items: [
        { label: 'Contact 01 — Food Truck & Store Locator', href: '/contact-us/contact-us-01' },
        { label: 'Contact 02 — Luxury Catering Concierge', href: '/contact-us/contact-us-02' },
        { label: 'Contact 03 — Franchise & Feedback Routing', href: '/contact-us/contact-us-03' },
        { label: 'Contact 04 — Nutrition & Allergen FAQ Form', href: '/contact-us/contact-us-04' },
        { label: 'Contact 05 — Party Wholesale Orders', href: '/contact-us/contact-us-05' },
      ],
    },
    {
      title: 'Subscribe & Save Variations (5)',
      description: 'Recurring box delivery flows, unboxings, and loyalty club tiers.',
      items: [
        { label: 'Subscribe 01 — Limited Midnight Drop Club', href: '/subscribe-save/subscribe-save-01' },
        { label: 'Subscribe 02 — Chef Patisserie Seasonal Box', href: '/subscribe-save/subscribe-save-02' },
        { label: 'Subscribe 03 — Donut of Month Family Box', href: '/subscribe-save/subscribe-save-03' },
        { label: 'Subscribe 04 — Weekly Fitness Macro Box', href: '/subscribe-save/subscribe-save-04' },
        { label: 'Subscribe 05 — Commuter Coffee & Cruller', href: '/subscribe-save/subscribe-save-05' },
      ],
    },
    {
      title: 'Why Donutland Variations (5)',
      description: 'Ingredient comparisons, fermentation science, manifestos, and quizzes.',
      items: [
        { label: 'Why 01 — Scientific Ingredient Matrix', href: '/why-donutland/why-donutland-01' },
        { label: 'Why 02 — Slow Ferment vs Flash Fry', href: '/why-donutland/why-donutland-02' },
        { label: 'Why 03 — Street Culture Anti-Corporate', href: '/why-donutland/why-donutland-03' },
        { label: 'Why 04 — Local Farm Dairy Lineage', href: '/why-donutland/why-donutland-04' },
        { label: 'Why 05 — Donut Preference Quiz & Stats', href: '/why-donutland/why-donutland-05' },
      ],
    },
  ];

  const testimonials = [
    { id: '1', name: 'Sophie Miller', role: 'Birthday Planner', comment: 'The tri-donut party box made my daughters 7th birthday unforgettable! Soft, fluffy, and covered in real fruit glaze.', rating: 5 },
    { id: '2', name: 'Chef Julien Blanc', role: 'Michelin Pastry Chef', comment: 'The 48-hour sourdough brioche hydration is exceptional. Unquestionably the best artisanal donut in modern dining.', rating: 5 },
    { id: '3', name: 'Marcus Chen', role: 'CrossFit Athlete', comment: 'Finally a keto donut that does not taste like chalk. 15g of protein and only 2g net carbs is unreal.', rating: 5 },
    { id: '4', name: 'Leo Vance', role: 'Skate Collective', comment: 'Midnight drops with street gear. DoughBoyz brings that authentic raw skate energy to baking.', rating: 5 },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white">
      <GlobalHeader activePath="/" />

      {/* Hero Section */}
      <section className="relative w-full bg-[#f54f95] text-white pt-32 md:pt-40 pb-0 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 text-center pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_0_#000000] mb-6">
            <Sparkle size={16} weight="fill" className="text-[#eeae23]" />
            <span>Complete Reverse-Engineered Platform</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-9xl font-bold uppercase tracking-tight text-white mb-6 drop-shadow-md">
            Meet Donutland.
          </h1>

          <p className="font-sans text-base md:text-xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            A unique, modern, and stylish platform designed for donut shops, pastry enterprises, and 5 distinct commercial bakery brands. Rebuilt with Next.js 15, Tailwind CSS v4, Motion, and Phosphor Icons.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
            <div className="p-6 rounded-[20px] bg-white text-black border-2 border-black shadow-[4px_4px_0_0_#000000]">
              <span className="font-display text-4xl md:text-5xl font-extrabold text-[#f54f95] block mb-1">
                33+
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-700">
                Static Page Layouts
              </span>
            </div>

            <div className="p-6 rounded-[20px] bg-white text-black border-2 border-black shadow-[4px_4px_0_0_#000000]">
              <span className="font-display text-4xl md:text-5xl font-extrabold text-[#eeae23] block mb-1">
                5
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-700">
                Commercial Brand Websites
              </span>
            </div>

            <div className="p-6 rounded-[20px] bg-white text-black border-2 border-black shadow-[4px_4px_0_0_#000000]">
              <span className="font-display text-4xl md:text-5xl font-extrabold text-[#3b89ff] block mb-1">
                50+
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-gray-700">
                Bespoke Section Modules
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#five-brands">
              <Button variant="white-pink" size="lg" rounded="full" className="flex items-center gap-2">
                <span>Explore 5 Brand Sites</span>
                <ArrowRight size={18} weight="bold" />
              </Button>
            </Link>
            <Link href="/all-donuts">
              <Button variant="yellow" size="lg" rounded="full">
                Browse Shop Menu
              </Button>
            </Link>
          </div>
        </div>

        <DripDivider color="#ffffff" />
      </section>

      {/* 5 Multi-Brand Showcase Section */}
      <section id="five-brands" className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto scroll-mt-24">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#eeae23] text-black font-sans font-bold text-xs uppercase tracking-wider border border-black mb-3">
            Multi-Brand Architecture
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black mb-4">
            Five Commercial Brands
          </h2>
          <p className="font-sans text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Configured from the 25 variations into 5 distinct commercial identities without visual repetition or styling leaks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandProfiles.map((brand) => (
            <div
              key={brand.id}
              className="rounded-[28px] border-2 border-black p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 shadow-[6px_6px_0_0_#000000]"
              style={{ backgroundColor: `${brand.color}10` }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-white font-sans font-bold text-xs uppercase tracking-wider"
                    style={{ backgroundColor: brand.color }}
                  >
                    {brand.badge}
                  </span>
                  <span className="font-sans text-xs font-bold text-gray-500 uppercase">
                    Configured Brand
                  </span>
                </div>

                <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-black mb-1">
                  {brand.name}
                </h3>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-gray-600 mb-4">
                  {brand.tagline}
                </h4>

                <p className="font-sans text-sm text-gray-700 leading-relaxed mb-6">
                  {brand.desc}
                </p>

                <div className="p-3 rounded-[12px] bg-white border border-black/10 text-[11px] font-mono text-gray-600 mb-6">
                  {brand.pages}
                </div>
              </div>

              <Link href={`/brand/${brand.id}`} className="block">
                <Button
                  size="md"
                  rounded="full"
                  className="w-full flex items-center justify-center gap-2 text-white"
                  style={{ backgroundColor: brand.color }}
                >
                  <span>Launch {brand.name}</span>
                  <ArrowRight size={16} weight="bold" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Ribbon */}
      <TestimonialMarquee testimonials={testimonials} bgColor="#eeae23" />

      {/* Complete Template Variation Inventory */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black mb-4">
            Master Variation Directory
          </h2>
          <p className="font-sans text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            All 25 core page variations available for direct inspection matching the original Webflow template topology.
          </p>
        </div>

        <div className="space-y-16">
          {variationSections.map((sec, i) => (
            <div key={i} className="rounded-[28px] border-2 border-black p-8 bg-[#fafafa] shadow-[6px_6px_0_0_#000000]">
              <div className="mb-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-2">
                  {sec.title}
                </h3>
                <p className="font-sans text-sm text-gray-600">{sec.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sec.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-[16px] bg-white border-2 border-black hover:bg-[#ffdede] hover:border-[#f54f95] transition-all duration-150 group shadow-[2px_2px_0_0_#000000]"
                  >
                    <span className="font-display text-sm font-bold uppercase tracking-wide text-black group-hover:text-[#f54f95]">
                      {item.label}
                    </span>
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="text-black group-hover:translate-x-1 group-hover:text-[#f54f95] transition-transform"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop & CMS Modules */}
      <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto border-t-2 border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[20px] bg-white border-2 border-black shadow-[4px_4px_0_0_#000000]">
            <Storefront size={32} weight="bold" className="text-[#f54f95] mb-3" />
            <h4 className="font-display text-xl font-bold uppercase tracking-tight text-black mb-2">
              E-Commerce Shop Engine
            </h4>
            <p className="font-sans text-xs text-gray-600 mb-4 leading-relaxed">
              Complete catalog with box options (1, 2, 4), nutrition macros, star reviews, and Zustand headless slide-over cart.
            </p>
            <Link href="/all-donuts" className="font-sans text-xs font-bold uppercase text-[#f54f95] hover:underline flex items-center gap-1">
              <span>View All 10 Donuts</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="p-6 rounded-[20px] bg-white border-2 border-black shadow-[4px_4px_0_0_#000000]">
            <Palette size={32} weight="bold" className="text-[#eeae23] mb-3" />
            <h4 className="font-display text-xl font-bold uppercase tracking-tight text-black mb-2">
              Living Style Guide
            </h4>
            <p className="font-sans text-xs text-gray-600 mb-4 leading-relaxed">
              Inspect all atomic buttons, sticker badges, color variables, typography scales, and drip divider variations.
            </p>
            <Link href="/admin/style-guide" className="font-sans text-xs font-bold uppercase text-[#eeae23] hover:underline flex items-center gap-1">
              <span>Open Style Guide</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>

          <div className="p-6 rounded-[20px] bg-white border-2 border-black shadow-[4px_4px_0_0_#000000]">
            <ShieldCheck size={32} weight="bold" className="text-[#3b89ff] mb-3" />
            <h4 className="font-display text-xl font-bold uppercase tracking-tight text-black mb-2">
              Asset Licenses & Registry
            </h4>
            <p className="font-sans text-xs text-gray-600 mb-4 leading-relaxed">
              Full audit of OFL Google fonts, Phosphor icons, stock photography tiers, and commercial reuse boundaries.
            </p>
            <Link href="/admin/licenses" className="font-sans text-xs font-bold uppercase text-[#3b89ff] hover:underline flex items-center gap-1">
              <span>View Licenses</span>
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      <GlobalFooter />
    </div>
  );
}
