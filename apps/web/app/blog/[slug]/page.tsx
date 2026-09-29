import { redirect } from 'next/navigation';
import { articles } from '../../../content/articles';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function BlogAliasPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/blog-article/${slug}`);
}
