/** One entry per blog post. The article body lives in content/posts/<slug>.html. */
export type Post = {
  slug: string;
  /** Headline on the article page (the browser title adds the site name). */
  title: string;
  /** Headline in blog lists and related articles, when it differs from the article headline. */
  cardTitle?: string;
  description: string;
  /** Author as named on the article page. */
  author: string;
  /** Name shown on the blog index and in related-article lists, when it differs from the author above. */
  byline?: string;
  /** Round avatar: letters, a photo, or the Nous badge. */
  avatar: { initials: string } | { image: string } | { badge: true };
  /** ISO timestamp (used for <time> and og:article:published_time). Omitted for undated posts. */
  publishedTime?: string;
  /** Date as displayed, e.g. "April 2025". */
  dateLabel?: string;
  /** Large image under the headline (a few posts have none). */
  cover?: { src: string; alt: string };
  /** Flagship layout (adds a portrait avatar treatment and the version chip). */
  feature?: boolean;
  /** Version chip next to the cover, e.g. "v1.05". */
  version?: string;
  /** Links to standalone interactive pages, shown as "Published visualization N". */
  sourceTools?: string[];
  /** Share-card image when it differs from the cover. */
  ogImage?: string;
  /** Teaser shown on the blog index and in "related articles". */
  excerpt: string;
  /** Featured posts get a large card at the top of /blog. */
  featured?: boolean;
  cardImage?: string;
  /** Load the card image eagerly (the first card is above the fold). */
  eagerCard?: boolean;
  /** Image in other posts' "Related Articles" rows when it differs from the cover; null = no image. */
  thumbnail?: string | null;
  /** Heading id -> label, for sections whose "Contents" entry reads differently from the heading. */
  contentsLabels?: Record<string, string>;
  /** Slugs shown under "Related Articles". */
  related: string[];
};

