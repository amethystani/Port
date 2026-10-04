import type { CSSProperties } from 'react';

/** Width divided by height of the signature (see tools/trace-signature.py). */
export const SIGNATURE_ASPECT = 2.8234;

/**
 * Animesh's signature. It is drawn as a CSS mask over a filled box, so it takes the surrounding text colour:
 * blue in light mode, white in dark mode, or whatever `color` you give it. The shape is
 * public/assets/brand/signature.svg (traced from a photo by tools/trace-signature.py).
 */
export function Signature({
  height = 64,
  className = '',
  style,
}: {
  height?: number | string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      role="img"
      aria-label="Animesh Mishra's signature"
      className={`inline-block bg-current ${className}`}
      style={{
        height,
        aspectRatio: SIGNATURE_ASPECT,
        maskImage: 'url(/assets/brand/signature.svg)',
        maskPosition: 'center',
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        WebkitMaskImage: 'url(/assets/brand/signature.svg)',
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        ...style,
      }}
    />
  );
}
