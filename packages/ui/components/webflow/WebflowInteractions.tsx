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

        // Preserve CSS overflow (Webflow uses overflow: visible on multi-card masks like .best-sellers)
        const computedOverflow = window.getComputedStyle(mask).overflow;
        if (computedOverflow !== 'visible' && !mask.classList.contains('best-sellers')) {
          mask.style.overflow = 'hidden';
        }
        mask.style.position = 'relative';

        const updateSlides = () => {
          const firstSlide = slides[0];
          const secondSlide = slides[1];
          let stride = firstSlide ? firstSlide.offsetWidth : 0;
          if (firstSlide && secondSlide) {
            const firstRect = firstSlide.getBoundingClientRect();
            const secondRect = secondSlide.getBoundingClientRect();
            const distance = Math.abs(secondRect.left - firstRect.left);
            if (distance > 0) stride = distance;
          }
          slides.forEach((slide) => {
            slide.style.transition = 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease';
            slide.style.transform = `translateX(-${currentIndex * stride}px)`;
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
      // Product Page & FAQ Accordions
      const productAccordionItems = document.querySelectorAll<HTMLElement>(
        '.product-page-accordion-item, .faq-accordion-item, .faq-item'
      );

      productAccordionItems.forEach((item) => {
        if (item.dataset.accordionInitialized === 'true') return;
        item.dataset.accordionInitialized = 'true';

        const toggle = item.querySelector<HTMLElement>(
          '.product-page-detail-accordion-toggle, .faq-accordion-toggle, .faq-toggle, [role="button"]'
        );
        const content = item.querySelector<HTMLElement>(
          '.product-page-accordion-inner-content, .faq-accordion-content, .faq-content, .w-dropdown-list'
        );
        const chevron = item.querySelector<HTMLElement>(
          '.product-accordion-chevron-wrapper, .chevron-icon, .plus-sign-image-wrapper, .faq-arrow'
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
    // 3. TABS CONTROLLER (.w-tabs, .w-tab-link, .w-tab-pane)
    // --------------------------------------------------------------------------
    const initTabs = () => {
      const tabsContainers = document.querySelectorAll<HTMLElement>('.w-tabs');

      tabsContainers.forEach((tabs) => {
        if (tabs.dataset.tabsInitialized === 'true') return;
        tabs.dataset.tabsInitialized = 'true';

        const tabLinks = Array.from(tabs.querySelectorAll<HTMLElement>('.w-tab-link'));
        const tabContent = tabs.querySelector<HTMLElement>('.w-tab-content');
        const tabPanes = tabContent
          ? Array.from(tabContent.querySelectorAll<HTMLElement>(':scope > .w-tab-pane'))
          : Array.from(tabs.querySelectorAll<HTMLElement>('.w-tab-pane'));

        const numberWrapper =
          tabs.parentElement?.querySelector<HTMLElement>('.tab-step-number-wrapper') ||
          tabs.closest('.tabs-steps-content-container')?.querySelector<HTMLElement>('.tab-step-number-wrapper') ||
          document.querySelector<HTMLElement>('.tab-step-number-wrapper');

        if (tabLinks.length === 0 || tabPanes.length === 0) return;

        const switchTab = (targetLink: HTMLElement, index: number) => {
          const targetTabName = targetLink.getAttribute('data-w-tab') || `Tab ${index + 1}`;

          // Update tab links
          tabLinks.forEach((link) => {
            const isCurrent = link === targetLink;
            if (isCurrent) {
              link.classList.add('w--current');
              link.setAttribute('aria-selected', 'true');

              // Why Donutland 01 text reveal
              const contentText = link.querySelector<HTMLElement>('.why-donutland-tab-content-text');
              if (contentText) {
                contentText.style.display = 'flex';
                contentText.style.opacity = '1';
              }

              // Subscribe 02 arrow indicator
              const arrow = link.querySelector<HTMLElement>('.active-tab-arrow');
              if (arrow) {
                arrow.style.opacity = '1';
              }
            } else {
              link.classList.remove('w--current');
              link.setAttribute('aria-selected', 'false');

              // Why Donutland 01 text hide
              const contentText = link.querySelector<HTMLElement>('.why-donutland-tab-content-text');
              if (contentText) {
                contentText.style.display = 'none';
                contentText.style.opacity = '0';
              }

              // Subscribe 02 arrow indicator
              const arrow = link.querySelector<HTMLElement>('.active-tab-arrow');
              if (arrow) {
                arrow.style.opacity = '0';
              }
            }
          });

          // Update Subscribe 02 step number indicator if present
          if (numberWrapper) {
            const numberTexts = Array.from(numberWrapper.querySelectorAll<HTMLElement>('.tab-number-text'));
            numberTexts.forEach((numText, idx) => {
              numText.style.opacity = idx === index ? '1' : '0';
            });
          }

          // Update tab panes
          tabPanes.forEach((pane, idx) => {
            const paneTabName = pane.getAttribute('data-w-tab');
            const isTarget = paneTabName ? paneTabName === targetTabName : idx === index;

            if (isTarget) {
              pane.classList.add('w--tab-active');
              pane.style.display = 'block';
              pane.style.opacity = '0';
              requestAnimationFrame(() => {
                pane.style.opacity = '1';
              });
            } else {
              pane.classList.remove('w--tab-active');
              pane.style.display = 'none';
              pane.style.opacity = '0';
            }
          });
        };

        tabLinks.forEach((link, idx) => {
          link.style.cursor = 'pointer';
          link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(link, idx);
          });
        });

        // Set initial state
        const currentLink = tabLinks.find((l) => l.classList.contains('w--current')) || tabLinks[0];
        if (currentLink) {
          const currentIdx = tabLinks.indexOf(currentLink);
          switchTab(currentLink, currentIdx);
        }
      });
    };

    // --------------------------------------------------------------------------
    // 4. HERO ENTRANCE SEQUENCES
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

          // Floating CTA boxes & magnifying glass (Home 02)
          const ctaSection = document.querySelector<HTMLElement>('.homepage-02-subscribe-cta-boxes');
          if (ctaSection) {
            const rect = ctaSection.getBoundingClientRect();
            const winHeight = window.innerHeight;
            if (rect.top < winHeight && rect.bottom > 0) {
              const progress = (winHeight - rect.top) / (winHeight + rect.height);
              const offset = (progress - 0.5) * 60; // gentle float between -30px and +30px
              const magnifyGlass = ctaSection.querySelector<HTMLElement>('.magnify-glass-image');
              if (magnifyGlass) {
                magnifyGlass.style.transform = `translate3d(0, ${-offset * 0.8}px, 0) rotate(${offset * 0.3}deg)`;
              }
              const donutBox = ctaSection.querySelector<HTMLElement>('.pink-donut-box');
              if (donutBox) {
                donutBox.style.transform = `translate3d(0, ${offset * 0.8}px, 0)`;
              }
            }
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

    // --------------------------------------------------------------------------
    // 6. LOTTIE ANIMATIONS (.lottie-animation, data-animation-type="lottie")
    // --------------------------------------------------------------------------
    const initLottie = () => {
      const lottieElements = document.querySelectorAll<HTMLElement>(
        '[data-animation-type="lottie"], .lottie-animation'
      );
      if (lottieElements.length === 0) return;

      const renderAll = () => {
        // @ts-ignore
        const lottie = window.lottie;
        if (!lottie) return;

        lottieElements.forEach((el) => {
          if (el.dataset.lottieLoaded === 'true') return;
          const src = el.getAttribute('data-src');
          if (!src) return;

          el.dataset.lottieLoaded = 'true';
          lottie.loadAnimation({
            container: el,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: src,
          });
        });
      };

      // @ts-ignore
      if (window.lottie) {
        renderAll();
      } else {
        const existingScript = document.querySelector('script[src*="lottie-web"]');
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
          script.async = true;
          script.onload = () => {
            renderAll();
          };
          document.head.appendChild(script);
        } else {
          existingScript.addEventListener('load', renderAll);
        }
      }
    };

    // Initial setup
    initSliders();
    initAccordions();
    initTabs();
    initHeroAnimations();
    initAddToCart();
    initLottie();
    window.addEventListener('scroll', handleScrollParallax, { passive: true });

    // Also observe DOM changes for dynamically loaded routes
    const observer = new MutationObserver(() => {
      initSliders();
      initAccordions();
      initTabs();
      initHeroAnimations();
      initAddToCart();
      initLottie();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScrollParallax);
      observer.disconnect();
    };
  }, []);

  return null;
};
