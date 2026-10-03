import { socials } from '@/content/navigation';
import { NavBar } from './NavBar';

/** The nav at the top of the page. */
export function Header() {
  return (
    <header className="relative z-[90] bg-[var(--nw-stage)] text-[var(--nw-ink)]">
      <NavBar variant="main" socials={[...socials]} />
    </header>
  );
}

/** A compact copy of the nav that slides in after you scroll past the header (`inert` until then). */
export function PinnedHeader() {
  return (
    <div
      className="bg-hermes-paper fixed inset-x-0 top-0 z-50 text-[var(--hermes-primary)] shadow-[var(--hw-teams-paper-nav-rule)] transition-[translate,visibility] duration-300 ease-out motion-reduce:transition-none md:inset-x-[var(--hw-teams-page-inset)] md:top-[calc(var(--hw-frame)-1px)] invisible -translate-y-full"
      inert
    >
      <NavBar variant="pinned" />
    </div>
  );
}
