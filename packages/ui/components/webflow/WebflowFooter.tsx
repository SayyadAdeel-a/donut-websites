'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WebflowDrip } from './WebflowDrip';

export const WebflowFooter: React.FC<{
  bgColor?: string;
  dripColor?: string;
}> = ({ bgColor = '#f54f95', dripColor = '#ffffff' }) => {
  return (
    <section className="footer hot-pink-svg-drip" style={{ backgroundColor: bgColor }}>
      <div className="image-wrapper white-background-drip-divider">
        <WebflowDrip fillColor={dripColor} />
      </div>

      <div className="w-layout-blockcontainer container footer hot-pink w-container">
        <div className="footer-grid-wrapper">
          <div className="w-layout-grid footer-grid">
            <div className="footer-block-small">
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

          <div className="w-layout-grid footer-large-grid">
            <div className="footer-links-wrapper">
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

            <div className="footer-links-wrapper">
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

            <div className="footer-links-wrapper">
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

            <div className="footer-links-wrapper">
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

            <div className="footer-links-wrapper">
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

            <div className="footer-links-wrapper">
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

            <div className="footer-links-wrapper">
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

          <div className="footer-divider-large" />

          <div className="footer-bottom">
            <div className="footer-menu">
              <div className="bottom-footer-text-block">
                Powered by{' '}
                <a href="https://webflow.com" target="_blank" rel="noreferrer" className="text-link webflow">
                  Webflow
                </a>
              </div>
              <div className="bottom-footer-text-block">
                {' '}
                Created by{' '}
                <a href="https://www.silvstudio.com" target="_blank" rel="noreferrer" className="text-link-block zorro-design-website-link">
                  Silv Studio
                </a>
              </div>
            </div>
            <p className="footer-copyright-text">©2023 Donutland. All Rights Reserved.</p>
          </div>

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
        </div>
      </div>
    </section>
  );
};
