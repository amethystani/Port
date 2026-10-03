import Link from 'next/link';
import { DiscordIcon, GitHubIcon, NousBadgeFilled, NousBadgeOutline, XIcon } from '@/components/icons';
import { navigation } from '@/content/navigation';
import { BrandLink } from './BrandLink';

type Variant = 'main' | 'pinned';

const NAV_CLASS =
  'mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)] flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-6';

/** Opens the matching panel of the research-navigation dropdown (wired up by ResearchNavigation). */
function NavTrigger({ label, variant, align }: { label: string; variant: Variant; align: 'left' | 'right' }) {
  const size =
    variant === 'main' ? 'text-[length:var(--hw-teams-label)]' : 'text-[length:var(--hw-teams-label-sm)]';
  const opacity = variant === 'main' ? 'opacity-80' : 'opacity-60';
  return (
    <span className={`flex min-w-0 flex-1${align === 'right' ? ' justify-end' : ''}`}>
      <button
        type="button"
        className={`hw-mono tracking-normal font-medium ${size} whitespace-nowrap ${align === 'right' ? 'text-right ' : ''}${opacity} hover:opacity-100 nw-subnav-trigger`}
        data-research-target={label}
        aria-controls="research-navigation"
        aria-expanded="false"
      >
        <span className="nw-subnav-trigger-label">{label}</span>
      </button>
    </span>
  );
}

function BadgePair({ className, width, height }: { className: string; width: number; height: number }) {
  return (
    <>
      <NousBadgeFilled
        data-nous-badge="filled"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        width={width}
        height={height}
        data-badge-theme="light"
      />
      <NousBadgeOutline
        data-nous-badge="outline"
        fill="currentColor"
        aria-hidden="true"
        className={className}
        width={width}
        height={height}
        data-badge-theme="dark"
      />
    </>
  );
}

const SOCIAL_ICONS = { Discord: DiscordIcon, X: XIcon, GitHub: GitHubIcon } as const;

function SocialLinks({ items }: { items: { label: keyof typeof SOCIAL_ICONS; href: string }[] }) {
  return (
    <div className="nw-research-brand-socials">
      {items.map(({ label, href }) => {
        const Icon = SOCIAL_ICONS[label];
        return (
          <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
            <Icon className="" fill="none" />
          </a>
        );
      })}
    </div>
  );
}

function MenuButton() {
  return (
    <div className="flex items-center gap-3 md:hidden">
      <button
        aria-controls="research-mobile-menu"
        aria-expanded="false"
        aria-label="Open menu"
        className="-mr-2 grid size-11 cursor-pointer place-items-center"
        type="button"
      >
        <img className="nw-research-menu-burger" src="/assets/nous-web/mobile-menu/pixel-menu.svg" alt="" />
      </button>
    </div>
  );
}

export function NavBar({
  variant,
  socials,
}: {
  variant: Variant;
  socials?: { label: keyof typeof SOCIAL_ICONS; href: string }[];
}) {
  const main = variant === 'main';
  return (
    <nav
      data-pro-nav=""
      data-research-nav=""
      aria-label={main ? 'Nous Research' : 'Nous Research, pinned'}
      className={`${NAV_CLASS} ${main ? 'pt-10 pb-5' : 'py-2.5'}`}
    >
      <div className="flex items-center gap-x-6 max-md:hidden">
        {navigation.left.map((label) => (
          <NavTrigger key={label} label={label} variant={variant} align="left" />
        ))}
      </div>
      {main ? (
        <div className="nw-research-brand">
          <BrandLink />
          {socials && <SocialLinks items={socials} />}
        </div>
      ) : (
        <Link
          href="/"
          aria-label="Nous Research"
          className="grid size-[var(--hw-teams-wing-box)] shrink-0 place-items-center"
        >
          <BadgePair className="nw-research-pinned-badge" width={34} height={48} />
        </Link>
      )}
      <div className="flex items-center gap-x-6 max-md:hidden">
        {navigation.right.map((label) => (
          <NavTrigger key={label} label={label} variant={variant} align="right" />
        ))}
      </div>
      <MenuButton />
    </nav>
  );
}
