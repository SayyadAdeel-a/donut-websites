'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../../hooks/useCart';
import { getActiveBrand, BrandConfig } from '../../tokens/brands';
import { AnnouncementBar } from '../composite/AnnouncementBar';

export interface WebflowHeaderProps {
  activePath?: string;
  isDark?: boolean;
  hasHotPinkNav?: boolean;
  brandConfig?: BrandConfig | null;
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

export const WebflowHeader: React.FC<WebflowHeaderProps> = ({
  activePath,
  isDark = false,
  hasHotPinkNav,
  brandConfig,
}) => {
  const pathname = usePathname();
  const currentPath = activePath || pathname || '/';
  const brand = brandConfig !== undefined ? brandConfig : getActiveBrand();

  const isHotPink =
    hasHotPinkNav ??
    (currentPath === '/contact-us/contact-us-03' ||
      currentPath === '/contact-us/contact-us-05' ||
      currentPath === '/why-donutland/why-donutland-05');

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const openCart = useCart((state) => state.openCart);
  const totalCount = useCart((state) => state.getTotalCount());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const brandNavLinks = [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Menu', href: '/all-donuts' },
    { text: 'Subscribe', href: '/subscribe' },
    { text: 'Why Us', href: '/why' },
    { text: 'Blog', href: '/all-blogs' },
    { text: 'Contact', href: '/contact' },
  ];

  const navDropdowns = [
    { id: 'home', label: 'Home', links: homeLinks },
    { id: 'about', label: 'About', links: aboutLinks },
    { id: 'contact', label: 'Contact Us', links: contactLinks },
    { id: 'subscribe', label: 'Subscribe', links: subscribeLinks },
    { id: 'why', label: 'Why Donutland', links: whyLinks },
    { id: 'cms', label: 'CMS', links: cmsLinks },
  ];

  return (
    <div
      className="header-navigation-wrapper"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      {brand?.announcement?.enabled && (
        <AnnouncementBar announcement={brand.announcement} />
      )}
      <nav
        className="header-navigation"
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: 'transparent',
        }}
      >
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        role="banner"
        className={`header-navigation-bar ${isHotPink ? 'background-header' : ''} w-nav`}
      >
        <div className={`w-layout-grid header-navigation-grid ${isHotPink ? 'hot-pink-background' : ''}`}>
          {/* Logo */}
          {brand ? (
            <Link
              id="w-node-e246f4b1-1b28-6ce2-91bd-e65bb05b6d4e-b05b6d4b"
              href="/"
              className="company-logo-link-block w-nav-brand flex items-center no-underline"
              aria-label={brand.name}
            >
              <span
                className="brand-logo-text font-display uppercase tracking-wider text-2xl lg:text-3xl transition-colors"
                style={{
                  color: isDark && !isScrolled ? (brand.theme.textColor || '#1b1b1b') : '#ffffff',
                }}
              >
                {brand.name}
              </span>
            </Link>
          ) : (
            <Link
              id="w-node-e246f4b1-1b28-6ce2-91bd-e65bb05b6d4e-b05b6d4b"
              href="/"
              className="company-logo-link-block w-nav-brand"
              aria-label="home"
            >
              <Image
                src="https://cdn.prod.website-files.com/6569d73055568668783bf587/65858231295addff597bd02b_small%20logo.webp"
                alt="Donutland"
                width={224}
                height={42}
                className={`brand-logo-image ${isDark && !isScrolled ? 'filter invert brightness-0' : ''}`}
                priority
                unoptimized
              />
            </Link>
          )}

