import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button-styles.json';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'icon' | 'editorial-disclosure';
export type ButtonSize = 'm' | 's';
/** `cta` = display-size label (hero and section calls to action); `compact` = small UI button. */
export type ButtonDensity = 'cta' | 'compact';

type Common = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  density?: ButtonDensity;
  /** Render children as-is instead of wrapping them in the cap-trimmed label span. */
  bare?: boolean;
  children?: ReactNode;
};

type AsLink = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;
type AsButton = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

export function buttonClassName({
  variant = 'secondary',
  size = 'm',
  density = 'compact',
  className,
}: Pick<Common, 'variant' | 'size' | 'density'> & { className?: string }) {
  return [
    styles.base,
    styles.variants[variant],
    variant !== 'icon' && styles.sizes[size],
    variant !== 'icon' && size === 'm' && styles.density[density],
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

/**
 * The site's one button: `primary` (solid), `secondary` (paper), `ghost`, `outline`,
 * `icon` and `editorial-disclosure` (the "show more" toggles). Renders an <a> when given an href.
 */
export function Button(props: AsLink | AsButton) {
  const {
    variant = 'secondary',
    size = 'm',
    density = 'compact',
    bare,
    className,
    children,
    ...rest
  } = props;
  const cls = buttonClassName({ variant, size, density, className });
  const inner = (
    <>
      {bare ? (
        children
      ) : (
        <span className={variant === 'editorial-disclosure' ? styles.labelNoTrim : styles.label}>
          {children}
        </span>
      )}
      <span aria-hidden="true" className="hermes-button-hover-border" />
    </>
  );
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a
        role="link"
        tabIndex={0}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={cls}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }
  return (
    <button
      type="button"
      tabIndex={0}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {inner}
    </button>
  );
}
