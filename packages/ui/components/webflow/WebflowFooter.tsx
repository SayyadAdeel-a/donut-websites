'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WebflowDrip } from './WebflowDrip';
import { getActiveBrand, BrandConfig } from '../../tokens/brands';

export interface WebflowFooterProps {
  bgColor?: string;
  dripColor?: string;
  variant?:
    | 'hot-pink-svg-drip'
    | 'hot-pink-wave'
    | 'red-svg-drip'
    | 'blue-wave'
    | 'purple-angled-wave'
    | 'red-background-no-drip'
    | 'peanut-wave';
  hideNewsletter?: boolean;
  brandConfig?: BrandConfig | null;
}

export const WebflowFooter: React.FC<WebflowFooterProps> = ({
  bgColor,
  dripColor = '#ffffff',
  variant = 'hot-pink-svg-drip',
  hideNewsletter,
  brandConfig,
}) => {
  const brand = brandConfig !== undefined ? brandConfig : getActiveBrand();
  const shouldHideNewsletter = hideNewsletter ?? (variant === 'peanut-wave');
  return (
    <section className={`footer ${variant === 'peanut-wave' ? 'hot-pink-wave' : variant}`} style={bgColor ? { backgroundColor: bgColor } : undefined}>
      {variant === 'hot-pink-wave' ? (
        <div className="image-wrapper wave-divider">
          <img
            src="https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb3d6b656d89a8d1e8_wave-03.webp"
            loading="lazy"
            sizes="100vw"
            srcSet="https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb3d6b656d89a8d1e8_wave-03-p-500.png 500w, https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb3d6b656d89a8d1e8_wave-03-p-800.png 800w, https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb3d6b656d89a8d1e8_wave-03-p-1080.png 1080w, https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb3d6b656d89a8d1e8_wave-03-p-1600.png 1600w, https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb3d6b656d89a8d1e8_wave-03.webp 2048w"
            alt=""
            className="content-image _100-width-height white-background"
          />
        </div>
      ) : variant === 'blue-wave' ? (
        <div className="image-wrapper wave-divider">
          <img
            src="https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb704030cde0905be7_wave-02.webp"
            loading="lazy"
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet="https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb704030cde0905be7_wave-02-p-500.png 500w, https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb704030cde0905be7_wave-02-p-800.png 800w, https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb704030cde0905be7_wave-02-p-1080.png 1080w, https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb704030cde0905be7_wave-02-p-1600.png 1600w, https://cdn.prod.website-files.com/6569d73055568668783bf587/659426bb704030cde0905be7_wave-02.webp 2048w"
            alt=""
            className="content-image _100-width-height white-background"
          />
        </div>
      ) : variant === 'purple-angled-wave' ? (
        <div className="image-wrapper wave-divider white">
          <img
            src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585bbdac725ea382cb05959_purple%20divider.webp"
            loading="eager"
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585bbdac725ea382cb05959_purple%20divider-p-500.webp 500w, https://cdn.prod.website-files.com/6569d73055568668783bf587/6585bbdac725ea382cb05959_purple%20divider-p-800.png 800w, https://cdn.prod.website-files.com/6569d73055568668783bf587/6585bbdac725ea382cb05959_purple%20divider-p-1080.png 1080w, https://cdn.prod.website-files.com/6569d73055568668783bf587/6585bbdac725ea382cb05959_purple%20divider.webp 2048w"
            alt=""
            className="content-image _100-width-height"
          />
        </div>
      ) : variant === 'peanut-wave' ? (
        <div className="image-wrapper wave-divider reversed">
          <img
            src="https://cdn.prod.website-files.com/6569d73055568668783bf587/65738bf4ba36bc4fb927681e_wave.webp"
            loading="lazy"
            sizes="(max-width: 2650px) 100vw, 2650px"
            srcSet="https://cdn.prod.website-files.com/6569d73055568668783bf587/65738bf4ba36bc4fb927681e_wave-p-500.webp 500w, https://cdn.prod.website-files.com/6569d73055568668783bf587/65738bf4ba36bc4fb927681e_wave-p-800.webp 800w, https://cdn.prod.website-files.com/6569d73055568668783bf587/65738bf4ba36bc4fb927681e_wave-p-1080.webp 1080w, https://cdn.prod.website-files.com/6569d73055568668783bf587/65738bf4ba36bc4fb927681e_wave.webp 2650w"
            alt=""
            className="content-image _100-width-height"
          />
        </div>
      ) : variant === 'red-background-no-drip' ? null : (
        <div className="image-wrapper white-background-drip-divider">
          <WebflowDrip
            fillColor={dripColor !== '#ffffff' ? dripColor : undefined}
            className={variant === 'hot-pink-svg-drip' ? 'hot-pink' : variant === 'red-svg-drip' ? 'red' : ''}
          />
        </div>
      )}

      <div className={`w-layout-blockcontainer container footer ${variant === 'hot-pink-svg-drip' ? 'hot-pink' : ''} w-container`}>
        <div className="footer-grid-wrapper">
          {!shouldHideNewsletter && (
            <div className="w-layout-grid footer-grid">
              <div id="w-node-d35bb152-d1f6-b81f-38a9-59f376088355-7608834f" className="footer-block-small">
                <div id="Footer-Contact-Form" className="footer-contact-form-container w-form">
                  <div className="footer-title">Newsletter</div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('Thank you! Your submission has been received!');
                    }}
                    className="footer-contact-form-wrapper"
                  >
                    <div className="field-input">
                      <input
                        className="footer-contact-form-input w-input"
                        maxLength={256}
                        name="Email"
                        placeholder="Enter your email"
                        type="email"
                        required
                      />
                    </div>
                    <div className="contact-form-button-wrapper">
                      <input
                        type="submit"
                        className="cta-sign-up footer-form w-button cursor-pointer"
                        value="Get Started"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {brand ? (
            <div className="w-layout-grid footer-large-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
              <div className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Explore</div>
                  <Link href="/" className="footer-link w-inline-block">
                    <div className="footer-text-block">Home</div>
                  </Link>
                  <Link href="/about" className="footer-link w-inline-block">
                    <div className="footer-text-block">About Us</div>
                  </Link>
                  <Link href="/why" className="footer-link w-inline-block">
                    <div className="footer-text-block">Why Us</div>
                  </Link>
                  <Link href="/subscribe" className="footer-link w-inline-block">
                    <div className="footer-text-block">Subscribe &amp; Save</div>
                  </Link>
                  <Link href="/contact" className="footer-link w-inline-block">
                    <div className="footer-text-block">Contact Us</div>
                  </Link>
                </div>
              </div>

              <div className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Our Menu</div>
                  <Link href="/all-donuts" className="footer-link w-inline-block">
                    <div className="footer-text-block">All Donuts</div>
                  </Link>
                  <Link href="/category/special" className="footer-link w-inline-block">
                    <div className="footer-text-block">Special Collection</div>
                  </Link>
                  <Link href="/category/glazed" className="footer-link w-inline-block">
                    <div className="footer-text-block">Glazed Collection</div>
                  </Link>
                  <Link href="/category/chocolate" className="footer-link w-inline-block">
                    <div className="footer-text-block">Chocolate Collection</div>
                  </Link>
                </div>
              </div>

              <div className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Stories &amp; News</div>
                  <Link href="/all-blogs" className="footer-link w-inline-block">
                    <div className="footer-text-block">All Stories</div>
                  </Link>
                  <Link href="/blog-article/our-top-five-best-selling-donuts" className="footer-link w-inline-block">
                    <div className="footer-text-block">Featured Article</div>
                  </Link>
                  <Link href="/blog-category/event" className="footer-link w-inline-block">
                    <div className="footer-text-block">Events &amp; Community</div>
                  </Link>
                </div>
              </div>

              <div className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Support &amp; Info</div>
                  <Link href="/contact" className="footer-link w-inline-block">
                    <div className="footer-text-block">Contact Support</div>
                  </Link>
                  <Link href="/checkout" className="footer-link w-inline-block">
                    <div className="footer-text-block">Cart &amp; Checkout</div>
                  </Link>
                  <Link href="/admin/licenses" className="footer-link w-inline-block">
                    <div className="footer-text-block">Licenses &amp; Credits</div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-layout-grid footer-large-grid">
              <div id="w-node-d35bb152-d1f6-b81f-38a9-59f376088365-7608834f" className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Homepages</div>
                  <Link href="/homepages/home-01" className="footer-link w-inline-block">
                    <div className="footer-text-block">Home 01</div>
                  </Link>
                  <Link href="/homepages/home-02" className="footer-link w-inline-block">
                    <div className="footer-text-block">Home 02</div>
                  </Link>
                  <Link href="/homepages/home-03" className="footer-link w-inline-block">
                    <div className="footer-text-block">Home 03</div>
                  </Link>
                  <Link href="/homepages/home-04" className="footer-link w-inline-block">
                    <div className="footer-text-block">Home 04</div>
                  </Link>
                  <Link href="/homepages/home-05" className="footer-link w-inline-block">
                    <div className="footer-text-block">Home 05</div>
                  </Link>
                </div>
              </div>

              <div id="w-node-d35bb152-d1f6-b81f-38a9-59f376088378-7608834f" className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">About Us</div>
                  <Link href="/about-us/about-us-01" className="footer-link w-inline-block">
                    <div className="footer-text-block">About 01</div>
                  </Link>
                  <Link href="/about-us/about-us-02" className="footer-link w-inline-block">
                    <div className="footer-text-block">About 02</div>
                  </Link>
                  <Link href="/about-us/about-us-03" className="footer-link w-inline-block">
                    <div className="footer-text-block">About 03</div>
                  </Link>
                  <Link href="/about-us/about-us-04" className="footer-link w-inline-block">
                    <div className="footer-text-block">About 04</div>
                  </Link>
                  <Link href="/about-us/about-us-05" className="footer-link w-inline-block">
                    <div className="footer-text-block">About 05</div>
                  </Link>
                </div>
              </div>

              <div id="w-node-d35bb152-d1f6-b81f-38a9-59f37608838b-7608834f" className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Subscribe</div>
                  <Link href="/subscribe-save/subscribe-save-01" className="footer-link w-inline-block">
                    <div className="footer-text-block">Subscribe 01</div>
                  </Link>
                  <Link href="/subscribe-save/subscribe-save-02" className="footer-link w-inline-block">
                    <div className="footer-text-block">Subscribe 02</div>
                  </Link>
                  <Link href="/subscribe-save/subscribe-save-03" className="footer-link w-inline-block">
                    <div className="footer-text-block">Subscribe 03</div>
                  </Link>
                  <Link href="/subscribe-save/subscribe-save-04" className="footer-link w-inline-block">
                    <div className="footer-text-block">Subscribe 04</div>
                  </Link>
                  <Link href="/subscribe-save/subscribe-save-05" className="footer-link w-inline-block">
                    <div className="footer-text-block">Subscribe 05</div>
                  </Link>
                </div>
              </div>

              <div id="w-node-d35bb152-d1f6-b81f-38a9-59f37608839e-7608834f" className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Why Donutland</div>
                  <Link href="/why-donutland/why-donutland-01" className="footer-link w-inline-block">
                    <div className="footer-text-block">Why Donutland 01</div>
                  </Link>
                  <Link href="/why-donutland/why-donutland-02" className="footer-link w-inline-block">
                    <div className="footer-text-block">Why Donutland 02</div>
                  </Link>
                  <Link href="/why-donutland/why-donutland-03" className="footer-link w-inline-block">
                    <div className="footer-text-block">Why Donutland 03</div>
                  </Link>
                  <Link href="/why-donutland/why-donutland-04" className="footer-link w-inline-block">
                    <div className="footer-text-block">Why Donutland 04</div>
                  </Link>
                  <Link href="/why-donutland/why-donutland-05" className="footer-link w-inline-block">
                    <div className="footer-text-block">Why Donutland 05</div>
                  </Link>
                </div>
              </div>

              <div className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Contact Us</div>
                  <Link href="/contact-us/contact-us-01" className="footer-link w-inline-block">
                    <div className="footer-text-block">Contact Us 01</div>
                  </Link>
                  <Link href="/contact-us/contact-us-02" className="footer-link w-inline-block">
                    <div className="footer-text-block">Contact Us 02</div>
                  </Link>
                  <Link href="/contact-us/contact-us-03" className="footer-link w-inline-block">
                    <div className="footer-text-block">Contact Us 03</div>
                  </Link>
                  <Link href="/contact-us/contact-us-04" className="footer-link w-inline-block">
                    <div className="footer-text-block">Contact Us 04</div>
                  </Link>
                  <Link href="/contact-us/contact-us-05" className="footer-link w-inline-block">
                    <div className="footer-text-block">Contact Us 05</div>
                  </Link>
                </div>
              </div>

              <div id="w-node-d35bb152-d1f6-b81f-38a9-59f3760883c4-7608834f" className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Blog</div>
                  <Link href="/blog-article/how-donutland-got-started" className="footer-link w-inline-block">
                    <div className="footer-text-block">Blog Article</div>
                  </Link>
                  <Link href="/blog-category/event" className="footer-link w-inline-block">
                    <div className="footer-text-block">Blog Category</div>
                  </Link>
                  <Link href="/all-blogs" className="footer-link w-inline-block">
                    <div className="footer-text-block">Blog Collection</div>
                  </Link>
                </div>
              </div>

              <div id="w-node-d35bb152-d1f6-b81f-38a9-59f3760883d1-7608834f" className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">CMS Misc</div>
                  <Link href="/product/peanut-mcrunch" className="footer-link w-inline-block">
                    <div className="footer-text-block">Product Page</div>
                  </Link>
                  <Link href="/category/special" className="footer-link w-inline-block">
                    <div className="footer-text-block">Product Category</div>
                  </Link>
                  <Link href="/all-donuts" className="footer-link w-inline-block">
                    <div className="footer-text-block">All Donuts</div>
                  </Link>
                </div>
              </div>

              <div id="w-node-d35bb152-d1f6-b81f-38a9-59f3760883de-7608834f" className="footer-links-wrapper">
                <div className="footer-column">
                  <div className="footer-title">Admin</div>
                  <Link href="/" className="footer-link w-inline-block">
                    <div className="footer-text-block">Main Index</div>
                  </Link>
                  <Link href="/admin/style-guide" className="footer-link w-inline-block">
                    <div className="footer-text-block">Style Guide</div>
                  </Link>
                  <Link href="/admin/licenses" className="footer-link w-inline-block">
                    <div className="footer-text-block">Licenses</div>
                  </Link>
                  <Link href="/401" className="footer-link w-inline-block">
                    <div className="footer-text-block">Password</div>
                  </Link>
                  <Link href="/404" className="footer-link w-inline-block">
                    <div className="footer-text-block">404</div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          <div className="footer-divider-large" />

          <div className="footer-bottom">
            <div className="footer-menu">
              <div className="bottom-footer-text-block">Created by Sayyad Studio</div>
            </div>
            <p className="footer-copyright-text">
              ©{new Date().getFullYear()} {brand ? brand.name : 'Donutland'}. All Rights Reserved.
            </p>
          </div>

          {brand ? (
            <Link href="/" className="footer-logo-link-block w-nav-brand flex items-center justify-center py-6 text-center no-underline">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider">
                {brand.name}
              </span>
            </Link>
          ) : (
            <Link href="/" className="footer-logo-link-block w-nav-brand">
              <Image
                src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6585821f067e154baaa0eb07_large-logo.webp"
                alt="Donutland Logo"
                width={1600}
                height={300}
                className="brand-logo-image footer w-full h-auto"
                unoptimized
              />
            </Link>
          )}

        </div>
      </div>
    </section>
  );
};
