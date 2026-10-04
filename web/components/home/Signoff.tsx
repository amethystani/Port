import { Signature } from '@/components/icons';
import { OrbSigil } from './OrbSigil';
import { SignoffFooter } from '@/components/chrome/SignoffFooter';

export function Signoff() {
  return (
    <div className="nw-home-signoff-group flex flex-col gap-[var(--nw-seam-section)]">
      <section className="w-full relative h-[calc(590*var(--nw-u))]" data-band="orb">
        <OrbSigil />
      </section>
      <div
        className="flex justify-center px-[var(--nw-gutter)]"
        style={{ color: 'var(--nw-theme-heading)' }}
        data-el="signature"
      >
        <Signature height="clamp(72px, 12vw, 168px)" />
      </div>
      <SignoffFooter home />
    </div>
  );
}
