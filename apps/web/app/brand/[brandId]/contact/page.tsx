import React from 'react';
import { notFound } from 'next/navigation';
import { GlobalHeader, GlobalFooter, DripDivider, Button } from '@donutland/ui';
import { getBrand, getAllBrands } from '../../../../config/brands/activeBrand';
import { Phone, MapPin, Envelope, Clock } from '@phosphor-icons/react/dist/ssr';
import { BrandContactForm } from './BrandContactForm';

export function generateStaticParams() {
  const brands = getAllBrands();
  return brands.flatMap((b) => [{ brandId: b.id }, { brandId: b.slug }]);
}

export default async function BrandContactPage({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const { brandId } = await params;
  const brand = getBrand(brandId);
  if (!brand) notFound();

  const locations = [
    { city: 'Flagship Storefront Hub', address: '128 Sourdough Lane, New York, NY', hours: 'Mon - Sun: 7 AM - 6 PM', phone: '+1 (800) 555-GLAZE' },
    { city: 'Bakery Production Kitchen', address: '482 Confectionery Way, Portland, ME', hours: 'Tue - Sat: 6 AM - 4 PM', phone: '+1 (800) 555-BAKE' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-white">
      <GlobalHeader
        config={{
          brandName: brand.name,
          brandHref: `/brand/${brand.id}`,
        }}
        activePath={`/brand/${brand.id}/contact`}
      />

      <section
        className="relative w-full pt-32 md:pt-40 pb-16 text-center"
        style={{ backgroundColor: brand.theme.primaryColor, color: '#ffffff' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-wider mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
            Variation {brand.layoutMapping.contactVariation} Support
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
            Contact {brand.name}
          </h1>
          <p className="font-sans text-base md:text-xl text-white/90 leading-relaxed font-medium">
            Reach out for catering orders, custom flavor requests, and wholesale inquiries.
          </p>
        </div>
        <DripDivider color="#ffffff" />
      </section>

      <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto flex-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Details */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-black mb-4">
                Bakery Headquarters
              </h2>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Visit our storefront kitchen or get in touch directly with our catering team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-[#fafafa] border-2 border-black">
                <MapPin size={24} weight="bold" className="text-[#f54f95] shrink-0" />
                <div>
                  <span className="font-display text-sm font-bold uppercase block text-black">Store Location</span>
                  <span className="font-sans text-xs text-gray-600">128 Sourdough Lane, Maine / New York</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-[#fafafa] border-2 border-black">
                <Phone size={24} weight="bold" className="text-[#eeae23] shrink-0" />
                <div>
                  <span className="font-display text-sm font-bold uppercase block text-black">Direct Phone</span>
                  <span className="font-sans text-xs text-gray-600">+1 (800) 555-GLAZE</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-[16px] bg-[#fafafa] border-2 border-black">
                <Envelope size={24} weight="bold" className="text-[#3b89ff] shrink-0" />
                <div>
                  <span className="font-display text-sm font-bold uppercase block text-black">Inquiries</span>
                  <span className="font-sans text-xs text-gray-600">hello@{brand.slug}.com</span>
                </div>
              </div>
            </div>

            {brand.layoutMapping.contactVariation === 1 && (
              <div className="space-y-3 pt-4 border-t-2 border-black/10">
                <h3 className="font-display text-lg uppercase font-bold text-black">Pop-Up & Food Truck Stops</h3>
                {locations.map((loc, idx) => (
                  <div key={idx} className="p-3 rounded-[12px] bg-gray-50 border border-black/10 text-xs">
                    <span className="font-bold block">{loc.city}</span>
                    <span className="text-gray-500 block">{loc.address}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form */}
          <BrandContactForm brand={brand} />
        </div>
      </section>

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
