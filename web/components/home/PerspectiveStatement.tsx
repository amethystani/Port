'use client';

import { useEffect, useRef } from 'react';

/**
 * Perspective text scroll, ported from Skiper UI's "Skiper 28 PerspectiveTextScroll" (https://skiper-ui.com),
 * free to use with attribution. The original uses framer-motion; this version drives the same transform with
 * a scroll listener and one CSS variable, so no extra dependency is needed.
 *
 * The text starts tipped back (rotateX 30deg) and 487px low, and rises into place as the section scrolls past.
 * Edit the words in content/home.ts (`statement`).
 */
const START_OFFSET = 487; // px the text starts below its resting place

export function PerspectiveStatement({ label, text }: { label: string; text: string }) {
  const root = useRef<HTMLElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = root.current;
    const target = body.current;
    if (!section || !target) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      if (reduced.matches) {
        target.style.setProperty('--ps-y', '0px');
        return;
      }
      // Same as framer-motion's useScroll({ target }): 0 when the section's top meets the bottom of the
      // screen, 1 when its bottom meets the top.
      const rect = section.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight - rect.top) / (rect.height + innerHeight)));
      target.style.setProperty('--ps-y', `${(START_OFFSET * (1 - p)).toFixed(1)}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    reduced.addEventListener('change', onScroll);
    update();
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      reduced.removeEventListener('change', onScroll);
    };
  }, []);

  return (
    <section ref={root} className="ps" data-band="statement" aria-label={label}>
      <p className="ps-label">{label}</p>
      <div className="ps-stage">
        <div ref={body} className="ps-text">
          {text}
          <span className="ps-fade" aria-hidden="true" />
        </div>
      </div>
      <p className="ps-credit">
        Scroll effect: <a href="https://skiper-ui.com">Skiper UI</a>
      </p>
    </section>
  );
}
