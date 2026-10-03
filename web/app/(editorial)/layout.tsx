import type { ReactNode } from 'react';
import { Footer } from '@/components/chrome/Footer';
import { Header, PinnedHeader } from '@/components/chrome/Header';
import { SignoffFooter } from '@/components/chrome/SignoffFooter';

import '@/styles/editorial.css';

/** Blog, releases, careers and articles: the page's <main> followed by a compact sign-off, inside .nw-editorial. */
export default function EditorialLayout({ children }: { children: ReactNode }) {
  return (
    <div className="nw-editorial">
      <Header />
      <PinnedHeader />
      <div className="nw-page-body">
        {children}
        <SignoffFooter />
      </div>
      <Footer />
    </div>
  );
}
