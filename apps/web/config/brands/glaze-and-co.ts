import { BrandConfig } from './brandConfig';
import site02Json from '../../../../content/brands/site-02.json';

export const glazeAndCoBrand: BrandConfig = {
  id: 'site-02',
  slug: 'glaze-and-co',
  name: site02Json.name || 'Glaze & Co.',
  tagline: site02Json.tagline || 'Crafted with Sourdough, Glazed with Passion.',
  description:
    site02Json.description ||
    'Gourmet artisanal patisserie specializing in 48-hour wild sourdough brioche, single-origin Belgian chocolate ganache, and chef seasonal pairings.',
  theme: {
    primaryColor: site02Json.primaryColor || '#6e2f10',
    secondaryColor: site02Json.secondaryColor || '#945439',
    accentColor: site02Json.accentColor || '#ffb769',
    backgroundColor: '#f5f6f4',
    textColor: '#1b1b1b',
    headerBg: '#f5f6f4',
    footerBg: site02Json.footerBg || '#6e2f10',
    footerDrip: site02Json.footerBg || '#6e2f10',
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
    currencySymbol: site02Json.currencySymbol || '$',
    shippingThreshold: site02Json.shippingThreshold || 45,
    subscriptionDiscount: 0.1,
  },
  featuredProductIds: site02Json.featuredProductIds || ['prod-02', 'prod-03', 'prod-07', 'prod-10'],
  announcement: site02Json.announcement,
  hero: site02Json.hero,
  contactAndHours: site02Json.contactAndHours,
  promotions: site02Json.promotions,
  newsletter: site02Json.newsletter,
  socialLinks: site02Json.socialLinks,
};
