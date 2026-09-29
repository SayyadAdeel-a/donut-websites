import { BrandConfig } from './brandConfig';

export const doughBoyzBrand: BrandConfig = {
  id: 'site-04',
  slug: 'doughboyz',
  name: 'DoughBoyz',
  tagline: 'Late Night Glaze. Streetwear Appetite.',
  description:
    'Underground garage bakery meets skate and streetwear culture. Midnight drops, heavy offset shadows, grunge stickers, and aggressive flavors.',
  theme: {
    primaryColor: '#f21d33',
    secondaryColor: '#1b1b1b',
    accentColor: '#f98000',
    backgroundColor: '#1b1b1b',
    textColor: '#ffffff',
    headerBg: '#1b1b1b',
    footerBg: '#000000',
    footerDrip: '#f21d33',
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
    currencySymbol: '$',
    shippingThreshold: 40,
    subscriptionDiscount: 0.15,
  },
  featuredProductIds: ['prod-01', 'prod-03', 'prod-05', 'prod-08'],
};
