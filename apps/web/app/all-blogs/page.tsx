import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GlobalHeader, GlobalFooter, DripDivider } from '@donutland/ui';
import { articles } from '../../content/articles';
import { ArrowRight, Clock, User } from '@phosphor-icons/react/dist/ssr';

export default function AllBlogsPage() {
  return (
    <div className="flex-1 flex flex-col bg-white">
      <GlobalHeader activePath="/all-blogs" />
      <section className="pt-36 pb-16 px-6 text-center max-w-4xl mx-auto bg-[#6e2f10] text-white">
        <span className="inline-block px-4 py-1 rounded-full bg-white text-black font-sans font-bold text-xs uppercase tracking-widest mb-4 border border-black shadow-[2px_2px_0_0_#000000]">
          Editorial Archive
        </span>
        <h1 className="font-display text-5xl sm:text-7xl font-bold uppercase tracking-tight mb-4">
          All Donutland Stories
        </h1>
        <p className="font-sans text-base md:text-xl text-white/95 font-medium">
          Behind-the-scenes bakery chronicles, fermentation science, single-origin cacao notes, and community updates.
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
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#eeae23] text-black font-sans font-bold text-[11px] uppercase tracking-wider border border-black shadow-[2px_2px_0_0_#000000]">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-sans text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{art.readTime}</span>
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>

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
                  className="font-sans text-xs font-bold uppercase text-[#f54f95] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Story</span>
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
