import { ReleasesPage } from '@/components/catalogue/ReleaseList';
import { releases } from '@/content/releases';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: `Releases | ${site.name}`,
  description: `Explore open-source models, research papers, datasets, and tools from ${site.name}.`,
  path: '/releases',
  image: site.ogImage,
});

export default function Releases() {
  return <ReleasesPage releases={releases} />;
}
