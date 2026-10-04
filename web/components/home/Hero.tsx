import type { CSSProperties } from 'react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <div
      data-band="hero"
      className="mx-auto w-full max-w-[calc(var(--hw-teams-col)+2*var(--hw-teams-pad-x))] px-[var(--hw-teams-pad-x)] nw-hero-fade grid grid-rows-[var(--nw-hero-rows)] justify-items-center gap-[var(--nw-hero-gap)] pb-[var(--nw-hero-tail)] max-lg:grid-rows-none max-lg:pb-[var(--nw-seam-band)]"
    >
      <button
        data-el="composer"
        id="home-composer"
        type="button"
        data-composer-target="Questions"
        data-composer-active="false"
        data-composer-collapsed="false"
        aria-label="Hermes : About Nous"
        aria-controls="research-composer"
        aria-expanded="false"
        className="nw-composer-static nw-questions-trigger w-full max-w-[var(--nw-palette-w)] self-start"
      >
        <span className="nw-composer-wing" aria-hidden="true">
          <img alt="" src="/assets/nous-web/mobile-menu/menuCode_imgWing.svg" />
        </span>
        <span className="nw-composer-static-label">Hermes : About Nous</span>
        <span className="nw-composer-static-shortcut">
          <span className="nw-composer-shortcut-note">
            <span>Toggle</span>
            <span aria-label="Command K" className="hermes-kbd-group" data-slot="kbd-group">
              <kbd
                className="hermes-kbd"
                data-slot="kbd"
                data-size="sm"
                data-variant="ghost"
                data-compact="true"
              >
                <span className="hermes-kbd-label">⌘</span>
              </kbd>
              <kbd
                className="hermes-kbd"
                data-slot="kbd"
                data-size="sm"
                data-variant="ghost"
                data-compact="true"
              >
                <span className="hermes-kbd-label">K</span>
              </kbd>
            </span>
          </span>
        </span>
      </button>
      <p
        data-el="eyebrow"
        className="font-[family-name:var(--font-rules-extended)] font-bold text-inherit uppercase leading-[1.4] text-cap-trim cap-rules"
        style={{
          fontSize: 'max(9px, calc(9 * var(--nw-u-text)))',
          letterSpacing: 'max(0.36px, calc(0.36 * var(--nw-u-text)))',
        }}
      >
        <span className="nw-desktop-only">Open Source • MIT License</span>
        <span className="nw-mobile-only">Open Source · MIT License</span>
      </p>
      <h1
        className="fit-text font-[family-name:var(--font-rules-gothic-cmp)] font-normal text-inherit uppercase text-cap-trim cap-rules w-full"
        style={
          {
            '--fit-max': 'calc(293 * var(--nw-u))',
            '--fit-min': '24px',
            fontFamily: 'var(--font-rules-gothic-cmp)',
            '--fit-box-edge': 'cap alphabetic',
            '--fit-box-trim': 'trim-both',
            lineHeight: '1',
          } as CSSProperties
        }
      >
        <span>
          <span>Animesh Mishra</span>
        </span>
        <span aria-hidden="true">Animesh Mishra</span>
      </h1>
      <div
        className="flex w-[var(--nw-hero-body-w)] flex-col gap-[calc(var(--nw-hero-gap)/2)] text-center max-lg:w-full"
        data-el="hero-body"
      >
        <p
          className="font-[family-name:var(--font-rules)] proportional-nums font-normal text-inherit normal-case text-pretty"
          style={{ fontSize: '15px', lineHeight: '1.4' }}
        >
          Animesh Mishra is a pioneer in open AI training and research. We created Hermes Agent, the most
          widely used open source agent harness in the world.
        </p>
        <p
          className="font-[family-name:var(--font-rules)] proportional-nums font-normal text-inherit normal-case text-pretty"
          style={{ fontSize: '15px', lineHeight: '1.4' }}
        >
          We are on a mission to create and proliferate open access to intelligence.
        </p>
      </div>
      <div className="flex items-start gap-[var(--nw-cta-gap)]" data-el="cta-pair">
        <Button variant="secondary" density="cta" href="#mission">
          Read Mission
        </Button>
        <Button variant="primary" density="cta" href="#mission">
          The Internet's Own AI
        </Button>
      </div>
    </div>
  );
}
