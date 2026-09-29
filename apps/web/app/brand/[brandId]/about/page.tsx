import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { GlobalHeader, GlobalFooter, DripDivider, StaffGrid } from '@donutland/ui';
import { getBrand, getAllBrands } from '../../../../config/brands/activeBrand';

export function generateStaticParams() {
  const brands = getAllBrands();
  return brands.flatMap((b) => [{ brandId: b.id }, { brandId: b.slug }]);
}

export default async function BrandAboutPage({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const { brandId } = await params;
  const brand = getBrand(brandId);
  if (!brand) notFound();

  const staff = [
    { name: 'Marcus Glaze', role: 'Head Baker', bio: 'Pioneered our 48-hour slow proofing sourdough brioche culture.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
    { name: 'Elena Vane', role: 'Nutrition Science', bio: 'Formulates our monk-fruit and stone-ground almond flour glazes.', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <GlobalHeader
        config={{
          brandName: brand.name,
          brandHref: `/brand/${brand.id}`,
        }}
        activePath={`/brand/${brand.id}/about`}
      />

      {/* Hero */}
      <section className="relative w-full pt-32 md:pt-40 pb-16 text-center" style={{ backgroundColor: brand.theme.primaryColor, color: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider mb-4 border border-black">
            Variation {brand.layoutMapping.aboutVariation} Architecture
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-6">
            About {brand.name}
          </h1>
          <p className="font-sans text-base md:text-xl text-white/90 leading-relaxed font-medium">
            {brand.description}
          </p>
        </div>
        <DripDivider color="#ffffff" />
      </section>

      {/* Story Narrative */}
      <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-black mb-6">
              Handcrafted With Integrity & Joy
            </h2>
            <div className="space-y-4 font-sans text-base text-gray-700 leading-relaxed">
              <p>
                At {brand.name}, we believe donuts are not fast food—they are edible art. Our recipes honor traditional pastry techniques while pushing the boundaries of flavor, texture, and wholesome ingredients.
              </p>
              <p>
                From single-origin chocolate imports to partnering with local regenerative family farms, every ingredient that enters our kitchen meets uncompromising culinary standards.
              </p>
            </div>
          </div>

          <div className="relative aspect-4/3 rounded-[28px] overflow-hidden border-4 border-black shadow-[8px_8px_0_0_#000000]">
            <Image
              src="https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp"
              alt="Bakery Craft"
              width={600}
              height={450}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <StaffGrid members={staff} />

      <GlobalFooter
        config={{
          brandName: brand.name,
          bgColor: brand.theme.footerBg,
          dripColor: brand.theme.footerDrip,
        }}
      />
    </div>
  );
}
