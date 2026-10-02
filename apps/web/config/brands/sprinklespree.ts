import { BrandConfig } from './brandConfig';
import site01Json from '../../../../content/brands/site-01.json';

export const sprinkleSpreeBrand: BrandConfig = {
  id: 'site-01',
  slug: 'sprinklespree',
  name: site01Json.name || 'SprinkleSpree',
  tagline: site01Json.tagline || 'Baking Happiness in Every Bite!',
  description:
    site01Json.description ||
    'The most joyful donut party on earth! Overflowing with rainbow confetti sprinkles, flying donuts, and celebration boxes for birthdays and family fun.',
  theme: {
    primaryColor: site01Json.primaryColor || '#f54f95',
    secondaryColor: site01Json.secondaryColor || '#eeae23',
    accentColor: site01Json.accentColor || '#abd1ff',
    backgroundColor: '#ffffff',
    textColor: '#1b1b1b',
    headerBg: '#ffffff',
    footerBg: site01Json.footerBg || '#f54f95',
    footerDrip: site01Json.footerBg || '#f54f95',
    borderRadius: 'pill',
    fontDisplay: 'Anton',
    fontBody: 'Plus Jakarta Sans',
  },
  layoutMapping: {
    homeVariation: 1,
    aboutVariation: 5,
    contactVariation: 5,
    subscribeVariation: 3,
    whyVariation: 5,
  },
  commerce: {
    currencySymbol: site01Json.currencySymbol || '$',
    shippingThreshold: site01Json.shippingThreshold || 35,
    subscriptionDiscount: 0.15,
  },
  featuredProductIds: site01Json.featuredProductIds || ['prod-08', 'prod-09', 'prod-04', 'prod-01'],
  announcement: site01Json.announcement,
  hero: site01Json.hero,
  contactAndHours: site01Json.contactAndHours,
  promotions: site01Json.promotions,
  newsletter: site01Json.newsletter,
  socialLinks: site01Json.socialLinks,
};
