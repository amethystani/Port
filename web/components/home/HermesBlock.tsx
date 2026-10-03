import type { CSSProperties } from 'react';
import { hermesFeatures } from '@/content/home';
import { Button } from '@/components/ui/Button';

export function HermesBlock() {
  return (
    <div className="w-full px-[var(--nw-band-inset)] flex flex-col" data-band="hermes" id="hermes">
      <div
        data-el="hermes-title"
        className="grid h-[var(--nw-hermes-title-h)] content-start justify-items-center gap-[var(--nw-seam-block)] pt-[calc(120*var(--nw-u))] max-lg:h-auto max-lg:px-[var(--nw-gutter)] max-lg:py-[var(--nw-seam-band)]"
      >
        <figure className="flex h-[calc(80*var(--nw-u))] items-center justify-center" data-el="hermes-mark">
          <img
            alt=""
            className="h-[calc(105*var(--nw-u))] w-[calc(52*var(--nw-u))] md:rotate-45 object-contain"
            decoding="async"
            loading="lazy"
            src="/assets/hermes-landing/teams/hermes-wing.svg"
          />
        </figure>
        <p
          data-el="hermes-eyebrow"
          className="font-[family-name:var(--font-rules-extended)] font-bold text-inherit uppercase leading-[1.4] text-cap-trim cap-rules"
          style={{
            fontSize: 'max(11px, calc(11 * var(--nw-u-text)))',
            letterSpacing: 'max(0.44px, calc(0.44 * var(--nw-u-text)))',
          }}
        >
          Elevate your soul.md
        </p>
        <div className="w-[calc(1067.23*var(--nw-u))] max-lg:w-full" data-el="hermes-headline">
          <h2
            className="fit-text w-full font-[family-name:var(--font-rules-gothic-cmp)] font-normal text-inherit uppercase text-cap-trim cap-rules"
            style={
              {
                '--fit-max': 'calc(331.7 * var(--nw-u))',
                '--fit-min': '24px',
                fontFamily: 'var(--font-rules-gothic-cmp)',
                '--fit-box-edge': 'cap alphabetic',
                '--fit-box-trim': 'trim-both',
                lineHeight: '1',
              } as CSSProperties
            }
          >
            <span>
              <span>Hermes Agent</span>
            </span>
            <span aria-hidden="true">Hermes Agent</span>
          </h2>
        </div>
        <div
          className="flex w-[calc(960*var(--nw-u))] justify-center gap-[calc(80*var(--nw-u))] leading-[calc(30*var(--nw-u))] max-lg:w-full max-lg:flex-col max-lg:gap-[var(--nw-seam-micro)]"
          data-el="hermes-duo"
        >
          <p
            className="font-[family-name:var(--font-rules)] proportional-nums font-normal text-inherit normal-case text-pretty w-[calc(410*var(--nw-u))] max-lg:w-full"
            style={{ fontSize: 'max(13px, calc(13 * var(--nw-u-text)))', lineHeight: '1.15' }}
          >
            <span className="nw-desktop-only">
              The self-improving AI agent built by Nous Research. The only agent with a built-in learning loop
              — creates skills from experience,
            </span>
            <span className="nw-mobile-only">
              The self-improving AI agent built by Nous Research. The only agent with a built-in learning
              loop: creates skills from experience,
            </span>
          </p>
          <p
            className="font-[family-name:var(--font-rules)] proportional-nums font-normal text-inherit normal-case text-pretty w-[calc(410*var(--nw-u))] max-lg:w-full"
            style={{ fontSize: 'max(13px, calc(13 * var(--nw-u-text)))', lineHeight: '1.15' }}
          >
            <span className="nw-desktop-only">
              improves them during use, nudges itself to persist knowledge, and builds a deepening model of
              who you are across sessions.
            </span>
            <span className="nw-mobile-only">
              improves them during use, nudges itself to persist knowledge, and builds a deepening model of
              who you are across sessions.
            </span>
          </p>
        </div>
        <div className="flex items-start gap-[var(--nw-cta-gap)]" data-el="hermes-ctas">
          <Button variant="secondary" density="cta" href="https://hermes-agent.nousresearch.com/docs">
            Learn more
          </Button>
          <Button
            variant="primary"
            density="cta"
            className="nw-desktop-only"
            href="https://portal.nousresearch.com/cloud"
          >
            About hermes
          </Button>
          <Button
            variant="primary"
            density="cta"
            className="nw-mobile-only"
            href="https://hermes-agent.nousresearch.com/"
          >
            Install Hermes
          </Button>
        </div>
      </div>
      <div className="relative overflow-clip h-[var(--nw-demo-h)] w-full" data-el="hermes-demo">
        <video
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full object-cover object-center"
          loop
          muted
          playsInline
          poster="/assets/nous-web/hermes-demo-poster.webp"
          src="/media/hermes-desktop.mp4"
          preload="metadata"
        />
      </div>
      <div
        data-el="hermes-products"
        className="flex h-[var(--nw-hermes-products-h)] items-center px-[var(--nw-section-pad)] max-lg:h-auto max-lg:py-[var(--nw-seam-band)]"
      >
        <div className="grid w-full grid-cols-3 max-lg:grid-cols-2 max-lg:gap-[var(--nw-seam-section)] max-sm:grid-cols-1">
          {hermesFeatures.map((feature, i) => (
            <div
              key={feature.kind}
              className="flex h-[var(--nw-feature-h)] flex-col items-center justify-center gap-[var(--nw-seam-item)] px-[var(--nw-seam-item)] max-lg:h-auto max-lg:px-0"
              data-el={`feature-${i}`}
            >
              <div className="flex w-full flex-col gap-[var(--nw-seam-micro)]">
                <span
                  className="font-[family-name:var(--font-mono)] font-normal text-inherit uppercase leading-none text-cap-trim cap-mono"
                  style={{
                    fontSize: 'max(11px, calc(11 * var(--nw-u-text)))',
                    letterSpacing: 'max(0.44px, calc(0.44 * var(--nw-u-text)))',
                  }}
                >
                  <span className="nw-desktop-only">{feature.eyebrow.desktop}</span>
                  <span className="nw-mobile-only">{feature.eyebrow.mobile}</span>
                </span>
                <h3
                  className="font-[family-name:var(--font-rules-gothic-cmp)] font-medium text-inherit text-cap-trim cap-rules normal-case"
                  style={
                    {
                      fontFamily: 'var(--font-rules-gothic-cmp)',
                      '--nw-display-size': 'max(11px, calc(32 * var(--nw-u-text)))',
                      fontSize: 'var(--nw-display-size)',
                      lineHeight: '1.2',
                    } as CSSProperties
                  }
                >
                  {feature.title}
                </h3>
              </div>
              <div className="relative overflow-clip h-[var(--nw-feature-art-h)] w-full max-lg:aspect-[347/313] max-lg:h-auto">
                <div className="nw-mobile-product-preview" data-kind={feature.kind} aria-hidden="true">
                  <div
                    className="nw-mobile-product-texture"
                    style={{ backgroundImage: "url('/assets/nous-web/mobile-home/product-texture.png')" }}
                  />
                  <img
                    className="nw-color-reveal"
                    src={feature.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    className="nw-mobile-product-color nw-color-reveal"
                    src={feature.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="w-full">
                <Button variant="secondary" className="nw-desktop-only" href={feature.cta.desktop.href}>
                  {feature.cta.desktop.label}
                </Button>
                <Button variant="secondary" className="nw-mobile-only" href={feature.cta.mobile.href}>
                  {feature.cta.mobile.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
