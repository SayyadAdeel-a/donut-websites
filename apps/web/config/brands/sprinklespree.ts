import { BrandConfig } from './brandConfig';

export const sprinkleSpreeBrand: BrandConfig = {
  id: 'site-01',
  slug: 'sprinklespree',
  name: 'SprinkleSpree',
  tagline: 'Baking Happiness in Every Bite!',
  description:
    'The most joyful donut party on earth! Overflowing with rainbow confetti sprinkles, flying donuts, and celebration boxes for birthdays and family fun.',
  theme: {
    primaryColor: '#f54f95',
    secondaryColor: '#eeae23',
    accentColor: '#abd1ff',
    backgroundColor: '#ffffff',
    textColor: '#1b1b1b',
    headerBg: '#ffffff',
    footerBg: '#f54f95',
    footerDrip: '#f54f95',
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
    currencySymbol: '$',
    shippingThreshold: 35,
    subscriptionDiscount: 0.15,
  },
  featuredProductIds: ['prod-08', 'prod-09', 'prod-04', 'prod-01'],
};
