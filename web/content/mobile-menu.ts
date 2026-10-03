/** What the phone menu lists. Each section is an accordion; only one is open at a time. */
export type MenuLink = { label: string; href: string; newTab?: boolean };
export type MenuSection = { title: string; links: MenuLink[] };

const HERMES = 'https://hermes-agent.nousresearch.com';
const PORTAL = 'https://portal.nousresearch.com';

export const mobileMenu: MenuSection[] = [
  {
    title: 'Nous',
    links: [
      { label: 'Releases', href: '/releases' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Shop', href: 'https://shop.nousresearch.com', newTab: true },
    ],
  },
  {
    title: 'Hermes',
    links: [
      { label: 'Agent', href: HERMES },
      { label: 'For Business', href: `${PORTAL}/business` },
      { label: 'For Enterprise', href: `${PORTAL}/business#hermes-pro` },
      { label: 'In the Cloud', href: `${PORTAL}/cloud` },
      { label: 'Documents', href: `${HERMES}/docs` },
      { label: 'Via Terminal', href: `${HERMES}/#install` },
      { label: 'For Mac OS', href: `${HERMES}/#install` },
      { label: 'For Windows', href: `${HERMES}/#install` },
      { label: 'For Linux', href: `${HERMES}/#install` },
    ].map((link) => ({ ...link, newTab: true })),
  },
  {
    title: 'Community',
    links: [
      { label: 'Go to Discord', href: 'https://discord.gg/nousresearch' },
      { label: 'Go to GitHub', href: 'https://github.com/NousResearch' },
      { label: 'Go to x.com', href: 'https://x.com/NousResearch' },
    ].map((link) => ({ ...link, newTab: true })),
  },
  {
    title: 'Portal',
    links: [
      { label: 'Overview', href: `${PORTAL}/` },
      { label: 'Plans', href: `${PORTAL}/manage-subscription` },
      { label: 'Referrals', href: `${PORTAL}/` },
      { label: 'Sign in', href: `${PORTAL}/login` },
      { label: 'Create an account', href: `${PORTAL}/signup` },
    ].map((link) => ({ ...link, newTab: true })),
  },
];

/**
 * The three social icons come from one sprite image; each one shows a slice of it
 * (`width` is the slice, `left` how far the sprite is shifted).
 */
export const menuSocials = [
  { label: 'Discord', href: 'https://discord.gg/nousresearch', width: 20.4141, left: 0 },
  { label: 'GitHub', href: 'https://github.com/NousResearch', width: 17.82, left: 34.9274 },
  { label: 'X', href: 'https://x.com/NousResearch', width: 14.4, left: 67.7471 },
];
