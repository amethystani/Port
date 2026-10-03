import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ChevronIcon, ListenIcon, NousBadgeFilled, NousBadgeOutline, ShareIcon } from '@/components/icons';
import { Mono } from '@/components/ui/Type';
import { WRAP } from '@/components/catalogue/CatalogueHero';
import type { Post } from '@/content/posts';
import { articleHeadings, cardTitle, getPost, type Heading } from '@/lib/posts';

const CAPTION =
  'font-[family-name:var(--font-mono)] font-normal text-inherit uppercase leading-none text-cap-trim cap-mono';
const CAPTION_STYLE = {
  fontSize: 'max(11px, calc(11 * var(--nw-u-text)))',
  letterSpacing: 'max(0.44px, calc(0.44 * var(--nw-u-text)))',
};

function Avatar({ avatar }: { avatar: Post['avatar'] }) {
  return (
    <span
      className={`nw-article-avatar${'image' in avatar ? ' nw-article-avatar-portrait' : ''}`}
      aria-hidden="true"
    >
      {'image' in avatar ? (
        <img src={avatar.image} alt="" />
      ) : 'badge' in avatar ? (
        <>
          <NousBadgeFilled
            data-nous-badge="filled"
            fill="currentColor"
            aria-hidden="true"
            className="size-full"
            data-badge-theme="light"
          />
          <NousBadgeOutline
            data-nous-badge="outline"
            fill="currentColor"
            aria-hidden="true"
            className="size-full"
            data-badge-theme="dark"
          />
        </>
      ) : (
        avatar.initials
      )}
    </span>
  );
}

/** A picture that is greyscale until it scrolls into view, then fades to colour (second <img> is the colour layer). */
function ColorFrame({
  src,
  alt,
  className,
  loading = 'lazy',
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
}) {
  return (
    <span className={`nw-article-color-frame ${className}`}>
      <img
        className="nw-color-reveal"
        src={src}
        alt={alt}
        loading={loading}
        {...(priority ? { fetchPriority: 'high' as const } : {})}
        decoding="async"
      />
      <img
        className="nw-article-color nw-color-reveal"
        src={src}
        alt=""
        aria-hidden="true"
        loading={loading}
        decoding="async"
      />
    </span>
  );
}

/** One anchor per section; the first is marked as the current location. */
function ContentsLinks({ headings }: { headings: Heading[] }) {
  return headings.map((heading, i) => (
    <a key={heading.id} href={`#${heading.id}`} {...(i === 0 ? { 'aria-current': 'location' as const } : {})}>
      {heading.text}
    </a>
  ));
}

function ToolbarButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Button
      variant="icon"
      bare
      className="nw-article-icon"
      aria-label={label}
      title={label}
      aria-haspopup="dialog"
      aria-expanded="false"
      data-icon-only="true"
      data-state="closed"
    >
      <span
        aria-hidden="true"
        className="inline-flex shrink-0 items-center justify-center order-first size-[var(--hpv2-icon)]"
      >
        {children}
      </span>
    </Button>
  );
}

function RelatedRow({ post }: { post: Post }) {
  return (
    <article className="nw-blog-related-row">
      <div>
        <span className={CAPTION} style={CAPTION_STYLE}>
          By {post.byline ?? post.author}
        </span>
        <h3>
          <Link href={`/${post.slug}`}>{cardTitle(post)}</Link>
        </h3>
        <p>{post.excerpt}</p>
      </div>
      {post.thumbnail !== null && (post.thumbnail ?? post.cover) && (
        <ColorFrame
          src={post.thumbnail ?? post.cover!.src}
          alt={cardTitle(post)}
          className="nw-article-related-image"
        />
      )}
    </article>
  );
}

/**
 * One blog post. `body` is the HTML from content/posts/<slug>.html; the toolbar, contents dock and
 * share/listen dialogs are enhanced by ArticleEnhancements.
 */
