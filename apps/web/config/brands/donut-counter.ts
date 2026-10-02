import { BrandConfig } from './brandConfig';
import site05Json from '../../../../content/brands/site-05.json';

export const donutCounterBrand: BrandConfig = {
  id: 'site-05',
  slug: 'the-donut-counter',
  name: site05Json.name || 'The Donut Counter',
  tagline: site05Json.tagline || 'Serving American Comfort Since 1958.',
  description:
    site05Json.description ||
    'Heritage Americana diner tradition. Classic buttermilk crullers, hot filter coffee, and multi-generation recipe warmth.',
  theme: {
    primaryColor: site05Json.primaryColor || '#3b89ff',
    secondaryColor: site05Json.secondaryColor || '#eeae23',
    accentColor: site05Json.accentColor || '#f21d33',
    backgroundColor: '#fff5ea',
    textColor: '#1b1b1b',
    headerBg: '#fff5ea',
    footerBg: site05Json.footerBg || '#3b89ff',
    footerDrip: site05Json.footerBg || '#3b89ff',
    borderRadius: 'pill',
    fontDisplay: 'Anton',
    fontBody: 'Plus Jakarta Sans',
  },
  layoutMapping: {
    homeVariation: 3,
    aboutVariation: 4,
    contactVariation: 3,
    subscribeVariation: 5,
    whyVariation: 4,
  },
  commerce: {
    currencySymbol: site05Json.currencySymbol || '$',
    shippingThreshold: site05Json.shippingThreshold || 30,
    subscriptionDiscount: 0.1,
  },
  featuredProductIds: site05Json.featuredProductIds || ['prod-06', 'prod-10', 'prod-05', 'prod-01'],
  announcement: site05Json.announcement,
  hero: site05Json.hero,
  contactAndHours: site05Json.contactAndHours,
  promotions: site05Json.promotions,
  newsletter: site05Json.newsletter,
  socialLinks: site05Json.socialLinks,
};
