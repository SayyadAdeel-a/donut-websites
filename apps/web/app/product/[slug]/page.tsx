import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  GlobalHeader,
  GlobalFooter,
  ProductGrid,
  FAQAccordion,
} from '@donutland/ui';
import { products } from '../../../content/products';
import { ProductPurchaseSection } from './ProductPurchaseSection';

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4)
    .map((p) => ({
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

  const shippingFaqs = [
    {
      question: 'Freshness Guarantee & Delivery Timing',
      answer:
        'All donuts are baked between 3 AM and 5 AM on the day of dispatch. We ship in insulated air-tight freshness containers with cold packs to preserve moisture and glaze crispness.',
    },
    {
      question: 'Safe Packaging & Storage Instructions',
      answer:
        'Keep donuts in their protective presentation box at room temperature away from direct sunlight. Enjoy within 48 hours, or freeze for up to 3 months.',
    },
  ];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/all-donuts" />

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-gray-500 mb-8">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link href="/all-donuts" className="hover:text-black">
            Donuts
          </Link>
          <span>/</span>
          <span className="text-[#f54f95]">{product.name}</span>
        </div>

        {/* Interactive Purchasing Section */}
        <ProductPurchaseSection product={product} />

        {/* Shipping & Handling Accordion */}
        <div className="mt-20">
          <FAQAccordion items={shippingFaqs} title="Shipping, Storage & Returns" />
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <ProductGrid
            title="Pairs Wonderfully With"
            subtitle="Explore other customer favorites from our morning bake."
            products={relatedProducts}
            columns={4}
          />
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