export function ArticlePage({ post, body }: { post: Post; body: string }) {
  const headings = articleHeadings(body, post.contentsLabels);
  const related = post.related.map(getPost).filter((p): p is Post => Boolean(p));
  return (
    <div>
      <main className={`nw-blog nw-article${post.feature ? ' nw-article-feature' : ''}`}>
        <article>
          <header className={`${WRAP} nw-article-hero`}>
            <div className="nw-article-author">
              <Avatar avatar={post.avatar} />
              <span className={CAPTION} style={CAPTION_STYLE}>
                <span className="nw-blog-muted">By</span>
                {` ${post.author}`}
              </span>
            </div>
            <h1>{post.title}</h1>
            {post.version && (
              <span className={`${CAPTION} nw-article-version`} style={CAPTION_STYLE}>
                {post.version}
              </span>
            )}
            {post.cover && (
              <ColorFrame
                src={post.cover.src}
                alt={post.cover.alt}
                className="nw-article-cover"
                loading="eager"
                priority
              />
            )}
          </header>
          <div className={`${WRAP} nw-article-reading`}>
            <div className="nw-article-toolbar">
              <div className="nw-article-audio">
                <ToolbarButton label="Listen to article">
                  <ListenIcon width={16} height={16} fill="currentColor" aria-hidden="true" />
                </ToolbarButton>
                <span>Listen</span>
              </div>
              {post.publishedTime && <time dateTime={post.publishedTime}>{post.dateLabel}</time>}
              <div className="nw-article-sharing">
                <span>Share</span>
                <ToolbarButton label="Share article">
                  <ShareIcon width={16} height={16} fill="currentColor" aria-hidden="true" />
                </ToolbarButton>
              </div>
            </div>
            <nav className="nw-article-contents" aria-label="Article contents" hidden={headings.length === 0}>
              <h2>Contents</h2>
              {headings.map((heading, i) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  {...(i === 0 ? { 'aria-current': 'location' as const } : {})}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
            <nav className="nw-article-reading-rail" aria-label="Reading section previews" hidden />
            <nav className="nw-article-dock" aria-label="Quick article contents" hidden>
              <Button variant="outline" bare aria-expanded="false" aria-controls="article-dock-list">
                <span className="leading-none whitespace-nowrap cap-mono text-cap-trim relative -top-[var(--hpv2-cap-nudge)] cap-fallback:top-[var(--hpv2-nudge)]!">
                  Contents / {headings[0]?.text ?? 'Introduction'}
                </span>
                <span
                  aria-hidden="true"
                  className="relative inline-flex shrink-0 self-center order-last size-[var(--hpv2-icon)]"
                  style={{ height: '0' }}
                >
                  <span className="absolute top-1/2 flex -translate-y-1/2 items-center justify-center size-[var(--hpv2-icon)]">
                    <ChevronIcon
                      fill="currentColor"
                      aria-hidden="true"
                      className="block shrink-0 size-full"
                    />
                  </span>
                </span>
              </Button>
              <div id="article-dock-list" hidden className="nw-article-dock-list">
                <ContentsLinks headings={headings} />
              </div>
            </nav>
            <div className="nw-article-prose" id="article-prose" dangerouslySetInnerHTML={{ __html: body }} />
            {post.sourceTools && (
              <aside className="nw-article-source-tools" aria-labelledby="source-tools-heading">
                <h2 id="source-tools-heading">Interactive research</h2>
                <p>
                  Open the published research tools on their original sites. Embedded explorers and the
                  model-response demo are not connected in this preview.
                </p>
                <ul>
                  {post.sourceTools.map((href, i) => (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        Published visualization {i + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
            <aside className="nw-article-attribution">
              <Avatar avatar={post.avatar} />
              <div>
                <span className={CAPTION} style={CAPTION_STYLE}>
                  About the author
                </span>
                <h2>{post.author}</h2>
                <p>Author of {post.title}.</p>
                <a href={`https://nousresearch-com-backup.vercel.app/${post.slug}/`}>
                  Read the original article
                </a>
              </div>
            </aside>
          </div>
        </article>
        <section aria-labelledby="related-heading" className={`${WRAP} nw-article-related`}>
          <div className="nw-blog-section-heading">
            <h2 id="related-heading">Related Articles</h2>
            <Button variant="primary" density="cta" href="/blog">
              All articles
            </Button>
          </div>
          {related.map((p) => (
            <RelatedRow key={p.slug} post={p} />
          ))}
        </section>
      </main>
    </div>
  );
}
