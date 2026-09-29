import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { GlobalHeader, GlobalFooter, DripDivider, Button } from '@donutland/ui';
import { articles } from '../../../content/articles';
import { Clock, User, ArrowLeft, ShareNetwork } from '@phosphor-icons/react/dist/ssr';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug) || articles[0];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/all-blogs" />

      <main className="max-w-[1000px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20">
        {/* Back Link */}
        <Link
          href="/all-blogs"
          className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-wider text-gray-500 hover:text-black mb-8"
        >
          <ArrowLeft size={16} weight="bold" />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#eeae23] text-black font-sans font-extrabold text-xs uppercase tracking-wider border border-black shadow-[2px_2px_0_0_#000000]">
            {article.category}
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-black leading-[1.05]">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-gray-600 pt-2 border-b-2 border-black/10 pb-4">
            <span className="font-bold text-black">{article.author.name} ({article.author.role})</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              <span>{article.readTime}</span>
            </span>
            <span>•</span>
            <span>Published on {article.date}</span>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="relative aspect-16/9 w-full rounded-[28px] overflow-hidden border-4 border-black mb-12 shadow-[8px_8px_0_0_#000000]">
          <Image
            src={article.image}
            alt={article.title}
            width={1000}
            height={560}
            className="object-cover w-full h-full"
            priority
            unoptimized
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6 font-sans text-base md:text-lg text-gray-800 leading-relaxed max-w-[800px] mx-auto">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          <p>
            Every pastry we craft stands as proof that baking does not require shortcuts. Join us in celebrating honest craftsmanship, wild sourdough starter, and joyful bakery memories.
          </p>
        </div>

        {/* Share & Author Card */}
        <div className="mt-16 p-8 rounded-[24px] border-2 border-black bg-[#f5f6f4] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-[800px] mx-auto">
          <div>
            <h4 className="font-display text-lg font-bold uppercase tracking-tight text-black">
              Written by {article.author.name}
            </h4>
            <p className="font-sans text-xs text-gray-600">{article.author.role} at Donutland.</p>
          </div>
          <Link href="/all-blogs">
            <Button variant="pink" size="sm" rounded="full">
              Explore More Stories
            </Button>
          </Link>
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
