import { BlogIndex } from '@/components/blog/BlogIndex';
import { archivePosts, featuredPosts } from '@/lib/posts';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: `Nous Blog | ${site.name}`,
  description: `Research and perspectives from ${site.name}.`,
  path: '/blog',
  image: site.ogImage,
});

export default function BlogPage() {
  return <BlogIndex featured={featuredPosts} archive={archivePosts} />;
}
