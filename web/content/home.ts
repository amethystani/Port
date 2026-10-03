export type MissionRow = { eyebrow: string; heading: string; body: string; image: string; reverse?: boolean };

export const mission = {
  /** Screen-reader title; the visible one is the MissionTitle lettering. */
  title: "The Internet's Own AI",
  heroImage: '/assets/nous-web/mission-reference/mission-header.webp',
  rows: [
    {
      eyebrow: 'Open Source',
      heading: 'Leading the American Open Source Movement',
      body: 'We train models, build agents, and develop infrastructure to accelerate adoption of open intelligence globally.',
      image: '/assets/nous-web/mission-reference/mission-duo-1.webp',
    },
    {
      eyebrow: 'Mission',
      heading: 'Advancing Human Rights and Freedoms',
      body: "We believe that powerful AI should be in the hands of the many rather than the privileged few. Our aim is to create and democratize access to the world's best intelligence.",
      image: '/assets/nous-web/mission-reference/mission-duo-2.webp',
      reverse: true,
    },
    {
      eyebrow: 'Research',
      heading: 'Understanding the Intelligence Frontier',
      body: 'Our primary research focus areas include agents, model architecture, data synthesis, fine-tuning, and reasoning, all aimed at advancing our understanding of models and how they can benefit humanity.',
      image: '/assets/nous-web/mission-reference/mission-duo-3.webp',
    },
  ] satisfies MissionRow[],
};

type Cta = { label: string; href: string };

export type HermesFeature = {
  /** Picks the artwork treatment in CSS (data-kind). */
  kind: 'terminal' | 'desktop' | 'portal';
  eyebrow: { desktop: string; mobile: string };
  title: string;
  image: string;
  /** Desktop and mobile show different call-to-action wording and targets. */
  cta: { desktop: Cta; mobile: Cta };
};

export const hermesFeatures: HermesFeature[] = [
  {
    kind: 'terminal',
    eyebrow: { desktop: 'TUI', mobile: 'TUI' },
    title: 'Terminal Velocity',
    image: '/assets/nous-web/mobile-home/product-terminal.png',
    cta: {
      desktop: {
        label: 'Install via terminal',
        href: 'https://hermes-agent.nousresearch.com/docs/getting-started/installation#without-hermes-desktop',
      },
      mobile: { label: 'Install via terminal', href: 'https://hermes-agent.nousresearch.com/' },
    },
  },
  {
    kind: 'desktop',
    eyebrow: { desktop: 'Desktop', mobile: 'GUI' },
    title: 'Hermes Application',
    image: '/assets/nous-web/mobile-home/product-desktop.webp',
    cta: {
      desktop: { label: 'Get Hermes Desktop', href: 'https://hermes-agent.nousresearch.com/#downloads' },
      mobile: { label: 'Download for Mac / Windows / Linux', href: 'https://hermes-agent.nousresearch.com/' },
    },
  },
  {
    kind: 'portal',
    eyebrow: { desktop: 'Portal', mobile: 'Portal' },
    title: 'Nous Portal',
    image: '/assets/nous-web/mobile-home/product-portal.webp',
    cta: {
      desktop: { label: 'Power your Hermes', href: 'https://portal.nousresearch.com/login' },
      mobile: { label: 'Power your Hermes', href: 'https://portal.nousresearch.com/' },
    },
  },
];
