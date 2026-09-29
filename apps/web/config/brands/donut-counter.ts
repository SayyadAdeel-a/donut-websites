import { BrandConfig } from './brandConfig';

export const donutCounterBrand: BrandConfig = {
  id: 'site-05',
  slug: 'the-donut-counter',
  name: 'The Donut Counter',
  tagline: 'Serving American Comfort Since 1958.',
  description:
    'Heritage Americana diner tradition. Classic buttermilk crullers, hot filter coffee, and multi-generation recipe warmth.',
  theme: {
    primaryColor: '#3b89ff',
    secondaryColor: '#eeae23',
    accentColor: '#f21d33',
    backgroundColor: '#fff5ea',
    textColor: '#1b1b1b',
    headerBg: '#fff5ea',
    footerBg: '#3b89ff',
    footerDrip: '#3b89ff',
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
    currencySymbol: '$',
    shippingThreshold: 30,
    subscriptionDiscount: 0.1,
  },
  featuredProductIds: ['prod-06', 'prod-10', 'prod-05', 'prod-01'],
};
