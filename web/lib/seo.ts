import type { Metadata } from 'next';
import { site } from './site';

type PageMeta = {
  /** Full <title>. Not suffixed automatically: pass e.g. "Nous Blog | Nous Research". */
  title: string;
  /** Shown in og:title / twitter:title; defaults to `title`. */
  shareTitle?: string;
  description?: string;
  /** Path starting with "/", used for the canonical URL and og:url. */
  path: string;
  image?: string;
  /** Alt text for the share image; defaults to the site name (or the title, for articles). */
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
};

/** Builds the title, canonical, Open Graph and Twitter tags for one page. */
export function pageMetadata({
  title,
  shareTitle,
  description = site.description,
  path,
  image,
  imageAlt,
  type = 'website',
  publishedTime,
  author,
}: PageMeta): Metadata {
  const ogTitle = shareTitle ?? title;
  const size = type === 'website' ? { width: 1200, height: 630 } : {};
  const alt = imageAlt ?? (type === 'website' ? site.name : ogTitle);
  const images = image ? [{ url: image, ...size, alt }] : undefined;
  return {
    title: { absolute: title },
    description,
    ...(author ? { authors: [{ name: author }] } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: site.name,
      type,
      ...(images ? { images } : {}),
      ...(type === 'article' ? { publishedTime, authors: author ? [author] : undefined } : {}),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: ogTitle,
      description,
      ...(images ? { images } : {}),
    },
  };
}