          {/* Desktop Nav Menu */}
          <nav
            id="w-node-e246f4b1-1b28-6ce2-91bd-e65bb05b6d50-b05b6d4b"
            role="navigation"
            className="header-navigation-menu w-nav-menu"
            style={{ gridColumn: '2 / 4' }}
          >
            <div className="main-header-navigation-bar">
              {brand ? (
                brandNavLinks.map((link) => {
                  const isActive = currentPath === link.href;
                  const textColor = isDark && !isScrolled ? (brand.theme.textColor || '#1b1b1b') : '#ffffff';
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`header-main-index-link w-nav-link ${
                        isActive ? 'w--current' : ''
                      }`}
                      style={{
                        color: textColor,
                        whiteSpace: 'nowrap',
                        fontWeight: isActive ? 700 : 500,
                      }}
                    >
                      {link.text}
                    </Link>
                  );
                })
              ) : (
                <>
                  <Link
                    href="/"
                    className={`header-main-index-link homepage w-nav-link ${
                      currentPath === '/' ? 'w--current' : ''
                    }`}
                    style={{ color: isDark && !isScrolled ? '#1b1b1b' : '#ffffff', whiteSpace: 'nowrap' }}
                  >
                    Main&nbsp;Index
                  </Link>

                  {navDropdowns.map((dd) => {
                    const isOpen = openDropdown === dd.id;
                    const textColor = isDark && !isScrolled ? '#1b1b1b' : '#ffffff';
                    return (
                      <div
                        key={dd.id}
                        className="header-navigation-dropdown w-dropdown relative"
                        onMouseEnter={() => setOpenDropdown(dd.id)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div
                          className="header-navigation-dropdown-toggle w-dropdown-toggle"
                          role="button"
                          tabIndex={0}
                          aria-expanded={isOpen}
                          onClick={() => setOpenDropdown(isOpen ? null : dd.id)}
                          style={{ color: textColor, cursor: 'pointer' }}
                        >
                          <motion.div
                            className="chevron-icon w-icon-dropdown-toggle"
                            aria-hidden="true"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          />
                          <div className="label-dropdown">{dd.label}</div>
                        </div>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.nav
                              className="dropdown-list w-dropdown-list w--open"
                              initial={{ opacity: 0, scaleY: 0.85, y: -10 }}
                              animate={{ opacity: 1, scaleY: 1, y: 0 }}
                              exit={{ opacity: 0, scaleY: 0.85, y: -10 }}
                              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                              style={{
                                display: 'block',
                                position: 'absolute',
                                transformOrigin: 'top center',
                                pointerEvents: 'auto',
                                overflow: 'hidden',
                              }}
                            >
                              <div className="dropdown-background" style={{ height: '100%' }} />
                              {dd.links.map((link, idx) => (
                                <motion.div
                                  key={link.href}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.04, duration: 0.25 }}
                                >
                                  <Link
                                    href={link.href}
                                    className={`dropdown-link w-dropdown-link ${
                                      currentPath === link.href ? 'w--current' : ''
                                    }`}
                                  >
                                    {link.text}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.nav>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </nav>


          {/* Mobile Menu Hamburger */}
          <div
            id="w-node-e246f4b1-1b28-6ce2-91bd-e65bb05b6dc0-b05b6d4b"
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
                className="w-full h-full text-white"
              >
                <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round">
                  <motion.line
                    x1="8"
                    y1="16"
                    x2="58"
                    y2="16"
                    animate={mobileMenuOpen ? { y1: 33, y2: 33, rotate: 45, transformOrigin: '33px 33px' } : { y1: 16, y2: 16, rotate: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                  <motion.line
                    x1="8"
                    y1="33"
                    x2="58"
                    y2="33"
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.line
                    x1="8"
                    y1="50"
                    x2="58"
                    y2="50"
                    animate={mobileMenuOpen ? { y1: 33, y2: 33, rotate: -45, transformOrigin: '33px 33px' } : { y1: 50, y2: 50, rotate: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Cart Icon & Quantity Counter */}
          <div
            id="w-node-e246f4b1-1b28-6ce2-91bd-e65bb05b6dc3-b05b6d4b"
            className="w-commerce-commercecartwrapper cart"
          >
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
                className="cart-icon hover:scale-105 transition-transform"
                unoptimized
              />
              <div className="w-commerce-commercecartopenlinkcount cart-quantity">
                {totalCount}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="w-nav-overlay"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{
                display: 'block',
                position: 'fixed',
                top: 60,
                left: 0,
                right: 0,
                backgroundColor: '#f54f95',
                padding: '24px',
                zIndex: 9999,
                overflowY: 'auto',
              }}
            >
              <nav className="flex flex-col gap-4 text-white">
                {brand ? (
                  brandNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-xl font-bold py-2 border-b border-white/20 hover:text-black transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  ))
                ) : (
                  <>
                    <Link
                      href="/"
                      className="text-xl font-bold py-2 border-b border-white/20"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Main Index
                    </Link>
                    {navDropdowns.map((dd) => (
                      <div key={dd.id} className="py-2 border-b border-white/20">
                        <div className="text-lg font-bold uppercase tracking-wider mb-2 text-white/80">
                          {dd.label}
                        </div>
                        <div className="flex flex-col pl-4 gap-2">
                          {dd.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="text-white hover:text-black py-1 font-medium transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </nav>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  </div>
  );
};
