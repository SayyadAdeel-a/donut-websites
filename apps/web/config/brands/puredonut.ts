import { BrandConfig } from './brandConfig';
import site03Json from '../../../../content/brands/site-03.json';

export const pureDonutBrand: BrandConfig = {
  id: 'site-03',
  slug: 'puredonut',
  name: site03Json.name || 'PureDonut / KetoKreme',
  tagline: site03Json.tagline || 'Zero Guilt. 100% Flavor. Keto & Gluten-Free.',
  description:
    site03Json.description ||
    'Clean nutrition food science lab. Handcrafted with California almond flour, organic monk fruit, and zero sugar. Made for athletes, diabetics, and keto lifestyles.',
  theme: {
    primaryColor: site03Json.primaryColor || '#1ac500',
    secondaryColor: site03Json.secondaryColor || '#2a3440',
    accentColor: site03Json.accentColor || '#3898ec',
    backgroundColor: '#ffffff',
    textColor: '#1b1b1b',
    headerBg: '#ffffff',
    footerBg: site03Json.footerBg || '#2a3440',
    footerDrip: site03Json.primaryColor || '#1ac500',
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
    currencySymbol: site03Json.currencySymbol || '$',
    shippingThreshold: site03Json.shippingThreshold || 50,
    subscriptionDiscount: 0.2,
  },
  featuredProductIds: site03Json.featuredProductIds || ['prod-04', 'prod-06', 'prod-10', 'prod-02'],
  announcement: site03Json.announcement,
  hero: site03Json.hero,
  contactAndHours: site03Json.contactAndHours,
  promotions: site03Json.promotions,
  newsletter: site03Json.newsletter,
  socialLinks: site03Json.socialLinks,
};
