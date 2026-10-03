import { SignoffFooter } from '@/components/chrome/SignoffFooter';

export function Signoff() {
  return (
    <div className="nw-home-signoff-group flex flex-col gap-[var(--nw-seam-section)]">
      <section className="w-full relative h-[calc(590*var(--nw-u))]" data-band="orb">
        <div className="nw-orb-sigil">
          <div className="nw-orb-orbits" aria-hidden="true">
            <img
              src="/assets/nous-web/orbit-imgWorkspaces.svg"
              alt=""
              loading="lazy"
              decoding="async"
              className="nw-orb-layer nw-orb-layer-0"
            />
            <img
              src="/assets/nous-web/orbit-imgSource.svg"
              alt=""
              loading="lazy"
              decoding="async"
              className="nw-orb-layer nw-orb-layer-1"
            />
            <img
              src="/assets/nous-web/orbit-imgSource1.svg"
              alt=""
              loading="lazy"
              decoding="async"
              className="nw-orb-layer nw-orb-layer-2"
            />
            <img
              src="/assets/nous-web/orbit-imgSource2.svg"
              alt=""
              loading="lazy"
              decoding="async"
              className="nw-orb-layer nw-orb-layer-3"
            />
            <img
              src="/assets/nous-web/orbit-imgSource3.svg"
              alt=""
              loading="lazy"
              decoding="async"
              className="nw-orb-layer nw-orb-layer-4"
            />
          </div>
          <img
            className="nw-orb-fallback"
            data-stamp="light"
            src="/assets/nous-web/nous-stamp-light.svg"
            crossOrigin="anonymous"
            alt="Nous girl seal: Rebellion to tyrants is obedience to God."
            loading="lazy"
            decoding="async"
          />
          <img
            className="nw-orb-fallback"
            data-stamp="dark"
            src="/assets/nous-web/nous-stamp-dark.svg"
            crossOrigin="anonymous"
            alt="Nous girl seal: Rebellion to tyrants is obedience to God."
            loading="lazy"
            decoding="async"
          />
          <div
            className="nw-orb-stage"
            role="img"
            tabIndex={-1}
            aria-label="Nous girl medal. Drag to rotate, use arrow keys to turn, or Home to reset."
            title="Drag to rotate; arrow keys turn; Home resets"
          />
        </div>
      </section>
      <SignoffFooter home />
    </div>
  );
}
