export type FooterLink = { label: string; href: string; newTab?: boolean };
export type FooterColumn = {
  group: string;
  title: string;
  links: FooterLink[];
};

/** The four link columns in the footer. */
export const footerColumns: FooterColumn[] = [
  {
    group: 'Research',
    title: 'Nous',
    links: [
      {
        label: 'Research',
        href: '/',
      },
      {
        label: 'Releases',
        href: '/releases',
      },
      {
        label: 'Careers',
        href: '/careers',
      },
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Shop',
        href: 'https://shop.nousresearch.com',
        newTab: true,
      },
      {
        label: 'Contact',
        href: 'mailto:info@nousresearch.com',
      },
    ],
  },
  {
    group: 'Products',
    title: 'Hermes',
    links: [
      {
        label: 'Agent',
        href: 'https://hermes-agent.nousresearch.com',
        newTab: true,
      },
      {
        label: 'Business',
        href: 'https://portal.nousresearch.com/business',
      },
      {
        label: 'Enterprise',
        href: 'https://portal.nousresearch.com/business#hermes-pro',
      },
      {
        label: 'Via Terminal',
        href: 'https://hermes-agent.nousresearch.com/#install',
        newTab: true,
      },
      {
        label: 'For Mac OS',
        href: 'https://hermes-agent.nousresearch.com/#install',
        newTab: true,
      },
      {
        label: 'For Windows',
        href: 'https://hermes-agent.nousresearch.com/#install',
        newTab: true,
      },
      {
        label: 'For Linux',
        href: 'https://hermes-agent.nousresearch.com/#install',
        newTab: true,
      },
      {
        label: 'In the Cloud',
        href: 'https://portal.nousresearch.com/cloud',
      },
    ],
  },
  {
    group: 'Resources',
    title: 'Community',
    links: [
      {
        label: 'Go to Discord',
        href: 'https://discord.gg/nousresearch',
        newTab: true,
      },
      {
        label: 'Go to Github',
        href: 'https://github.com/NousResearch',
        newTab: true,
      },
      {
        label: 'Go to x.com',
        href: 'https://x.com/NousResearch',
        newTab: true,
      },
      {
        label: 'Go to Youtube',
        href: 'https://youtube.com/@NousResearch',
        newTab: true,
      },
    ],
  },
  {
    group: 'Platform',
    title: 'Portal',
    links: [
      {
        label: 'Create account',
        href: 'https://portal.nousresearch.com/login',
      },
      {
        label: 'Sign in',
        href: 'https://portal.nousresearch.com/login',
      },
      {
        label: 'Plans',
        href: 'https://portal.nousresearch.com/manage-subscription',
      },
    ],
  },
];
