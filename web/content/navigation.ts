/** Top navigation. Each label opens a panel in the research-navigation dropdown (see ResearchNavigation). */
export const navigation = {
  left: ['Nous', 'Hermes'],
  right: ['Community', 'Portal'],
} as const;

export const socials = [
  { label: 'Discord', href: 'https://discord.gg/nousresearch' },
  { label: 'X', href: 'https://x.com/NousResearch' },
  { label: 'GitHub', href: 'https://github.com/NousResearch' },
] as const;
