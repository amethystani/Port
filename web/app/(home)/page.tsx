import { PageMotion } from '@/components/behavior/PageMotion';
import { JsonLd } from '@/components/JsonLd';
import { Announcements } from '@/components/home/Announcements';
import { PortfolioHero } from '@/components/home/PortfolioHero';
import { HermesBlock } from '@/components/home/HermesBlock';
import { Mission } from '@/components/home/Mission';
import { Signoff } from '@/components/home/Signoff';
import { pageMetadata } from '@/lib/seo';
import { portfolio } from '@/content/portfolio';
import { site } from '@/lib/site';

import '@/styles/home-announcements.css';
import '@/styles/portfolio.css';
import '@/styles/poster-edges.css';
import '@/styles/home-orb.css';

export const metadata = pageMetadata({
  title: `${portfolio.name} | ${portfolio.role}`,
  description: `${portfolio.name} is an ${portfolio.role} at ${portfolio.affiliation}.`,
  path: '/',
  image: portfolio.poster.src,
  imageAlt: portfolio.poster.alt,
  imageSize: { width: portfolio.poster.width, height: portfolio.poster.height },
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@id': `${site.url}/#person`,
              '@type': 'Person',
              name: portfolio.name,
              jobTitle: portfolio.role,
              affiliation: { '@type': 'Organization', name: portfolio.affiliation },
              image: `${site.url}${portfolio.poster.src}`,
              url: `${site.url}/`,
            },
          ],
        }}
      />
      <PageMotion kind="home" />
      <main className="nw-page-body">
        <PortfolioHero />
        <Mission />
        <HermesBlock />
        <Announcements />
        <Signoff />
      </main>
    </>
  );
}
