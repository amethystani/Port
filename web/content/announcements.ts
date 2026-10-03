export type Announcement = {
  /** Where the card links to (a post on X). */
  url: string;
  image: string;
  handle: string;
  text: string;
  /** Display date, shown as written. */
  date: string;
};

/** Cards in the home page "Announcements" strip, newest first. */
export const announcements: Announcement[] = [
  {
    url: 'https://x.com/NousResearch/status/2106175254771253491',
    image: '/assets/nous-web/announcements/default.webp',
    handle: '@NousResearch',
    text: 'If you missed the shirt, come to NousCon to get swagged up\n\nx.com/nousresearch/s…',
    date: 'Oct 3, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2106162588497186988',
    image: '/assets/nous-web/announcements/default.webp',
    handle: '@NousResearch',
    text: 'We are sold out!',
    date: 'Oct 2, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2106138356937810069',
    image: '/assets/nous-web/announcements/default.webp',
    handle: '@NousResearch',
    text: 'shop.nousresearch.com/products/rebel…',
    date: 'Oct 2, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2106138249496240475',
    image: '/assets/external/pbs.twimg.com/media/HTp-PFNXAAA3HvM.jpg',
    handle: '@NousResearch',
    text: 'THE REBELLION SHIRT\n\n$1 with code REBEL\nLimited edition of 2222, 1 per customer\n\nshop.nousresearch.com/products/rebel…',
    date: 'Oct 2, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2105670993133904292',
    image: '/assets/nous-web/announcements/default.webp',
    handle: '@NousResearch',
    text: 'Hermes is for the wizards x.com/flawedimp/stat…',
    date: 'Oct 1, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2105043777706754213',
    image: '/assets/external/pbs.twimg.com/amplify_video_thumb/2105040416710049792/img/VL3VQAnURr0Eh8sO.jpg',
    handle: '@NousResearch',
    text: 'NousCon 2026\n\nOctober 30th, NYC\n\nluma.com/y0y9ngkm',
    date: 'Sep 29, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2104996721575243822',
    image: '/assets/external/pbs.twimg.com/media/HTZzXKVWcAA3_iM.jpg',
    handle: '@NousResearch',
    text: 'Access the setting under Account Settings &gt; Linked Accounts\n\nportal.nousresearch.com/account-settin…',
    date: 'Sep 29, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2104996715501904173',
    image: '/assets/external/pbs.twimg.com/amplify_video_thumb/2104996661906841601/img/OZOvl8vhiIUM9QEJ.jpg',
    handle: '@NousResearch',
    text: "We've partnered with @OpenAI to bring the new Sign in with ChatGPT experience to Nous Portal.\n\nLog into Nous Portal with ChatGPT to use your plan in Hermes Agent, with full visibility and controls in ChatGPT settings.",
    date: 'Sep 29, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2103244070407802905',
    image: '/assets/external/pbs.twimg.com/amplify_video_thumb/2103243495775379456/img/q0aZGZ6-GooZyMku.jpg',
    handle: '@NousResearch',
    text: 'Web search in Hermes Agent is now fast and free.\n\n@perplexity_ai built Fast Search for agents, and it is free for all Nous Portal tiers.  x.com/perplexitydevs…',
    date: 'Sep 24, 2026',
  },
  {
    url: 'https://x.com/NousResearch/status/2102873237101154321',
    image: '/assets/external/pbs.twimg.com/amplify_video_thumb/2102872869998833664/img/dRyVjabDcrlNKr8e.jpg',
    handle: '@NousResearch',
    text: "Here's a handy walkthrough of the new Bot Screen feature by the illustrious @tonbistudio \n\nDocs: hermes-agent.nousresearch.com/docs/user-guid…",
    date: 'Sep 23, 2026',
  },
];
