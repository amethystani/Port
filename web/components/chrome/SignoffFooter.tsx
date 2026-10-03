import { NousBadgeFilled, NousBadgeOutline } from '@/components/icons';

/** The closing strip: tagline, copyright, the three marks and legal links. `home` adds the home page's extra styling. */
export function SignoffFooter({ home = false }: { home?: boolean }) {
  return (
    <footer className={`text-[var(--hw-teams-ink)]${home ? ' nw-home-signoff' : ''} bg-transparent`}>
      <div className="mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)] grid *:col-start-1 *:row-start-1">
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--hpv2-type-label)',
            fontWeight: '500',
            lineHeight: '1',
            letterSpacing: '0',
            textTransform: 'uppercase',
          }}
          className="relative flex flex-wrap items-center gap-x-20 gap-y-6 self-end py-[60px] max-md:gap-x-6 max-md:py-10"
        >
          <div className="flex min-w-0 flex-1 flex-col gap-[1em] max-md:order-2 max-md:basis-[calc(50%-12px)]">
            <p>The Internet's Own AI</p>
            <p>© 2026, Nous Research, Inc.</p>
          </div>
          <div className="flex items-center gap-5 max-md:order-1 max-md:basis-full max-md:justify-center">
            <span
              role="img"
              aria-label="Nous Portal"
              className="h-[57px] w-10 bg-current"
              style={{
                maskImage: 'url(/assets/hermes-landing/nous-portal-badge.svg)',
                maskPosition: 'center',
                maskRepeat: 'no-repeat',
                maskSize: 'contain',
              }}
            />
            <NousBadgeFilled
              data-nous-badge="filled"
              fill="currentColor"
              role="img"
              aria-label="Nous Research"
              className="h-[57px] w-10"
              data-badge-theme="light"
            />
            <NousBadgeOutline
              data-nous-badge="outline"
              fill="currentColor"
              role="img"
              aria-label="Nous Research"
              className="h-[57px] w-10"
              data-badge-theme="dark"
            />
            <span
              role="img"
              aria-label="Hermes"
              className="h-[57px] w-10 bg-current"
              style={{
                maskImage: 'url(/assets/hermes-landing/hermes-agent-badge.svg)',
                maskPosition: 'center',
                maskRepeat: 'no-repeat',
                maskSize: 'contain',
              }}
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-end gap-[1em] text-right max-md:order-3 max-md:basis-[calc(50%-12px)]">
            <p>
              <span>
                <a className="underline decoration-from-font" href="https://portal.nousresearch.com/terms">
                  Terms
                </a>
              </span>
              <span>
                <span className="mx-2">|</span>
                <a className="underline decoration-from-font" href="https://portal.nousresearch.com/privacy">
                  Privacy
                </a>
              </span>
            </p>
            <p>MIT License · 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
