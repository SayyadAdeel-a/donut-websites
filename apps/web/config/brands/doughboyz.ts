import { BrandConfig } from './brandConfig';
import site04Json from '../../../../content/brands/site-04.json';

export const doughBoyzBrand: BrandConfig = {
  id: 'site-04',
  slug: 'doughboyz',
  name: site04Json.name || 'DoughBoyz',
  tagline: site04Json.tagline || 'Late Night Glaze. Streetwear Appetite.',
  description:
    site04Json.description ||
    'Underground garage bakery meets skate and streetwear culture. Midnight drops, heavy offset shadows, grunge stickers, and aggressive flavors.',
  theme: {
    primaryColor: site04Json.primaryColor || '#f21d33',
    secondaryColor: site04Json.secondaryColor || '#1b1b1b',
    accentColor: site04Json.accentColor || '#f98000',
    backgroundColor: '#1b1b1b',
    textColor: '#ffffff',
    headerBg: '#1b1b1b',
    footerBg: site04Json.footerBg || '#000000',
    footerDrip: site04Json.primaryColor || '#f21d33',
    borderRadius: 'sharp',
    fontDisplay: 'Anton',
    fontBody: 'Plus Jakarta Sans',
  },
  layoutMapping: {
    homeVariation: 4,
    aboutVariation: 1,
    contactVariation: 1,
    subscribeVariation: 1,
    whyVariation: 3,
  },
  commerce: {
    currencySymbol: site04Json.currencySymbol || '$',
    shippingThreshold: site04Json.shippingThreshold || 40,
    subscriptionDiscount: 0.15,
  },
  featuredProductIds: site04Json.featuredProductIds || ['prod-01', 'prod-03', 'prod-05', 'prod-08'],
  announcement: site04Json.announcement,
  hero: site04Json.hero,
  contactAndHours: site04Json.contactAndHours,
  promotions: site04Json.promotions,
  newsletter: site04Json.newsletter,
  socialLinks: site04Json.socialLinks,
};
