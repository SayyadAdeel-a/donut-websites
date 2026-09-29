import React from 'react';
import { notFound } from 'next/navigation';
import {
  GlobalHeader,
  GlobalFooter,
  Hero01,
  Hero02,
  Hero03,
  Hero04,
  Hero05,
  ProductGrid,
  FAQAccordion,
  StaffGrid,
  ProcessSteps,
  TestimonialMarquee,
} from '@donutland/ui';
import { getBrand, getAllBrands } from '../../../config/brands/activeBrand';
import { products } from '../../../content/products';

export function generateStaticParams() {
  const brands = getAllBrands();
  return brands.flatMap((b) => [{ brandId: b.id }, { brandId: b.slug }]);
}

export default async function BrandHomePage({
  params,
}: {
  params: Promise<{ brandId: string }>;
}) {
  const { brandId } = await params;
  const brand = getBrand(brandId);
  if (!brand) notFound();

  const brandProducts = products.filter((p) =>
    brand.featuredProductIds.includes(p.id)
  );

  const productCardProps = (brandProducts.length > 0 ? brandProducts : products.slice(0, 4)).map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    price: p.price,
    originalPrice: p.originalPrice,
    image: p.image,
    category: p.category,
    badge: p.badge,
    bgColor: p.bgColor,
  }));

  const faqs = [
    {
      question: `What makes ${brand.name} unique?`,
      answer: brand.description,
    },
    {
      question: 'How does shipping and delivery work?',
      answer: `Orders over $${brand.commerce.shippingThreshold} qualify for free delivery. We bake every morning and ship in temperature-controlled boxes.`,
    },
    {
      question: 'Can I subscribe for recurring orders?',
      answer: `Yes! Our subscription saves you ${(brand.commerce.subscriptionDiscount * 100).toFixed(0)}% on every single order with flexible delivery frequencies.`,
    },
  ];

  const staff = [
    { name: 'Marcus Glaze', role: 'Head of Fermentation', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586df2876a064d502edb815_donutland-home-02.webp' },
    { name: 'Elena Vane', role: 'Food Biochemist', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585edc578c5b243fc3bcf18_donutland.webflow.io_homepages_home-03%20(1).webp' },
    { name: 'Kobe Chen', role: 'Midnight Baker', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6585eccf8e807ceb0ff1741c_donutland.webflow.io_homepages_home-04.webp' },
    { name: 'Sarah Jenkins', role: 'Pastry Director', image: 'https://cdn.prod.website-files.com/6569d73055568668783bf587/6586deb77efa8f55632d684e_pink-splash-donut-pink.webp' },
  ];

  const renderHero = () => {
    switch (brand.layoutMapping.homeVariation) {
      case 1:
        return (
          <Hero01
            title={brand.name.toUpperCase()}
            subtitle={brand.tagline}
            ctaHref={`/brand/${brand.id}/subscribe`}
          />
        );
      case 2:
        return (
          <Hero02
            title={brand.name.toLowerCase()}
            tagline={brand.description}
            ctaHref={`/brand/${brand.id}/subscribe`}
          />
        );
      case 3:
        return (
          <Hero03
            title={brand.name}
            tagline={brand.description}
            ctaHref={`/brand/${brand.id}/subscribe`}
          />
        );
      case 4:
        return (
          <Hero04
            title={brand.name.toUpperCase()}
            tagline={brand.description}
            ctaHref={`/brand/${brand.id}/subscribe`}
          />
        );
      case 5:
        return (
          <Hero05
            title={brand.name.toUpperCase()}
            tagline={brand.description}
            ctaHref={`/brand/${brand.id}/subscribe`}
          />
        );
      default:
        return <Hero01 title={brand.name} subtitle={brand.tagline} />;
    }
  };

  return (
    <div
      className="flex-1 flex flex-col min-h-screen"
      style={{ backgroundColor: brand.theme.backgroundColor, color: brand.theme.textColor }}
    >
      <GlobalHeader
        config={{
          brandName: brand.name,
          brandHref: `/brand/${brand.id}`,
          bgColor: brand.theme.headerBg,
          textColor: brand.theme.textColor,
        }}
        activePath={`/brand/${brand.id}`}
      />

      {/* Render Configured Hero */}
      {renderHero()}

      {/* Product Grid */}
      <ProductGrid
        title={`${brand.name} Signature Menu`}
        subtitle="Artisanal batches crafted specifically for this brand experience."
        products={productCardProps}
        categories={['Signature', 'Gourmet', 'Special']}
      />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Team / Staff */}
      <StaffGrid
        title={`The ${brand.name} Artisans`}
        subtitle="Passionate bakers and recipe designers dedicated to perfect pastry craftsmanship."
        members={staff}
      />

      {/* FAQ Accordion */}
      <FAQAccordion
        title="Everything You Need To Know"
        items={faqs}
      />

      <GlobalFooter
        config={{
          brandName: brand.name,
          bgColor: brand.theme.footerBg,
          textColor: '#ffffff',
          dripColor: brand.theme.footerDrip,
        }}
      />
    </div>
  );
}
