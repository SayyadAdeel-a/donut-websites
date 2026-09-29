'use client';

import React, { useEffect } from 'react';
import { useCart } from '../../hooks/useCart';

/**
 * WebflowInteractions: Orchestrates all Webflow dynamic runtime behaviors:
 * 1. Sliders & Carousels (.w-slider, .w-slider-arrow-left, .w-slider-arrow-right)
 * 2. Accordions (.product-page-accordion-item, .faq-accordion-item)
 * 3. Hero Entrance Animations (3D text flips, multi-directional fly-ins)
 * 4. Scroll-linked Parallax floating elements
 */
export const WebflowInteractions: React.FC = () => {
  useEffect(() => {
    // --------------------------------------------------------------------------
    // 1. SLIDER & CAROUSEL CONTROLLER
    // --------------------------------------------------------------------------
    const initSliders = () => {
      const sliders = document.querySelectorAll<HTMLElement>('.w-slider');
      sliders.forEach((slider) => {
        // Prevent duplicate initialization
        if (slider.dataset.sliderInitialized === 'true') return;
        slider.dataset.sliderInitialized = 'true';

        const mask = slider.querySelector<HTMLElement>('.w-slider-mask');
        const slides = slider.querySelectorAll<HTMLElement>('.w-slide');
        const prevBtn = slider.querySelector<HTMLElement>('.w-slider-arrow-left');
        const nextBtn = slider.querySelector<HTMLElement>('.w-slider-arrow-right');

        if (!mask || slides.length === 0) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        // Ensure proper mask and slide styles
        mask.style.overflow = 'hidden';
        mask.style.position = 'relative';

        const updateSlides = () => {
          slides.forEach((slide) => {
            slide.style.transition = 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease';
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
          });
        };

        const handleNext = (e: Event) => {
          e.preventDefault();
          currentIndex = (currentIndex + 1) % totalSlides;
          updateSlides();
        };

        const handlePrev = (e: Event) => {
          e.preventDefault();
          currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          updateSlides();
        };

        nextBtn?.addEventListener('click', handleNext);
        prevBtn?.addEventListener('click', handlePrev);

        // Touch swipe support
        let startX = 0;
        let isTouching = false;

        mask.addEventListener(
          'touchstart',
          (e) => {
            startX = e.touches[0].clientX;
            isTouching = true;
          },
          { passive: true }
        );

        mask.addEventListener(
          'touchend',
          (e) => {
            if (!isTouching) return;
            isTouching = false;
            const diff = startX - e.changedTouches[0].clientX;
            if (diff > 40) {
              currentIndex = (currentIndex + 1) % totalSlides;
              updateSlides();
            } else if (diff < -40) {
              currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
              updateSlides();
            }
          },
          { passive: true }
        );
      });
    };

    // --------------------------------------------------------------------------
    // 2. ACCORDION CONTROLLER
    // --------------------------------------------------------------------------
    const initAccordions = () => {
      // Product Page Accordions
      const productAccordionItems = document.querySelectorAll<HTMLElement>(
        '.product-page-accordion-item, .faq-accordion-item'
      );

      productAccordionItems.forEach((item) => {
        if (item.dataset.accordionInitialized === 'true') return;
        item.dataset.accordionInitialized = 'true';

        const toggle = item.querySelector<HTMLElement>(
          '.product-page-detail-accordion-toggle, .faq-accordion-toggle, [role="button"]'
        );
        const content = item.querySelector<HTMLElement>(
          '.product-page-accordion-inner-content, .faq-accordion-content, .w-dropdown-list'
        );
        const chevron = item.querySelector<HTMLElement>(
          '.product-accordion-chevron-wrapper, .chevron-icon, .plus-sign-image-wrapper'
        );

        if (!toggle || !content) return;

        // Initialize collapsed state
        content.style.maxHeight = '0px';
        content.style.overflow = 'hidden';
        content.style.opacity = '0';
        content.style.transition = 'max-height 0.45s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.35s ease';
        content.style.display = 'block';

        if (chevron) {
          chevron.style.transition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)';
        }

        let isOpen = false;

        const handleToggle = (e: Event) => {
          e.preventDefault();
          isOpen = !isOpen;

          if (isOpen) {
            content.style.maxHeight = `${content.scrollHeight + 40}px`;
            content.style.opacity = '1';
            if (chevron) {
              chevron.style.transform = chevron.classList.contains('plus-sign-image-wrapper')
                ? 'rotate(45deg)'
                : 'rotate(180deg)';
            }
            item.classList.add('w--open');
          } else {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            if (chevron) {
              chevron.style.transform = 'none';
            }
            item.classList.remove('w--open');
          }
        };

        toggle.addEventListener('click', handleToggle);
        toggle.style.cursor = 'pointer';
      });
    };

    // --------------------------------------------------------------------------
    // 3. HERO ENTRANCE SEQUENCES
    // --------------------------------------------------------------------------
    const initHeroAnimations = () => {
      // Home 01 Hero Animation
      const hero01 = document.querySelector<HTMLElement>('.homepage-hero-01');
      if (hero01 && hero01.dataset.animPlayed !== 'true') {
        hero01.dataset.animPlayed = 'true';

        const words = hero01.querySelectorAll<HTMLElement>('.h1-heading.homepage-hero-01');
        words.forEach((word, idx) => {
          word.style.transform = 'perspective(800px) rotateX(-90deg) translate3d(0, 160px, 0)';
          word.style.opacity = '0';
          word.style.transition = 'none';

          setTimeout(() => {
            word.style.transition = 'transform 0.85s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.5s ease';
            word.style.transform = 'perspective(800px) rotateX(0deg) translate3d(0, 0, 0)';
            word.style.opacity = '1';
          }, 100 + idx * 180);
        });

        const donut01 = hero01.querySelector<HTMLElement>('.homepage-hero-01-donut-01');
        const donut02 = hero01.querySelector<HTMLElement>('.homepage-hero-01-donut-02');
        const donut03 = hero01.querySelector<HTMLElement>('.homepage-hero-01-donut-03');

        if (donut01) {
          donut01.style.transform = 'translate3d(400px, -150px, 0)';
          donut01.style.transition = 'none';
          setTimeout(() => {
            donut01.style.transition = 'transform 0.9s cubic-bezier(0.215, 0.61, 0.355, 1)';
            donut01.style.transform = 'translate3d(0, 0, 0)';
          }, 150);
        }

        if (donut02) {
          donut02.style.transform = 'translate3d(-150px, -400px, 0)';
          donut02.style.transition = 'none';
          setTimeout(() => {
            donut02.style.transition = 'transform 0.9s cubic-bezier(0.215, 0.61, 0.355, 1)';
            donut02.style.transform = 'translate3d(0, 0, 0)';
          }, 250);
        }

        if (donut03) {
          donut03.style.transform = 'translate3d(-150px, 400px, 0)';
          donut03.style.transition = 'none';
          setTimeout(() => {
            donut03.style.transition = 'transform 0.9s cubic-bezier(0.215, 0.61, 0.355, 1)';
            donut03.style.transform = 'translate3d(0, 0, 0)';
          }, 350);
        }

        const subText = hero01.querySelector<HTMLElement>('.homepage-hero-sub-paragraph');
        if (subText) {
          subText.style.opacity = '0';
          subText.style.transform = 'translate3d(0, 40px, 0)';
          setTimeout(() => {
            subText.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            subText.style.opacity = '1';
            subText.style.transform = 'translate3d(0, 0, 0)';
          }, 600);
        }
      }

      // Home 04 Hero Animation (Skate / Streetwear Slam)
      const hero04 = document.querySelector<HTMLElement>('.homepage-hero-04');
      if (hero04 && hero04.dataset.animPlayed !== 'true') {
        hero04.dataset.animPlayed = 'true';
        const fingerDonut = hero04.querySelector<HTMLElement>('.finger-donut, .content-image._100-width-height');
        if (fingerDonut) {
          fingerDonut.style.transform = 'translate3d(0, 200px, 0) rotate(15deg)';
          fingerDonut.style.opacity = '0';
          setTimeout(() => {
            fingerDonut.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s ease';
            fingerDonut.style.transform = 'translate3d(0, 0, 0) rotate(0deg)';
            fingerDonut.style.opacity = '1';
          }, 150);
        }
      }

      // Home 05 Hero Animation (Scale pop-in)
      const hero05 = document.querySelector<HTMLElement>('.container.homepage-05-hero');
      if (hero05 && hero05.dataset.animPlayed !== 'true') {
        hero05.dataset.animPlayed = 'true';
        hero05.style.transform = 'scale(0.85)';
        hero05.style.opacity = '0';
        setTimeout(() => {
          hero05.style.transition = 'transform 0.75s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease';
          hero05.style.transform = 'scale(1)';
          hero05.style.opacity = '1';
        }, 100);
      }
    };

    // --------------------------------------------------------------------------
    // 4. SCROLL PARALLAX FLOATING ELEMENTS
    // --------------------------------------------------------------------------
    let ticking = false;
    const handleScrollParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Parallax floating candies and background items
          const floatItems = document.querySelectorAll<HTMLElement>('.homepage-01-intro-float');
          floatItems.forEach((item, idx) => {
            const factor = idx % 2 === 0 ? 0.12 : -0.12;
            const rotateFactor = idx % 2 === 0 ? 0.08 : -0.08;
            item.style.transform = `translate3d(0, ${scrollY * factor}px, 0) rotate(${scrollY * rotateFactor}deg)`;
          });

          // Floating CTA boxes & magnifying glass (Home 02)
          const magnifyGlass = document.querySelector<HTMLElement>('.magnify-glass-image');
          if (magnifyGlass) {
            magnifyGlass.style.transform = `rotate(${Math.min(45, scrollY * 0.05)}deg)`;
          }

          const donutBox = document.querySelector<HTMLElement>('.pink-donut-box');
          if (donutBox) {
            donutBox.style.transform = `translate3d(0, ${scrollY * 0.08}px, 0)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // --------------------------------------------------------------------------
    // 5. ADD TO CART INTERACTION
    // --------------------------------------------------------------------------
    const initAddToCart = () => {
      const addBtns = document.querySelectorAll<HTMLElement>('.w-commerce-commerceaddtocartbutton');
      addBtns.forEach((btn) => {
        if (btn.dataset.cartBound === 'true') return;
        btn.dataset.cartBound = 'true';

        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const title = document.querySelector('.product-page-title, h1, .h1-heading')?.textContent?.trim() || 'Delicious Donut';
          const priceText = document.querySelector('.product-page-price, .product-slider-price, [data-wf-sku-bindings*="price"]')?.textContent?.replace(/[^0-9.]/g, '') || '12.00';
          const price = parseFloat(priceText) || 12.0;
          const img = document.querySelector<HTMLImageElement>('.product-page-main-image img, .homepage-slider-product-image img, .image-wrapper img');
          const imgSrc = img?.src || 'https://cdn.prod.website-files.com/656a2e8a88537d8c45eeab81/6576291cb630e6e7fb45b8ae_product-image-94.webp';

          useCart.getState().addItem({
            id: window.location.pathname.split('/').pop() || 'product',
            slug: window.location.pathname.split('/').pop() || 'product',
            name: title,
            price: price,
            boxSize: 6,
            image: imgSrc,
            quantity: 1,
          });
        });
      });
    };

    // Initial setup
    initSliders();
    initAccordions();
    initHeroAnimations();
    initAddToCart();
    window.addEventListener('scroll', handleScrollParallax, { passive: true });

    // Also observe DOM changes for dynamically loaded routes
    const observer = new MutationObserver(() => {
      initSliders();
      initAccordions();
      initHeroAnimations();
      initAddToCart();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScrollParallax);
      observer.disconnect();
    };
  }, []);

  return null;
};
