/** Content of the dropdown panels opened by the header's Nous / Hermes / Community / Portal triggers. */
export type NavLink = {
  label: string;
  /** Dimmed lead-in before the label, e.g. "For" in "For Business". */
  muted?: string;
  description?: string;
  href: string;
  newTab?: boolean;
};

export type NavSection = {
  /** Small label above the heading, e.g. "Product". */
  category: string;
  heading: string;
  links: NavLink[];
  /** Product shots shown beside the links (the merch section). */
  merch?: string[];
};

export type PromoKind = 'hermes' | 'portal' | 'nous';
export type NavPanelName = 'Nous' | 'Hermes' | 'Community' | 'Portal';
export type NavPanel = { promo: PromoKind; sections: NavSection[] };

export const navPanels: Record<NavPanelName, NavPanel> = {
  Nous: {
    promo: 'hermes',
    sections: [
      {
        category: 'Resources',
        heading: 'Nous',
        links: [
          {
            label: 'Releases',
            description: 'Applied AI research',
            href: '/releases',
          },
          {
            label: 'Careers',
            description: 'Open roles at NousResearch',
            href: '/careers',
          },
          {
            label: 'Blog',
            description: 'Latest articles from the team',
            href: '/blog',
          },
        ],
      },
      {
        category: 'Merch',
        heading: 'Shop',
        links: [
          {
            label: 'Visit Store',
            href: 'https://shop.nousresearch.com',
            newTab: true,
          },
        ],
        merch: [
          '/assets/nous-web/composer/menuCode_imgBlueteefront1.webp',
          '/assets/nous-web/composer/menuCode_imgSweaterfront1.webp',
        ],
      },
    ],
  },
  Hermes: {
    promo: 'hermes',
    sections: [
      {
        category: 'Product',
        heading: 'Hermes',
        links: [
          {
            label: 'Agent',
            description: 'The agent that grows with you',
            href: 'https://hermes-agent.nousresearch.com',
            newTab: true,
          },
          {
            label: 'Business',
            muted: 'For',
            description: 'Hermes Teams, for startups to SMEs',
            href: 'https://portal.nousresearch.com/business',
            newTab: true,
          },
          {
            label: 'Enterprise',
            muted: 'For',
            description: 'Your collective wisdom frontier model',
            href: 'https://portal.nousresearch.com/business#hermes-pro',
            newTab: true,
          },
          {
            label: 'Cloud',
            muted: 'In the',
            description: 'Run Hermes Remote and 24/7',
            href: 'https://portal.nousresearch.com/cloud',
            newTab: true,
          },
          {
            label: 'Documents',
            description: 'FAQs, how to’s and guides to your Hermes',
            href: 'https://hermes-agent.nousresearch.com/docs',
            newTab: true,
          },
        ],
      },
      {
        category: 'Agent',
        heading: 'Install',
        links: [
          {
            label: 'Terminal',
            muted: 'Via',
            description: 'Install Hermes via terminal',
            href: 'https://hermes-agent.nousresearch.com/#install',
            newTab: true,
          },
          {
            label: 'Mac OS',
            muted: 'For',
            description: 'Download desktop app for mac os',
            href: 'https://hermes-agent.nousresearch.com/#install',
            newTab: true,
          },
          {
            label: 'Windows',
            muted: 'For',
            description: 'Download desktop app for windows',
            href: 'https://hermes-agent.nousresearch.com/#install',
            newTab: true,
          },
          {
            label: 'Linux',
            muted: 'For',
            description: 'Download desktop app for linux',
            href: 'https://hermes-agent.nousresearch.com/#install',
            newTab: true,
          },
        ],
      },
    ],
  },
  Community: {
    promo: 'hermes',
    sections: [
      {
        category: 'Resources',
        heading: 'Community',
        links: [
          {
            label: 'Discord',
            muted: 'Go to',
            description: 'Community support',
            href: 'https://discord.gg/nousresearch',
            newTab: true,
          },
          {
            label: 'GitHub',
            muted: 'Go to',
            description: 'Get the docs and code',
            href: 'https://github.com/NousResearch',
            newTab: true,
          },
          {
            label: 'x.com',
            muted: 'Go to',
            description: 'Releases and announcements',
            href: 'https://x.com/NousResearch',
            newTab: true,
          },
        ],
      },
    ],
  },
  Portal: {
    promo: 'portal',
    sections: [
      {
        category: 'Platform',
        heading: 'Portal',
        links: [
          {
            label: 'Overview',
            description: 'Power your Hermes agent',
            href: 'https://portal.nousresearch.com/',
            newTab: true,
          },
          {
            label: 'Plans',
            description: 'Subscription, plans, and top ups',
            href: 'https://portal.nousresearch.com/manage-subscription',
            newTab: true,
          },
          {
            label: 'Referrals',
            description: 'Our Nous Portal referral programme',
            href: 'https://portal.nousresearch.com/',
            newTab: true,
          },
        ],
      },
      {
        category: 'Account',
        heading: 'Access',
        links: [
          {
            label: 'Sign in',
            description: 'Continue securely on Nous Portal',
            href: 'https://portal.nousresearch.com/login',
            newTab: true,
          },
          {
            label: 'New Account',
            description: 'Create a new account via portal to power Hermes',
            href: 'https://portal.nousresearch.com/signup',
            newTab: true,
          },
        ],
      },
    ],
  },
};

/** The rotating banner at the top of every panel (use the arrows to cycle). */
export const promos = [
  {
    kind: 'hermes',
    art: 'wing',
    label: 'Install Hermes',
    text: 'The agent that grows with you. Download for Mac/Windows/Linux',
    href: 'https://hermes-agent.nousresearch.com/',
    external: true,
  },
  {
    kind: 'portal',
    art: 'portal',
    label: 'Nous Portal',
    text: 'One Account. Hundreds of Models. Everything to Power Hermes Agent.',
    href: 'https://portal.nousresearch.com/',
    external: true,
  },
  {
    kind: 'nous',
    art: 'nous',
    label: 'Nous Careers',
    text: 'Join us at the frontier of open source AI.',
    href: '/careers',
    external: false,
  },
] as const satisfies readonly {
  kind: PromoKind;
  art: string;
  label: string;
  text: string;
  href: string;
  external: boolean;
}[];
