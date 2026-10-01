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
    // 4. SCROLL PARALLAX & CONTINUOUS SCROLL-LINKED SCRUBBING ENGINE
    // --------------------------------------------------------------------------
    let ticking = false;
    const handleScrollParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const winHeight = window.innerHeight;
          const maxDocScroll = Math.max(1, document.documentElement.scrollHeight - winHeight);
          const docProgress = scrollY / maxDocScroll;

          // 1. Home 01 Sprinkles Parallax (IX2 a-14: 0% to 16% doc scroll -> 0px to 256px)
          const sprinkles = document.querySelector<HTMLElement>('.hero-sprinkles-background, [data-w-id*="0bd21076"]');
          if (sprinkles) {
            const p = Math.min(1, Math.max(0, docProgress / 0.16));
            const y = p * 256;
            sprinkles.style.transform = `translate3d(0px, ${y.toFixed(2)}px, 0px)`;
          }

          // 2. Home 01 Hand Holding Donut (IX2 a-21: 31% to 81% section progress -> -202px to 0px, 0deg to 26deg)
          const hand01 = document.querySelector<HTMLElement>('.hand-holding-donut-images-container');
          if (hand01) {
            const section = hand01.closest('section') || hand01.closest('.section') || hand01.parentElement;
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top < winHeight && rect.bottom > 0) {
                const sectionProgress = Math.min(1, Math.max(0, (winHeight - rect.top) / (winHeight + rect.height)));
                let p = 0;
                if (sectionProgress <= 0.31) p = 0;
                else if (sectionProgress >= 0.81) p = 1;
                else p = (sectionProgress - 0.31) / (0.81 - 0.31);

                const x = -202 * (1 - p);
                const rotate = 26 * p;
                hand01.style.transform = `translate3d(${x.toFixed(2)}px, 0px, 0px) rotate(${rotate.toFixed(2)}deg)`;
              } else if (rect.top >= winHeight) {
                hand01.style.transform = `translate3d(-202px, 0px, 0px) rotate(0deg)`;
              } else if (rect.bottom <= 0) {
                hand01.style.transform = `translate3d(0px, 0px, 0px) rotate(26deg)`;
              }
            }
          }

          // 3. Home 02 Hand Holding Donut (IX2 a-136: 0% to 49% section progress -> -202px to 0px, 0deg to 26deg)
          const hand02 = document.querySelector<HTMLElement>('.image-wrapper.hand-holding-donut-image._02');
          if (hand02) {
            const section = hand02.closest('section') || hand02.closest('.section') || hand02.parentElement;
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top < winHeight && rect.bottom > 0) {
                const sectionProgress = Math.min(1, Math.max(0, (winHeight - rect.top) / (winHeight + rect.height)));
                const p = Math.min(1, Math.max(0, sectionProgress / 0.49));
                const x = -202 * (1 - p);
                const rotate = 26 * p;
                hand02.style.transform = `translate3d(${x.toFixed(2)}px, 0px, 0px) rotate(${rotate.toFixed(2)}deg)`;
              } else if (rect.top >= winHeight) {
                hand02.style.transform = `translate3d(-202px, 0px, 0px) rotate(0deg)`;
              } else if (rect.bottom <= 0) {
                hand02.style.transform = `translate3d(0px, 0px, 0px) rotate(26deg)`;
              }
            }
          }

          // 4. Home 03 Review Donuts (IX2 a-143: 0% to 41% section progress -> -317px/317px to 0px)
          const reviewDonut01 = document.querySelector<HTMLElement>('.review-donut-01 img, [data-w-id*="cebd1a3e"]');
          const reviewDonut02 = document.querySelector<HTMLElement>('.review-donut-02 img, [data-w-id*="3688c1a3"]');
          if (reviewDonut01 || reviewDonut02) {
            const section = reviewDonut01?.closest('section') || reviewDonut02?.closest('section');
            if (section) {
              const rect = section.getBoundingClientRect();
              if (rect.top < winHeight && rect.bottom > 0) {
                const sectionProgress = Math.min(1, Math.max(0, (winHeight - rect.top) / (winHeight + rect.height)));
                const p = Math.min(1, Math.max(0, sectionProgress / 0.41));
                const leftX = -317 * (1 - p);
                const rightX = 317 * (1 - p);
                if (reviewDonut01) {
                  reviewDonut01.style.transform = `translate3d(${leftX.toFixed(2)}px, 0px, 0px)`;
                }
                if (reviewDonut02) {
                  reviewDonut02.style.transform = `translate3d(${rightX.toFixed(2)}px, 0px, 0px)`;
                }
              } else if (rect.top >= winHeight) {
                if (reviewDonut01) reviewDonut01.style.transform = `translate3d(-317px, 0px, 0px)`;
                if (reviewDonut02) reviewDonut02.style.transform = `translate3d(317px, 0px, 0px)`;
              } else if (rect.bottom <= 0) {
                if (reviewDonut01) reviewDonut01.style.transform = `translate3d(0px, 0px, 0px)`;
                if (reviewDonut02) reviewDonut02.style.transform = `translate3d(0px, 0px, 0px)`;
              }
            }
          }

          // 5. About Us 05 Customers Photo Strips (IX2 a-95: 0% to 100% -> top: -2% to 5%, bottom: 2% to -5%)
          const multiContainer = document.querySelector<HTMLElement>('.scroll-multi-image-content-container, [data-w-id*="93593344"]');
          if (multiContainer) {
            const section = multiContainer.closest('section') || multiContainer.parentElement;
            if (section) {
              const rect = section.getBoundingClientRect();
              const topRow = multiContainer.querySelector<HTMLElement>('.scroll-multi-image-content-wrapper.top');
              const botRow = multiContainer.querySelector<HTMLElement>('.scroll-multi-image-content-wrapper.bottom');
              if (rect.top < winHeight && rect.bottom > 0) {
                const sectionProgress = Math.min(1, Math.max(0, (winHeight - rect.top) / (winHeight + rect.height)));
                const topX = -2 + (7 * sectionProgress);
                const botX = 2 - (7 * sectionProgress);
                if (topRow) {
                  topRow.style.transform = `translate3d(${topX.toFixed(2)}%, 0px, 0px)`;
                }
                if (botRow) {
                  botRow.style.transform = `translate3d(${botX.toFixed(2)}%, 0px, 0px)`;
                }
              } else if (rect.top >= winHeight) {
                if (topRow) topRow.style.transform = `translate3d(-2%, 0px, 0px)`;
                if (botRow) botRow.style.transform = `translate3d(2%, 0px, 0px)`;
              } else if (rect.bottom <= 0) {
                if (topRow) topRow.style.transform = `translate3d(5%, 0px, 0px)`;
                if (botRow) botRow.style.transform = `translate3d(-5%, 0px, 0px)`;
              }
            }
          }

          // 6. Banner Background Image Parallax (IX2 a-91: 0% to 100% -> y: -10% to 10%)
          const bannerBg = document.querySelector<HTMLElement>('.scroll-background-image');
          if (bannerBg) {
            const bannerContent = bannerBg.closest('.banner-wrapper-content') || bannerBg.parentElement;
            if (bannerContent) {
              const rect = bannerContent.getBoundingClientRect();
              if (rect.top < winHeight && rect.bottom > 0) {
                const sectionProgress = Math.min(1, Math.max(0, (winHeight - rect.top) / (winHeight + rect.height)));
                const y = -10 + (20 * sectionProgress);
                bannerBg.style.transform = `translate3d(0px, ${y.toFixed(2)}%, 0px)`;
              } else if (rect.top >= winHeight) {
                bannerBg.style.transform = `translate3d(0px, -10%, 0px)`;
              } else if (rect.bottom <= 0) {
                bannerBg.style.transform = `translate3d(0px, 10%, 0px)`;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // --------------------------------------------------------------------------
    // 5. SCROLL-INTO-VIEW SECTION REVEALS (IX2 a-137, a-138, a-141)
    // --------------------------------------------------------------------------
    const initScrollReveals = () => {
      // Home 02 About Us Intro (IX2 a-137)
      const about02Section = document.querySelector<HTMLElement>('.homepage-02-about-us, [data-w-id*="938e6f38"]');
      if (about02Section && about02Section.dataset.revealBound !== 'true') {
        about02Section.dataset.revealBound = 'true';
        const img = about02Section.querySelector<HTMLElement>('.content-image._100-width-height');
        if (img) {
          img.style.transform = 'translate3d(0, 700px, 0)';
          img.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                img.style.transform = 'translate3d(0, 0, 0)';
                observer.disconnect();
              }
            },
            { threshold: 0.15 }
          );
          observer.observe(about02Section);
        }
      }

      // Home 02 Review Intro (IX2 a-138)
      const review02Section = document.querySelector<HTMLElement>('.homepage-02-reviews, [data-w-id*="e9a0b7df"]');
      if (review02Section && review02Section.dataset.revealBound !== 'true') {
        review02Section.dataset.revealBound = 'true';
        const img = review02Section.querySelector<HTMLElement>('.content-image._100-width-height.review-box-main-image-01');
        const container = review02Section.querySelector<HTMLElement>('.review-rectangle-boxes-container');
        if (img) {
          img.style.transform = 'translate3d(0, 401px, 0)';
          img.style.opacity = '0';
          img.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease';
        }
        if (container) {
          container.style.opacity = '0';
          container.style.transition = 'opacity 1.1s ease 0.3s';
        }
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              if (img) {
                img.style.transform = 'translate3d(0, 0, 0)';
                img.style.opacity = '1';
              }
              if (container) {
                container.style.opacity = '1';
              }
              observer.disconnect();
            }
          },
          { threshold: 0.15 }
        );
        observer.observe(review02Section);
      }

      // Home 03 Donut Wheel Intro (IX2 a-141)
      const wheelSection = document.querySelector<HTMLElement>('.donut-wheel')?.closest('section');
      if (wheelSection && wheelSection.dataset.revealBound !== 'true') {
        wheelSection.dataset.revealBound = 'true';
        const wheelImg = wheelSection.querySelector<HTMLElement>('.donut-wheel img');
        if (wheelImg) {
          wheelImg.style.transform = 'scale(0.7) translate3d(0, 500px, 0)';
          wheelImg.style.opacity = '0';
          wheelImg.style.transition = 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1s ease';
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                wheelImg.style.transform = 'scale(1) translate3d(0, 0, 0)';
                wheelImg.style.opacity = '1';
                observer.disconnect();
              }
            },
            { threshold: 0.15 }
          );
          observer.observe(wheelSection);
        }
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
    initScrollReveals();
    handleScrollParallax();
    window.addEventListener('scroll', handleScrollParallax, { passive: true });

    // Also observe DOM changes for dynamically loaded routes
    const observer = new MutationObserver(() => {
      initSliders();
      initAccordions();
      initTabs();
      initHeroAnimations();
      initAddToCart();
      initLottie();
      initScrollReveals();
      handleScrollParallax();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScrollParallax);
      observer.disconnect();
    };
  }, []);

  return null;
};
