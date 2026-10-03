import { CareersPage } from '@/components/catalogue/Careers';
import { jobs } from '@/content/jobs';
import { pageMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = pageMetadata({
  title: `Careers | ${site.name}`,
  description: `Join ${site.name}. Explore open roles building open-source intelligence, Hermes Agent, and AI infrastructure.`,
  path: '/careers',
  image: site.ogImage,
});

export default function Careers() {
  return <CareersPage jobs={jobs} />;
}
