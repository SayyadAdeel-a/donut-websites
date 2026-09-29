import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobalHeader, GlobalFooter, DripDivider } from '@donutland/ui';
import { blogCategories } from '../../../content/categories';
import { articles } from '../../../content/articles';
import { ArrowRight, Clock } from '@phosphor-icons/react/dist/ssr';

export function generateStaticParams() {
  return blogCategories.map((c) => ({ slug: c.slug }));
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = blogCategories.find((c) => c.slug === slug) || blogCategories[0];

  return (
    <div className="flex-1 flex flex-col bg-white text-black">
      <GlobalHeader activePath="/all-blogs" />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto bg-[#eeae23] text-black">
        <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
          Blog Category Archive
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
          {category.name}
        </h1>
        <p className="font-sans text-base md:text-xl font-medium">
          {category.description}
        </p>
      </section>
      <DripDivider color="#ffffff" />

      <main className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="rounded-[24px] border-2 border-black bg-white overflow-hidden flex flex-col justify-between shadow-[5px_5px_0_0_#000000] hover:-translate-y-1.5 transition-transform group"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100 border-b-2 border-black">
                  <Image
                    src={art.image}
                    alt={art.title}
                    width={480}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <Link href={`/blog-article/${art.slug}`}>
                    <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-black group-hover:text-[#f54f95] transition-colors line-clamp-2 mb-3">
                      {art.title}
                    </h2>
                  </Link>
                  <p className="font-sans text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {art.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 border-t border-black/10 mt-auto flex items-center justify-between">
                <span className="font-sans text-xs font-bold text-gray-700">{art.author.name}</span>
                <Link
                  href={`/blog-article/${art.slug}`}
                  className="font-sans text-xs font-bold uppercase text-[#f54f95] flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <GlobalFooter />
    </div>
  );
}