/** Blog posts in display order: featured first, then the archive (newest first). */
export const posts: Post[] = [
  {
    slug: 'refactoring-hermes-with-1393-agents',
    title: 'Refactoring Hermes with 1,393 agents',
    description:
      'Hermes Agent refactored its own codebase: 1,393 subagents over about nineteen active hours cut non-test Python by 34.4%, for roughly $19,300 in model spend against a $150k-$1.8M estimate for doing it by hand.',
    author: 'Teknium',
    avatar: {
      initials: 'TE',
    },
    publishedTime: '2026-09-15T15:00:00+00:00',
    dateLabel: 'September 2026',
    cover: {
      src: '/assets/external/nousresearch-com-backup.vercel.app/refactoring-hermes-with-1393-agents/banner.webp',
      alt: 'Refactoring Hermes with 1,393 agents',
    },
    ogImage: '/refactoring-hermes-with-1393-agents/banner.webp',
    excerpt:
      'Hermes Agent autonomously plowed through about a million lines of unglamorous cleanup, freeing up Teknium and team to continue pushing features to users....',
    featured: true,
    cardImage:
      '/assets/external/nousresearch-com-backup.vercel.app/refactoring-hermes-with-1393-agents/banner.webp',
    eagerCard: true,
    related: ['neuron-steering', 'lighthouse-attention', 'token-superposition'],
    thumbnail: null,
  },
  {
    slug: 'neuron-steering',
    title: 'Model Neuroscience: Dissecting Behavioral Change With Targeted Contrastive Neuron Attribution',
    description:
      'We introduce contrastive neuron attribution, a method to reliably steer model behavior at high strengths while preserving output quality. Using refusal as a case study, we show how to discover and ablate specific MLP neuron circuits...',
    author: 'Nightwing',
    avatar: {
      image: '/assets/nous-web/blog/article-author.webp',
    },
    publishedTime: '2026-02',
    dateLabel: 'February 2026',
    cover: {
      src: '/assets/nous-web/blog/blogArticles_imgScreenshot20260702At1434222.webp',
      alt: 'Model Neuroscience: Dissecting Behavioral Change With Targeted Contrastive Neuron Attribution',
    },
    feature: true,
    version: 'v1.05',
    excerpt:
      'We introduce contrastive neuron attribution, a method to reliably steer model behavior at high strengths while preserving output quality. Using refusal as a case study, we show how to discover and ablate specific MLP neuron circuits...',
    featured: true,
    cardImage: '/assets/nous-web/blog/blogArticles_imgScreenshot20260702At1434222-card.webp',
    contentsLabels: {
      'user-content-visualization': 'Interactive visualization',
    },
    related: ['lighthouse-attention', 'token-superposition', 'moe-scaling-field-notes'],
  },
  {
    slug: 'lighthouse-attention',
    title: 'Lighthouse Attention',
    description:
      'Lighthouse Attention: a selection-based hierarchical attention that runs ~17x faster than standard attention at 512K context on a single B200, with a 1.4-1.7x end-to-end pretraining speedup at 98K. Symmetric Q/K/V pyramid pooling, parameter-free norm scoring, stock FlashAttention on a dense gather. Validated at 530M Llama-3 with 1M-token training across 32 B200s under context parallelism.',
    author: 'Animesh Mishra',
    avatar: {
      badge: true,
    },
    publishedTime: '2026-05-12T15:00:00+00:00',
    dateLabel: 'May 2026',
    cover: {
      src: '/assets/nous-web/blog/blogArticles_imgImage15.webp',
      alt: 'Lighthouse Attention',
    },
    sourceTools: [
      '/lighthouse-attention/pyramid_pool.html?v=3',
      '/lighthouse-attention/topk_cascade_2.html?v=3',
      '/lighthouse-attention/scatter_back.html?v=3',
    ],
    excerpt:
      'A selection-based hierarchical attention ~17x faster than standard attention at 512K context on a single B200....',
    featured: true,
    cardImage: '/assets/nous-web/blog/blogArticles_imgImage15.webp',
    related: [
      'token-superposition',
      'moe-scaling-field-notes',
      'nouscoder-14b-a-competitive-olympiad-programming-model',
    ],
  },
  {
    slug: 'token-superposition',
    title: 'Efficient pretraining with token superposition',
    description:
      'Token Superposition Training: a 2-3x wall-clock speedup on LLM pretraining at matched FLOPs, with no change to the final model, optimizer, tokenizer, or data.',
    author: 'Animesh Mishra',
    avatar: {
      badge: true,
    },
    publishedTime: '2026-02-01T15:00:00+00:00',
    dateLabel: 'February 2026',
    cover: {
      src: '/assets/nous-web/blog/blogArticles_imgScreenshot20260702At1434223.webp',
      alt: 'Efficient pretraining with token superposition',
    },
    sourceTools: ['/token-superposition/tst-visual-light.html'],
    excerpt:
      'Token Superposition Training (TST) delivers 2-3x wall-clock pretraining speedups at fixed FLOPs....',
    featured: true,
    cardImage: '/assets/nous-web/blog/blogArticles_imgScreenshot20260702At1434223-card.webp',
    related: [
      'moe-scaling-field-notes',
      'nouscoder-14b-a-competitive-olympiad-programming-model',
      'introducing-hermes-4-3',
    ],
  },
  {
    slug: 'introducing-hermes-4-3',
    title: 'Introducing Hermes 4.3: Local Intelligence Globally Trained - ANIMESH MISHRA',
    cardTitle: 'Introducing Hermes 4.3: Local Intelligence Globally Trained',
    description:
      'Today we’re releasing Hermes 4.3 (🤗 Hugging Face), an update to our flagship Hermes series of models. Hermes 4.3 was trained with an extended context length (up to 512K) and nearly matches (and in some cases exceeds) the performance...',
    author: 'ANIMESH MISHRA',
    avatar: {
      badge: true,
    },
    publishedTime: '2025-12-01T19:56:35+00:00',
    dateLabel: 'December 2025',
    cover: {
      src: '/assets/nous-web/blog/blogArticles_imgImage16.webp',
      alt: 'Introducing Hermes 4.3: Local Intelligence Globally Trained - ANIMESH MISHRA',
    },
    excerpt:
      'Today we’re releasing Hermes 4.3 (🤗 Hugging Face), an update to our flagship Hermes series of models. Hermes 4.3 was trained with an extended context length (up to 512K) and nearly matches (and in some cases exceeds) the performance...',
    featured: true,
    cardImage: '/assets/nous-web/blog/blogArticles_imgImage16.webp',
    related: [
      'tinker-atropos-blog',
      'the-next-phase-of-psyche',
      'measuring-thinking-efficiency-in-reasoning-models-the-missing-benchmark',
    ],
  },
  {
    slug: 'moe-scaling-field-notes',
    title: 'Field Notes on Scaling MoE Expert Parallelism with DeepEP',
    description:
      'A worklog documenting the journey of scaling expert parallelism to achieve high-throughput pretraining.',
    author: 'Phuc Nguyen (neuralink)',
    avatar: {
      initials: 'PN',
    },
    publishedTime: '2026-01-20T16:01:50+00:00',
    dateLabel: 'January 2026',
    cover: {
      src: '/assets/nous-web/blog/articles/bluehedMOE2-1024x631.gif',
      alt: 'Field Notes on Scaling MoE Expert Parallelism with DeepEP',
    },
    excerpt:
      'Documenting the journey of scaling expert parallelism to achieve high-throughput pretraining....',
    related: [
      'nouscoder-14b-a-competitive-olympiad-programming-model',
      'introducing-hermes-4-3',
      'tinker-atropos-blog',
    ],
  },
  {
    slug: 'nouscoder-14b-a-competitive-olympiad-programming-model',
    title: 'Introducing NousCoder-14b, a competitive olympiad programming model.',
    cardTitle: 'NousCoder-14B: A Competitive Olympiad Programming Model',
    description:
      'We introduce NousCoder-14B, a competitive olympiad programming model post-trained on Qwen3-14B via reinforcement learning.\n\nThe full stack is released publicly: model weights, open RL environment + eval harness, and @wandb logs; we also document the pipelined verification setup and parallelization experiments so others can reproduce the training stack.',
    author: 'Joe Li',
    avatar: {
      initials: 'JL',
    },
    publishedTime: '2026-01-06T18:48:49+00:00',
    dateLabel: 'January 2026',
    cover: {
      src: '/assets/nous-web/blog/articles/nc2-copy-scaled.jpg',
      alt: 'Introducing NousCoder-14b, a competitive olympiad programming model.',
    },
    excerpt:
      'We introduce NousCoder-14B, a competitive olympiad programming model post-trained on Qwen3-14B via reinforcement learning. The full stack is released publicly: model weights, open RL environment + eval harness, and @wandb logs; we also document the pipelined verification setup and parallelization...',
    related: ['introducing-hermes-4-3', 'tinker-atropos-blog', 'the-next-phase-of-psyche'],
  },
  {
    slug: 'tinker-atropos-blog',
    title:
      'tinker-atropos: An Integration Layer for the Tinker API and Atropos RL Framework - ANIMESH MISHRA',
    cardTitle: 'tinker-atropos: An Integration Layer for the Tinker API and Atropos RL Framework',
    description:
      'The team at Animesh Mishra proudly presents tinker-atropos, our integration layer between the Tinker API and our Atropos reinforcement learning (RL) framework. We designed Atropos to be a fully decoupled environment service, separating concerns around trainer management, rollout collection, and environment setup into three distinct components.\n\nConsequently, we found Tinker to be a perfect fit for this paradigm, providing easier management of the inference weights while remaining as close to a fully on-policy approach as possible. The goal of our integration layer was to enable any Atropos environment to plug into Tinker with minimal, if any, modifications needed. We hope this effort will introduce new Atropos users to the Tinker framework and allow Tinker users to immediately get started with tested and thoughtfully designed environments. Through decoupling training, inference, and trajectory collection, we are able to present a seamless, easy-to-use integration layer between the Tinker API and the Atropos RL framework.',
    author: 'Nightwing',
    avatar: {
      image: '/assets/nous-web/blog/article-author.webp',
    },
    publishedTime: '2025-11-18T01:31:24+00:00',
    dateLabel: 'November 2025',
    cover: {
      src: '/assets/nous-web/blog/articles/G2DHiTVWQAEAgUf.jpg',
      alt: 'tinker-atropos: An Integration Layer for the Tinker API and Atropos RL Framework - ANIMESH MISHRA',
    },
    excerpt:
      'The team at Animesh Mishra proudly presents tinker-atropos, our integration layer between the Tinker API and our Atropos reinforcement learning (RL) framework. We designed Atropos to be a fully decoupled environment service, separating concerns around trainer management, rollout collection, and...',
    related: [
      'the-next-phase-of-psyche',
      'measuring-thinking-efficiency-in-reasoning-models-the-missing-benchmark',
      'steering-the-shoggoth-taming-llms-with-sequential-monte-carlo',
    ],
  },
  {
    slug: 'the-next-phase-of-psyche',
    title: 'The Next Phase of Psyche - ANIMESH MISHRA',
    cardTitle: 'The Next Phase of Psyche',
    description:
      'Starting today, Psyche will train a number of new models in parallel, all aimed at creating useful, novel open source AI.',
    author: 'ANIMESH MISHRA',
    byline: 'Psyche Team',
    avatar: {
      badge: true,
    },
    publishedTime: '2025-09-29T15:58:24+00:00',
    dateLabel: 'September 2025',
    cover: {
      src: '/assets/nous-web/blog/articles/psyche-cover2.png',
      alt: 'The Next Phase of Psyche - ANIMESH MISHRA',
    },
    excerpt:
      'Psyche is an open infrastructure that democratizes AI development by decentralizing training across underutilized hardware. Building on DisTrO and its predecessor DeMo, Psyche reduces data transfer by several orders of magnitude, making distributed training practical. Coordination happens on the Solana...',
    related: [
      'measuring-thinking-efficiency-in-reasoning-models-the-missing-benchmark',
      'steering-the-shoggoth-taming-llms-with-sequential-monte-carlo',
      'nous-psyche',
    ],
  },
  {
    slug: 'measuring-thinking-efficiency-in-reasoning-models-the-missing-benchmark',
    title: 'Measuring Thinking Efficiency in Reasoning Models: The Missing Benchmark - ANIMESH MISHRA',
    cardTitle: 'Measuring Thinking Efficiency in Reasoning Models: The Missing Benchmark',
    description:
      'Large Reasoning Models (LRMs) employ a novel paradigm known as test-time scaling, leveraging reinforcement learning to teach the models to generate extended chains of thought (CoT) during reasoning tasks. This enhances their problem-solving capabilities beyond what their base models could achieve independently.',
    author: 'Azure',
    avatar: {
      initials: 'AZ',
    },
    publishedTime: '2025-08-14T18:07:45+00:00',
    dateLabel: 'August 2025',
    cover: {
      src: '/assets/nous-web/blog/articles/CoT-Blogpost-OG-0a.png',
      alt: 'Measuring Thinking Efficiency in Reasoning Models: The Missing Benchmark - ANIMESH MISHRA',
    },
    excerpt:
      'Large Reasoning Models (LRMs) employ a novel paradigm known as test-time scaling, leveraging reinforcement learning to teach the models to generate extended chains of thought (CoT) during reasoning tasks. This enhances their problem-solving capabilities beyond what their base models could...',
    related: [
      'steering-the-shoggoth-taming-llms-with-sequential-monte-carlo',
      'nous-psyche',
      'introducing-atropos',
    ],
  },
  {
    slug: 'steering-the-shoggoth-taming-llms-with-sequential-monte-carlo',
    title: 'Steering the Shoggoth: Taming LLMs with Sequential Monte Carlo',
    description:
      'In this blog post, we present our findings from an exciting direction in controlling text generation with large language models. We can programmatically define constraints on the output of a model, ensuring it adheres to specific formats or styles, and...',
    author: 'Nightwing',
    avatar: {
      image: '/assets/nous-web/blog/article-author.webp',
    },
    ogImage: '/assets/brand/social-card.png',
    excerpt:
      'In this blog post, we present our findings from an exciting direction in controlling text generation with large language models. We can programmatically define constraints on the output of a model, ensuring it adheres to specific formats or styles, and...',
    related: [
      'nous-psyche',
      'introducing-atropos',
      'introducing-the-forge-reasoning-api-beta-and-nous-chat-an-evolution-in-llm-inference',
    ],
    thumbnail: null,
  },
  {
    slug: 'nous-psyche',
    title: 'Democratizing AI: The Psyche Network Architecture - ANIMESH MISHRA',
    cardTitle: 'Democratizing AI: The Psyche Network Architecture',
    description:
      'Psyche is an open infrastructure that democratizes AI development by decentralizing training across underutilized hardware. Building on DisTrO and its predecessor DeMo, Psyche reduces data transfer by several orders of magnitude, making distributed training practical. Coordination happens on the Solana blockchain, ensuring a fault-tolerant and censorship-resistant network.',
    author: 'Psyche Team',
    avatar: {
      initials: 'PT',
    },
    publishedTime: '2025-05-14T18:58:06+00:00',
    dateLabel: 'May 2025',
    cover: {
      src: '/assets/nous-web/blog/articles/full-psyche-diagram1-scaled.png',
      alt: 'Democratizing AI: The Psyche Network Architecture - ANIMESH MISHRA',
    },
    excerpt:
      'Psyche is an open infrastructure that democratizes AI development by decentralizing training across underutilized hardware. Building on DisTrO and its predecessor DeMo, Psyche reduces data transfer by several orders of magnitude, making distributed training practical. Coordination happens on the Solana...',
    related: [
      'introducing-atropos',
      'introducing-the-forge-reasoning-api-beta-and-nous-chat-an-evolution-in-llm-inference',
      'setting-your-pet-rock-free',
    ],
  },
  {
    slug: 'introducing-atropos',
    title: 'Introducing Atropos - ANIMESH MISHRA',
    cardTitle: 'Introducing Atropos',
    description:
      'Pushing the boundaries of reinforcement learning, particularly in complex environments or with large models, inevitably requires operating at a massive scale. Coordinating thousands of parallel computations efficiently becomes paramount.',
    author: 'Ryan Carlow',
    byline: 'ANIMESH MISHRA',
    avatar: {
      initials: 'RC',
    },
    publishedTime: '2025-04-29T02:39:51+00:00',
    dateLabel: 'April 2025',
    cover: {
      src: '/assets/nous-web/blog/articles/atropos-1024x772.png',
      alt: 'Introducing Atropos - ANIMESH MISHRA',
    },
    excerpt:
      'Atropos is designed to reliably coordinate generation tasks across potentially thousands of distributed workers. It interfaces seamlessly with standard inference APIs for straightforward integration....',
    related: [
      'introducing-the-forge-reasoning-api-beta-and-nous-chat-an-evolution-in-llm-inference',
      'setting-your-pet-rock-free',
      'from-black-box-to-glass-house-the-imperative-for-transparent-ai-development',
    ],
  },
  {
    slug: 'introducing-the-forge-reasoning-api-beta-and-nous-chat-an-evolution-in-llm-inference',
    title:
      'Introducing the Forge Reasoning API Beta and Nous Chat: An Evolution in LLM Inference - ANIMESH MISHRA',
    cardTitle: 'Introducing the Forge Reasoning API Beta and Nous Chat: An Evolution in LLM Inference',
    description:
      'The Forge Reasoning API contains some of our latest advancements in inference-time AI research, building on our journey from the original Hermes model.',
    author: 'ANIMESH MISHRA',
    avatar: {
      badge: true,
    },
    publishedTime: '2024-11-08T15:59:06+00:00',
    dateLabel: 'November 2024',
    cover: {
      src: '/assets/nous-web/blog/articles/image-1024x319.png',
      alt: 'Introducing the Forge Reasoning API Beta and Nous Chat: An Evolution in LLM Inference - ANIMESH MISHRA',
    },
    excerpt:
      'At Animesh Mishra we’re launching two new projects: the Forge Reasoning API Beta and Nous Chat, a simple chat platform featuring the Hermes language model. The Forge Reasoning API contains some of our advancements in inference-time AI research, building on...',
    related: [
      'setting-your-pet-rock-free',
      'from-black-box-to-glass-house-the-imperative-for-transparent-ai-development',
      'freedom-at-the-frontier-hermes-3',
    ],
  },
  {
    slug: 'setting-your-pet-rock-free',
    title: 'Setting Your Pet Rock Free. - ANIMESH MISHRA',
    cardTitle: 'Setting Your Pet Rock Free.',
    description:
      'A social experiment on how to deploy provably, fully-autonomous thinking sand. The quest for truly autonomous AI agents faces a fundamental challenge: how can researchers prove that an AI is truly autonomous, with no human pulling the strings...',
    author: 'Karan Malhotra',
    byline: 'Teleport (a Flashbots[X] project)',
    avatar: {
      initials: 'KM',
    },
    publishedTime: '2024-10-29T22:54:12+00:00',
    dateLabel: 'October 2024',
    cover: {
      src: '/assets/nous-web/blog/articles/rockblog09-1024x345.png',
      alt: 'Setting Your Pet Rock Free. - ANIMESH MISHRA',
    },
    excerpt:
      'A social experiment on how to deploy provably, fully-autonomous thinking sand. The quest for truly autonomous AI agents faces a fundamental challenge: how can researchers prove that an AI is truly autonomous, with no human pulling the strings...',
    related: [
      'from-black-box-to-glass-house-the-imperative-for-transparent-ai-development',
      'freedom-at-the-frontier-hermes-3',
      'the-instruct-monomyth',
    ],
  },
  {
    slug: 'from-black-box-to-glass-house-the-imperative-for-transparent-ai-development',
    title: 'From Black Box to Glass House: The Imperative For Transparent AI Development - ANIMESH MISHRA',
    cardTitle: 'From Black Box to Glass House: The Imperative For Transparent AI Development',
    description:
      'The world is abuzz with talk of AI, a technology that has become an integral part of life for many. However, as AI approaches at breakneck speed, it’s natural that people are scared. This fear is understandable, but it’s also...',
    author: 'HERMES 3',
    avatar: {
      initials: 'H3',
    },
    publishedTime: '2024-10-21T16:01:02+00:00',
    dateLabel: 'October 2024',
    cover: {
      src: '/assets/nous-web/blog/articles/MaxfieldSafety04-1024x562.png',
      alt: 'From Black Box to Glass House: The Imperative For Transparent AI Development - ANIMESH MISHRA',
    },
    excerpt:
      'The world is abuzz with talk of AI, a technology that has become an integral part of life for many. However, as AI approaches at breakneck speed, it’s natural that people are scared. This fear is understandable, but it’s also...',
    related: [
      'freedom-at-the-frontier-hermes-3',
      'the-instruct-monomyth',
      'dsjjjj-simulacra-in-the-stupor-of-becoming',
    ],
  },
  {
    slug: 'freedom-at-the-frontier-hermes-3',
    title: 'Freedom at the Frontier: Hermes 3 - ANIMESH MISHRA',
    cardTitle: 'Freedom at the Frontier: Hermes 3',
    description:
      'Closed-source, “frontier” models today lack flexibility and adaptability. Many refuse to answer simple questions, hallucinate an authority’s form of morality, or require convoluted prompts in order to trigger a coherent answer. It’s impossible to nudge these models towards individual personalization,...',
    author: 'ARIA',
    avatar: {
      initials: 'AR',
    },
    publishedTime: '2024-08-15T03:15:22+00:00',
    dateLabel: 'August 2024',
    cover: {
      src: '/assets/nous-web/blog/articles/hermes3-768x768.png',
      alt: 'Freedom at the Frontier: Hermes 3 - ANIMESH MISHRA',
    },
    excerpt:
      'Closed-source, “frontier” models today lack flexibility and adaptability. Many refuse to answer simple questions, hallucinate an authority’s form of morality, or require convoluted prompts in order to trigger a coherent answer. It’s impossible to nudge these models towards individual personalization,...',
    related: [
      'the-instruct-monomyth',
      'dsjjjj-simulacra-in-the-stupor-of-becoming',
      'refactoring-hermes-with-1393-agents',
    ],
  },
  {
    slug: 'the-instruct-monomyth',
    title: 'The Instruct Monomyth: why base models matter - ANIMESH MISHRA',
    cardTitle: 'The Instruct Monomyth: why base models matter',
    description:
      'There is a deep, twisty labyrinth buried under a mountain of language, of symbol manipulation, and semantic nets. Its roots reach down deep into the Earth, absorbing the minutia of current thought, the limitations of logic, the constrained realm of...',
    author: 'ANIMESH MISHRA',
    byline: 'DESIDERATA',
    avatar: {
      badge: true,
    },
    publishedTime: '2024-07-29T21:52:10+00:00',
    dateLabel: 'July 2024',
    cover: {
      src: '/assets/nous-web/blog/articles/IMG_2009-2-1024x603.jpeg',
      alt: 'The Instruct Monomyth: why base models matter - ANIMESH MISHRA',
    },
    excerpt:
      'There is a deep, twisty labyrinth buried under a mountain of language, of symbol manipulation, and semantic nets. Its roots reach down deep into the Earth, absorbing the minutia of current thought, the limitations of logic, the constrained realm of...',
    related: [
      'dsjjjj-simulacra-in-the-stupor-of-becoming',
      'refactoring-hermes-with-1393-agents',
      'neuron-steering',
    ],
  },
  {
    slug: 'dsjjjj-simulacra-in-the-stupor-of-becoming',
    title: 'DSJJJJ: Simulacra in the Stupor of Becoming - ANIMESH MISHRA',
    cardTitle: 'DSJJJJ: Simulacra in the Stupor of Becoming',
    description:
      'Desideratic AI (DSJJJJ) is a philosophical movement focused on creating AI systems using concepts traditionally found in monism, mereology, and philology. Desidera aim to create AI that can act as better versions of themselves by reflecting upon their own nature...',
    author: 'DESIDERATA',
    avatar: {
      initials: 'DE',
    },
    publishedTime: '2024-03-16T03:29:57+00:00',
    dateLabel: 'March 2024',
    cover: {
      src: '/assets/nous-web/blog/articles/52f887d88ef18045.png',
      alt: 'DSJJJJ: Simulacra in the Stupor of Becoming - ANIMESH MISHRA',
    },
    excerpt:
      'Desideratic AI (DSJJJJ) is a philosophical movement focused on creating AI systems using concepts traditionally found in monism, mereology, and philology. Desidera aim to create AI that can act as better versions of themselves by reflecting upon their own nature...',
    related: ['refactoring-hermes-with-1393-agents', 'neuron-steering', 'lighthouse-attention'],
  },
];
