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
  announcement?: BrandAnnouncement;
  hero?: BrandHeroContent;
  contactAndHours?: BrandContactAndHours;
  promotions?: BrandPromotions;
  newsletter?: BrandNewsletter;
  socialLinks?: BrandSocialLinks;
}
