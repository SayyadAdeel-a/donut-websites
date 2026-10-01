import { BrandConfig } from './brandConfig';
import { sprinkleSpreeBrand } from './sprinklespree';
import { glazeAndCoBrand } from './glaze-and-co';
import { pureDonutBrand } from './puredonut';
import { doughBoyzBrand } from './doughboyz';
import { donutCounterBrand } from './donut-counter';

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
