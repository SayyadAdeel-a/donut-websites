export interface BrandTheme {
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
}

export interface BrandLayoutMapping {
  homeVariation: 1 | 2 | 3 | 4 | 5;
  aboutVariation: 1 | 2 | 3 | 4 | 5;
  contactVariation: 1 | 2 | 3 | 4 | 5;
  subscribeVariation: 1 | 2 | 3 | 4 | 5;
  whyVariation: 1 | 2 | 3 | 4 | 5;
}

export interface BrandCommerce {
  currencySymbol: string;
  shippingThreshold: number;
  subscriptionDiscount: number;
}

export interface BrandConfig {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  theme: BrandTheme;
  layoutMapping: BrandLayoutMapping;
  commerce: BrandCommerce;
  featuredProductIds: string[];
}

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

export const allBrands: Record<string, BrandConfig> = {
  'site-01': sprinkleSpreeBrand,
  'site-02': glazeAndCoBrand,
  'site-03': pureDonutBrand,
  'site-04': doughBoyzBrand,
  'site-05': donutCounterBrand,
  sprinklespree: sprinkleSpreeBrand,
  'glaze-and-co': glazeAndCoBrand,
  puredonut: pureDonutBrand,
  doughboyz: doughBoyzBrand,
  'the-donut-counter': donutCounterBrand,
  'donut-counter': donutCounterBrand,
};

export function getBrand(brandIdOrSlug?: string): BrandConfig {
  if (!brandIdOrSlug) return sprinkleSpreeBrand;
  return allBrands[brandIdOrSlug.toLowerCase()] || sprinkleSpreeBrand;
}

export function getAllBrands(): BrandConfig[] {
  return [
    sprinkleSpreeBrand,
    glazeAndCoBrand,
    pureDonutBrand,
    doughBoyzBrand,
    donutCounterBrand,
  ];
}

export function getActiveBrand(overrideId?: string): BrandConfig | null {
  const brandId = overrideId || (typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_BRAND_ID : undefined);
  if (!brandId || brandId === 'master' || brandId === 'none' || brandId === '') {
    return null;
  }
  return allBrands[brandId.toLowerCase()] || null;
}
