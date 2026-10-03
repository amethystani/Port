import { PageMotion } from '@/components/behavior/PageMotion';
import { JsonLd } from '@/components/JsonLd';
import { Announcements } from '@/components/home/Announcements';
import { Hero } from '@/components/home/Hero';
import { HermesBlock } from '@/components/home/HermesBlock';
import { Mission } from '@/components/home/Mission';
import { Signoff } from '@/components/home/Signoff';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

import '@/styles/home-announcements.css';
import '@/styles/home-orb.css';

export const metadata = pageMetadata({ title: site.name, path: '/', image: site.ogImage });

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@id': `${site.url}/#organization`,
              '@type': 'Organization',
              name: site.name,
              sameAs: site.sameAs,
              url: `${site.url}/`,
            },
          ],
        }}
      />
      <PageMotion kind="home" />
      <main className="nw-page-body">
        <Hero />
        <Mission />
        <HermesBlock />
        <Announcements />
        <Signoff />
      </main>
    </>
  );
}
