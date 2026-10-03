'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NousBadgeFilled, NousBadgeOutline } from '@/components/icons';

/** Top-level routes that are not blog articles. Everything else with a single slug segment is an article. */
const SECTION_ROUTES = ['blog', 'releases', 'careers'];

export const isArticlePath = (pathname: string) =>
  /^\/[a-z0-9]+(?:-[a-z0-9]+)*$/.test(pathname) && !SECTION_ROUTES.includes(pathname.slice(1));

function Badges({ className = 'nw-research-badge' }: { className?: string }) {
  return (
    <>
      <NousBadgeFilled
        data-nous-badge="filled"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        width={43}
        height={60}
        data-badge-theme="light"
      />
      <NousBadgeOutline
        data-nous-badge="outline"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        width={43}
        height={60}
        data-badge-theme="dark"
      />
    </>
  );
}

/**
 * The logo in the main header. It links home, except on blog articles where it becomes a "NOUS BLOG"
 * mark (on desktop) that links back to the blog index.
 */
export function BrandLink() {
  const article = isArticlePath(usePathname());
  if (article) {
    return (
      <Link href="/blog" className="nw-research-brand-link" aria-label="Nous Blog">
        <span className="nw-research-blog-mark max-md:hidden">
          <span>Nous</span>
          <span>Blog</span>
        </span>
        <span className="md:hidden">
          <Badges />
        </span>
      </Link>
    );
  }
  return (
    <Link href="/" className="nw-research-brand-link" aria-label="Nous Research home">
      <span>
        <Badges />
      </span>
    </Link>
  );
}
