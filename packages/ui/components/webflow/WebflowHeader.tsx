'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../hooks/useCart';

export interface WebflowHeaderProps {
  activePath?: string;
  isDark?: boolean;
}

const homeLinks = [
  { text: 'Home 01', href: '/homepages/home-01' },
  { text: 'Home 02', href: '/homepages/home-02' },
  { text: 'Home 03', href: '/homepages/home-03' },
  { text: 'Home 04', href: '/homepages/home-04' },
  { text: 'Home 05', href: '/homepages/home-05' },
];

const aboutLinks = [
  { text: 'About 01', href: '/about-us/about-us-01' },
  { text: 'About 02', href: '/about-us/about-us-02' },
  { text: 'About 03', href: '/about-us/about-us-03' },
  { text: 'About 04', href: '/about-us/about-us-04' },
  { text: 'About 05', href: '/about-us/about-us-05' },
];

const contactLinks = [
  { text: 'Contact 01', href: '/contact-us/contact-us-01' },
  { text: 'Contact 02', href: '/contact-us/contact-us-02' },
  { text: 'Contact 03', href: '/contact-us/contact-us-03' },
  { text: 'Contact 04', href: '/contact-us/contact-us-04' },
  { text: 'Contact 05', href: '/contact-us/contact-us-05' },
];

const subscribeLinks = [
  { text: 'Subscribe 01', href: '/subscribe-save/subscribe-save-01' },
  { text: 'Subscribe 02', href: '/subscribe-save/subscribe-save-02' },
  { text: 'Subscribe 03', href: '/subscribe-save/subscribe-save-03' },
  { text: 'Subscribe 04', href: '/subscribe-save/subscribe-save-04' },
  { text: 'Subscribe 05', href: '/subscribe-save/subscribe-save-05' },
];

const whyLinks = [
  { text: 'Why Donutland 01', href: '/why-donutland/why-donutland-01' },
  { text: 'Why Donutland 02', href: '/why-donutland/why-donutland-02' },
  { text: 'Why Donutland 03', href: '/why-donutland/why-donutland-03' },
  { text: 'Why Donutland 04', href: '/why-donutland/why-donutland-04' },
  { text: 'Why Donutland 05', href: '/why-donutland/why-donutland-05' },
];

const cmsLinks = [
  { text: 'Product Page', href: '/product/peanut-mcrunch' },
  { text: 'Product Categories', href: '/category/special' },
  { text: 'Blog Article', href: '/blog-article/how-donutland-got-started' },
  { text: 'Blog Category', href: '/blog-category/event' },
  { text: 'All Blogs', href: '/all-blogs' },
  { text: 'All Donuts', href: '/all-donuts' },
];

export const WebflowHeader: React.FC<WebflowHeaderProps> = ({ activePath, isDark = false }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openCart = useCart((state) => state.openCart);
  const totalCount = useCart((state) => state.getTotalCount());

  const navDropdowns = [
    { id: 'home', label: 'Home', links: homeLinks },
    { id: 'about', label: 'About', links: aboutLinks },
    { id: 'contact', label: 'Contact Us', links: contactLinks },
    { id: 'subscribe', label: 'Subscribe', links: subscribeLinks },
    { id: 'why', label: 'Why Donutland', links: whyLinks },
    { id: 'cms', label: 'CMS', links: cmsLinks },
  ];

  return (
    <nav className="header-navigation" style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        role="banner"
        className="header-navigation-bar w-nav"
      >
        <div className="w-layout-grid header-navigation-grid">
          {/* Logo */}
          <Link
            href="/"
            className="company-logo-link-block w-nav-brand"
            aria-label="home"
          >
            <Image
              src="https://cdn.prod.website-files.com/6569d73055568668783bf587/65858231295addff597bd02b_small%20logo.webp"
              alt="Donutland"
              width={224}
              height={42}
              className={`brand-logo-image ${isDark ? 'filter invert brightness-0' : ''}`}
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Nav Menu */}
          <nav role="navigation" className="header-navigation-menu w-nav-menu">
            <div className="main-header-navigation-bar">
              <Link
                href="/"
                className={`header-main-index-link homepage w-nav-link ${
                  activePath === '/' ? 'w--current' : ''
                }`}
                style={{ color: isDark ? '#1b1b1b' : '#ffffff' }}
              >
                Main Index
              </Link>

              {navDropdowns.map((dd) => {
                const isOpen = openDropdown === dd.id;
                return (
                  <div
                    key={dd.id}
                    className="header-navigation-dropdown w-dropdown"
                    onMouseEnter={() => setOpenDropdown(dd.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div
                      className="header-navigation-dropdown-toggle w-dropdown-toggle"
                      role="button"
                      tabIndex={0}
                      aria-expanded={isOpen}
                      onClick={() => setOpenDropdown(isOpen ? null : dd.id)}
                      style={{ color: isDark ? '#1b1b1b' : '#ffffff', cursor: 'pointer' }}
                    >
                      <div className="chevron-icon w-icon-dropdown-toggle" aria-hidden="true" />
                      <div className="label-dropdown">{dd.label}</div>
                    </div>

                    {isOpen && (
                      <nav
                        className="dropdown-list w-dropdown-list w--open"
                        style={{
                          display: 'block',
                          opacity: 1,
                          visibility: 'visible',
                          pointerEvents: 'auto',
                        }}
                      >
                        <div className="dropdown-background" style={{ height: '100%' }} />
                        {dd.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={`dropdown-link w-dropdown-link ${
                              activePath === link.href ? 'w--current' : ''
                            }`}
                            style={{
                              opacity: 1,
                              transform: 'none',
                            }}
                          >
                            {link.text}
                          </Link>
                        ))}
                      </nav>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Mobile Menu Hamburger */}
          <div
            className="menu-button w-nav-button"
            aria-label="menu"
            role="button"
            tabIndex={0}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="mobile-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 66 66"
                width="34"
                height="34"
                className="w-full h-full"
              >
                <g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                  <path d="M5 12h56M5 33h56M5 54h56" />
                </g>
              </svg>
            </div>
          </div>

          {/* Cart Icon & Quantity Counter */}
          <div className="w-commerce-commercecartwrapper cart">
            <button
              type="button"
              className="w-commerce-commercecartopenlink cart-button w-inline-block border-none bg-transparent cursor-pointer relative"
              aria-label="Open cart"
              onClick={openCart}
            >
              <Image
                src="https://cdn.prod.website-files.com/6569d73055568668783bf587/658491a43a420892049122ba_cart-7.webp"
                alt="Cart"
                width={42}
                height={42}
                className="cart-icon"
                unoptimized
              />
              <div className="w-commerce-commercecartopenlinkcount cart-quantity">
                {totalCount}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div
            className="w-nav-overlay"
            style={{ display: 'block', height: '100vh', position: 'fixed', top: 60, left: 0, right: 0, backgroundColor: '#f54f95', padding: '24px', zIndex: 9999, overflowY: 'auto' }}
          >
            <nav className="flex flex-col gap-4 text-white">
              <Link href="/" className="text-xl font-bold py-2 border-b border-white/20" onClick={() => setMobileMenuOpen(false)}>
                Main Index
              </Link>
              {navDropdowns.map((dd) => (
                <div key={dd.id} className="py-2 border-b border-white/20">
                  <div className="text-lg font-bold uppercase tracking-wider mb-2 text-white/80">{dd.label}</div>
                  <div className="flex flex-col pl-4 gap-2">
                    {dd.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-white hover:text-black py-1 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};
