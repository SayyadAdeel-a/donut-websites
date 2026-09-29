import { BrandConfig } from './brandConfig';

export const pureDonutBrand: BrandConfig = {
  id: 'site-03',
  slug: 'puredonut',
  name: 'PureDonut / KetoKreme',
  tagline: 'Zero Guilt. 100% Flavor. Keto & Gluten-Free.',
  description:
    'Clean nutrition food science lab. Handcrafted with California almond flour, organic monk fruit, and zero sugar. Made for athletes, diabetics, and keto lifestyles.',
  theme: {
    primaryColor: '#1ac500',
    secondaryColor: '#2a3440',
    accentColor: '#3898ec',
    backgroundColor: '#ffffff',
    textColor: '#1b1b1b',
    headerBg: '#ffffff',
    footerBg: '#2a3440',
    footerDrip: '#1ac500',
    borderRadius: 'curved',
    fontDisplay: 'Anton',
    fontBody: 'Plus Jakarta Sans',
  },
  layoutMapping: {
    homeVariation: 5,
    aboutVariation: 3,
    contactVariation: 4,
    subscribeVariation: 4,
    whyVariation: 1,
  },
  commerce: {
    currencySymbol: '$',
    shippingThreshold: 50,
    subscriptionDiscount: 0.2,
  },
  featuredProductIds: ['prod-04', 'prod-06', 'prod-10', 'prod-02'],
};
