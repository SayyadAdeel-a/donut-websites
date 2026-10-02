import site01Json from '../../../content/brands/site-01.json';
import site02Json from '../../../content/brands/site-02.json';
import site03Json from '../../../content/brands/site-03.json';
import site04Json from '../../../content/brands/site-04.json';
import site05Json from '../../../content/brands/site-05.json';

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

export interface BrandAnnouncement {
  enabled: boolean;
  badge: string;
  message: string;
  linkText: string;
  linkUrl: string;
  bgColor?: string;
  textColor?: string;
}

export interface BrandHeroContent {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
}

export interface BrandContactAndHours {
  phone: string;
  email: string;
  address: string;
  weekdayHours: string;
  weekendHours: string;
  holidayNotice: string;
}

export interface BrandPromotions {
  enabled: boolean;
  headline: string;
  promoCode: string;
  discountPercent: number;
  description: string;
}

export interface BrandNewsletter {
  headline: string;
  subtext: string;
  buttonText: string;
  successMessage: string;
}

export interface BrandSocialLinks {
  instagram: string;
  tiktok: string;
  facebook: string;
  twitter: string;
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
  announcement?: BrandAnnouncement;
  hero?: BrandHeroContent;
  contactAndHours?: BrandContactAndHours;
  promotions?: BrandPromotions;
  newsletter?: BrandNewsletter;
  socialLinks?: BrandSocialLinks;
}

export const sprinkleSpreeBrand: BrandConfig = {
  id: 'site-01',
  slug: 'sprinklespree',
  name: site01Json.name || 'SprinkleSpree',
  tagline: site01Json.tagline || 'Baking Happiness in Every Bite!',
  description:
    site01Json.description ||
    'The most joyful donut party on earth! Overflowing with rainbow confetti sprinkles, flying donuts, and celebration boxes for birthdays and family fun.',
  theme: {
    primaryColor: site01Json.primaryColor || '#f54f95',
    secondaryColor: site01Json.secondaryColor || '#eeae23',
    accentColor: site01Json.accentColor || '#abd1ff',
    backgroundColor: '#ffffff',
    textColor: '#1b1b1b',
    headerBg: '#ffffff',
    footerBg: site01Json.footerBg || '#f54f95',
    footerDrip: site01Json.footerBg || '#f54f95',
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
    currencySymbol: site01Json.currencySymbol || '$',
    shippingThreshold: site01Json.shippingThreshold || 35,
    subscriptionDiscount: 0.15,
  },
  featuredProductIds: site01Json.featuredProductIds || ['prod-08', 'prod-09', 'prod-04', 'prod-01'],
  announcement: site01Json.announcement,
  hero: site01Json.hero,
  contactAndHours: site01Json.contactAndHours,
  promotions: site01Json.promotions,
  newsletter: site01Json.newsletter,
  socialLinks: site01Json.socialLinks,
};

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
  const brandId =
    overrideId ||
    (typeof process !== 'undefined' ? process.env.NEXT_PUBLIC_BRAND_ID : undefined);
  if (!brandId || brandId === 'master' || brandId === 'none' || brandId === '') {
    return null;
  }
  return allBrands[brandId.toLowerCase()] || null;
}
