export interface BrandConfig {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
    headerBg: string;
    footerBg: string;
    footerDrip: string;
    borderRadius: 'pill' | 'curved' | 'sharp';
    fontDisplay: string;
    fontBody: string;
  };
  layoutMapping: {
    homeVariation: 1 | 2 | 3 | 4 | 5;
    aboutVariation: 1 | 2 | 3 | 4 | 5;
    contactVariation: 1 | 2 | 3 | 4 | 5;
    subscribeVariation: 1 | 2 | 3 | 4 | 5;
    whyVariation: 1 | 2 | 3 | 4 | 5;
  };
  commerce: {
    currencySymbol: string;
    shippingThreshold: number;
    subscriptionDiscount: number;
  };
  featuredProductIds: string[];
}
