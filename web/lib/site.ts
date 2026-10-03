/**
 * Site-wide settings. Change these first when adapting the project: name, description, share image
 * and the public URL (set NEXT_PUBLIC_SITE_URL in production).
 */
export const site = {
  name: 'Nous Research',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  description:
    'Nous Research is a pioneer in open AI training and research. We created Hermes Agent, the most widely used open source agent harness in the world.',
  ogImage: '/assets/nous-web/social-card.png',
  favicon: '/logo-favicon.png',
  sameAs: [
    'https://x.com/NousResearch',
    'https://github.com/NousResearch',
    'https://huggingface.co/NousResearch',
  ],
} as const;
