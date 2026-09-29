import { BrandConfig } from './brandConfig';

export const glazeAndCoBrand: BrandConfig = {
  id: 'site-02',
  slug: 'glaze-and-co',
  name: 'Glaze & Co.',
  tagline: 'Crafted with Sourdough, Glazed with Passion.',
  description:
    'Gourmet artisanal patisserie specializing in 48-hour wild sourdough brioche, single-origin Belgian chocolate ganache, and chef seasonal pairings.',
  theme: {
    primaryColor: '#6e2f10',
    secondaryColor: '#945439',
    accentColor: '#ffb769',
    backgroundColor: '#f5f6f4',
    textColor: '#1b1b1b',
    headerBg: '#f5f6f4',
    footerBg: '#6e2f10',
    footerDrip: '#6e2f10',
    borderRadius: 'curved',
    fontDisplay: 'Anton',
    fontBody: 'Plus Jakarta Sans',
  },
  layoutMapping: {
    homeVariation: 2,
    aboutVariation: 2,
    contactVariation: 2,
    subscribeVariation: 2,
    whyVariation: 2,
  },
  commerce: {
    currencySymbol: '$',
    shippingThreshold: 45,
    subscriptionDiscount: 0.1,
  },
  featuredProductIds: ['prod-02', 'prod-03', 'prod-07', 'prod-10'],
};
