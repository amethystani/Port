import { portfolio } from './portfolio';
export type JobSection = { heading: string; items: string[] };

export type Job = {
  slug: string;
  title: string;
  /** One-line description shown in the roles list. */
  summary: string;
  /** Shown as a tag in the roles list, e.g. "Full time". */
  employment: string;
  location: string;
  /** Small line above the title on the job page, e.g. "Full time, Remote". */
  eyebrow: string;
  /** Intro paragraphs under the title. */
  intro: string[];
  sections: JobSection[];
  /** Subject line of the application email. */
  subject: string;
};

export const jobs: Job[] = [
  {
    slug: 'office-manager',
    title: 'Office Manager',
    summary: 'Run day-to-day operations of the New York office.',
    employment: 'Full time',
    location: 'New York',
    eyebrow: 'Full time, New York',
    intro: [
      'Nous is opening its first dedicated Office Manager role to support its growing New York presence. The right person will bring calm, high-agency execution to a fast-moving, opinionated, research-driven culture, someone who anticipates needs, communicates proactively, and takes ownership without needing to be told twice.',
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Own the day-to-day operations of the New York office: space setup and buildout coordination, vendor and facilities management, supplies, IT/equipment logistics, and general office upkeep.',
          'Serve as the welcoming front door for the NYC office: greeting visitors, coordinating candidate and team member on-site visits, and helping make in-person days feel intentional for an otherwise remote team.',
          'Provide executive assistant support to founders/leadership: calendar management, meeting scheduling and prep, travel booking, and expense reporting.',
          'Plan and execute internal events, offsites, team gatherings, and all-hands logistics.',
          'Manage office budget, vendor contracts, and relationships with building management/landlord.',
          'Support onboarding logistics for new NYC-based hires (equipment, desk setup, first-week coordination).',
          'Act as a proactive operational problem-solver: flag issues early, communicate clearly, and follow through without heavy oversight.',
          'Take on ad hoc operations and administrative projects as Nous scales.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '3+ years of experience in office management, executive assistance, or operations, ideally at a startup or fast-growing company.',
          'Based in or willing to work from New York City; comfortable with an in-office role.',
          "Excellent judgment and discretion; you'll be trusted with sensitive information and leadership's time.",
          'Strong proactive communicator: Nous explicitly values people who ask instead of guess, clarify instead of assume, and give updates instead of going quiet.',
          'Highly organized, detail-oriented, and comfortable juggling multiple priorities in a fast-changing environment.',
          'Comfortable in a high-agency, opinionated culture: flexible problem solvers who push to figure things out, even outside their core lane, thrive here.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Deep passion, knowledge, or interest for AI and open-source models',
          "Genuine enthusiasm for Nous's mission and products, ideally you've used Hermes Agent, Nous Portal, or Nous Chat yourself.",
          'Experience opening or standing up a new office space.',
          'Experience supporting founders or C-suite executives directly.',
          'Familiarity with distributed/remote-first teams and the specific challenges of building in-person culture within one.',
        ],
      },
    ],
    subject: 'Office Manager',
  },
  {
    slug: 'machine-learning-engineer-evals',
    title: 'Machine Learning Engineer, Evals',
    summary: 'Build eval infrastructure, benchmarks, and judge calibration for agent capabilities.',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      "You'll work across the lab on agent capability evals, benchmark design, LLM-as-judge systems, failure analysis, and the infrastructure that ties it together. This is a high-growth, high-ownership role on a small team, and you'll ship evaluation infrastructure that researchers depend on from day one.",
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Run the full eval pipeline end to end and reproduce known results during onboarding, pairing with a senior engineer on your first task',
          'Build a judge calibration protocol: sample human-labeled decisions, measure agreement (κ, per-class P/R), identify drift zones, and document it so anyone can re-run it',
          'Extend an existing benchmark (GAIA, τ-Bench, SWE-bench slice, etc.) with new tasks targeting known capability gaps, including the prompt, environment, rubric, automated grader, and QA',
          'Run failure analysis on model outputs: categorize failure modes, quantify prevalence, and write up findings with recommendations for training data, judge prompts, or benchmark changes',
          'Own a recurring eval workflow (weekly regression suite, judge drift dashboard, red-team evaluation for a new capability) and ship tooling researchers actually use',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '3+ years in software engineering, ML engineering, data science, or a research-adjacent role, with concrete evaluation experience from coursework, an internship, a side project, open source work, or a job',
          'Experience with at least one LLM evaluation framework (Harbor, Nemo Evaluator, etc.), with real opinions on what it does well and where it falls short',
          'Hands-on experience with LLMs: prompting, few-shot design, and ideally fine-tuning or RAG; regular use of coding agents',
          'Solid Python. You write clean, tested, version-controlled code that a colleague could run without you babysitting it',
          'Comfort with Git, CI/CD basics, Docker, and the Linux command line (SSH, tmux, debugging a remote job)',
          "Understanding of basic eval statistics: why accuracy misleads on imbalanced judges, what Cohen's κ measures, how to think about confidence intervals on a metric",
          "At least 3 of the following: you can explain why LLM-as-judge needs calibration; you've done failure analysis and can tell model bugs apart from prompt, grader, or retrieval issues; you know at least two agent benchmarks (GAIA, AgentBench, τ-Bench, MINT, SWE-bench, WebShop, ALFWorld) and a limitation of each; you've designed or extended an eval dataset with happy paths, edge cases, and adversarial examples; you've thought about non-determinism in eval, how you sample, how many runs, how you report variance",
          'You communicate clearly to both researchers and engineers, in the right language for each',
          "You're comfortable with ambiguity, can turn a half-formed request into a plan, and know when to ask for help",
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'RLVR / RLHF pipeline experience',
          'Training data curation experience',
          'Distributed eval orchestration experience',
          'Benchmark design from scratch',
          'Red teaming and adversarial eval experience',
          'Familiarity with psychometrics or measurement theory',
        ],
      },
    ],
    subject: 'Machine Learning Engineer, Evals',
  },
  {
    slug: 'software-engineer',
    title: 'Software Engineer',
    summary: "A general application for strong engineers who span teams and don't fit one vertical.",
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      "If you're a great engineer with a wide-ranging skill set, we want you to apply and join the team. You'll help us build Hermes Agent, Nous Portal, and other infrastructure that powers Animesh Mishra. A lot of our team is made up of generalist engineers, and people like this tend to fit really well here.",
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Product surfaces people touch every day across Hermes Agent and Nous Portal, on web, desktop, and mobile.',
          'Backend services and APIs that hold up under real usage.',
          'The cloud platform and infrastructure behind our products and model serving.',
          'Developer and research tooling that makes the rest of the team faster.',
          'Whatever the highest-leverage problem is that quarter, which is not always predictable at a company moving this fast.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '3+ years building and shipping production software that real people depend on.',
          'Depth in at least one area (frontend, backend, infrastructure, systems, or ML tooling) and the range to work outside it.',
          "Fluency in the languages we use day to day, mainly TypeScript and Python, and comfort reaching for a systems language like Rust when it's the right call.",
          'Strong ownership: you see something broken or missing and you fix it without waiting to be asked.',
          'Heavy use of AI-assisted development in your own workflow.',
          "Clear communication and low ego, because the team is small and everyone reads each other's code.",
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience with AI products, LLM applications, agents, or tool-calling workflows.',
          "Open-source contributions, or side projects you're proud enough to show us.",
          'Familiarity with modern AI infrastructure: PyTorch, OpenAI-compatible APIs, model routing, or inference.',
        ],
      },
    ],
    subject: 'Software Engineer',
  },
  {
    slug: 'software-engineer-infrastructure',
    title: 'Software Engineer, Infrastructure',
    summary: 'Build and operate the infrastructure that powers Hermes Agent, Nous Portal, and model serving.',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      "As a Software Engineer on the Infrastructure team, you'll own the platform and infrastructure that powers Hermes Agent, Nous Portal, and our model serving. You'll design and build the systems, deployment pipelines, and platform services that keep our products reliable, scalable, and easy to operate.",
      "This role spans infrastructure and platform engineering, with room to ship product where it counts. You'll work closely with Product, Research, and Engineering to keep everything from inference to agent execution running smoothly as usage grows.",
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Design, build, and operate the infrastructure and platform behind Hermes Agent, Nous Portal, and our managed AI services.',
          'Own systems end-to-end across backend services, platform infrastructure, deployment pipelines, and the tooling that supports them.',
          'Architect scalable, reliable infrastructure that supports inference, agent execution, model serving, and enterprise deployments.',
          'Build and improve CI/CD pipelines, deployment workflows, and infrastructure-as-code to accelerate engineering velocity.',
          'Implement observability, monitoring, alerting, incident response, and reliability improvements across production systems.',
          'Optimize infrastructure performance, scalability, and cost as product usage grows.',
          'Evaluate and integrate third-party infrastructure and managed services where appropriate, balancing speed, reliability, and long-term maintainability.',
          'Collaborate closely with Research, Product, and Engineering teams to support new AI capabilities and production launches.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '3+ years of software engineering experience with significant ownership of infrastructure or platform systems.',
          'Strong programming skills in one or more of TypeScript/Node.js, Python, Go, or Rust.',
          'Hands-on experience with modern cloud platforms such as AWS, Azure, or GCP.',
          'Experience with containerization, orchestration, and deployment technologies including Docker and Kubernetes.',
          'Familiarity with CI/CD systems, infrastructure-as-code, observability, monitoring, and production incident response.',
          'Strong software engineering fundamentals with the ability to build across backend, infrastructure, and platform systems.',
          'Excellent problem-solving skills and the ability to operate effectively in a fast-moving environment.',
          'Curiosity about AI infrastructure and enthusiasm for building reliable systems that support cutting-edge AI applications.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience operating high-throughput, latency-sensitive distributed systems.',
          'Familiarity with LLM infrastructure, inference systems, or OpenAI-compatible APIs.',
          'Experience with serverless platforms, managed cloud infrastructure, or multi-cloud deployments.',
          'Experience building or operating AI infrastructure, model serving platforms, or agent systems.',
          'Contributions to open-source software or the AI ecosystem.',
          'Experience optimizing production systems for reliability, scalability, and cost efficiency.',
        ],
      },
    ],
    subject: 'Software Engineer, Infrastructure',
  },
  {
    slug: 'software-engineer-mobile',
    title: 'Software Engineer, Mobile',
    summary: 'Help build a beautiful Hermes Agent mobile app',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      'Join the Product team building Hermes Agent on mobile. This role owns the phone experience end to end: the native iOS and Android apps, the shared cross-platform layer behind them, and the backend work that makes the agent feel fast and reliable in your pocket.',
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Build and own the Hermes Agent mobile apps on iOS and Android, from UI down to the APIs that feed them.',
          'Ship native-quality experiences: smooth interaction, offline resilience, push notifications, and responsible battery and data use.',
          'Work across the mobile stack, from Swift/Kotlin where it counts to a cross-platform layer (React Native or similar) where it speeds us up, and help decide where each fits.',
          'Partner closely with Product and Design to turn ideas into polished mobile features, then iterate on real usage data.',
          'Handle the app-store realities: release pipelines, review processes, versioning, and staged rollouts.',
          'Keep the mobile experience consistent with desktop and web without flattening what makes each platform good.',
          'Build automated testing that keeps releases reliable across devices and OS versions.',
          'Work with Research and AI teams to bring new model capabilities into the mobile app.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '5+ years of software engineering experience with a strong focus on mobile.',
          'Shipped and maintained production iOS and/or Android apps that real people use.',
          'Strong with native mobile development (Swift, Kotlin, or both) and comfortable with a cross-platform framework like React Native.',
          'Solid backend and API sense: you can build the endpoints your app needs, not just consume them. TypeScript/Node.js or Python experience is a plus.',
          'Real product intuition and a high bar for how a mobile app should look and feel.',
          'Comfortable owning features end to end in a fast-moving environment.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience with app-store submission, review, and release management on both platforms.',
          'Familiarity with offline-first architecture, local storage, and sync.',
          "Interest in AI agents and open-source software; bonus if you've used Hermes Agent yourself.",
          'Experience integrating with LLM or streaming APIs on mobile.',
        ],
      },
    ],
    subject: 'Software Engineer, Mobile',
  },
  {
    slug: 'software-engineer-product',
    title: 'Software Engineer, Product',
    summary: 'Help build the customer-facing surfaces of Hermes Agent and Nous Portal',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      'Join the Product team building the customer-facing surfaces of Nous Portal, Hermes Agent, and the products around them across mobile, desktop, and web. This role centers on the everyday Hermes Agent experience people interact with, wherever they use it.',
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Build and own customer-facing product experiences across Hermes Agent and Nous Portal on desktop, web, and mobile.',
          'Develop full-stack features spanning frontend applications, backend APIs, and supporting services.',
          'Partner closely with Product and Design to create polished, intuitive user experiences with exceptional performance and reliability.',
          'Build cross-platform experiences that feel native to each environment while maintaining a consistent product experience.',
          'Translate product ideas into production features quickly, then iterate based on customer feedback and usage data.',
          'Contribute product ideas and engineering perspectives throughout the product development process.',
          'Solve complex technical challenges across the stack while maintaining high standards for code quality and maintainability.',
          'Design, implement, and maintain automated testing that ensures reliability across releases.',
          'Collaborate with Research and AI teams to bring new model capabilities into customer-facing products.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '7+ years of full-stack software engineering experience building and shipping production software.',
          'Proven track record developing customer-facing products used by real users.',
          'Strong experience building modern web applications with TypeScript, Node.js, React, or similar frontend technologies.',
          'Proficiency in Python and comfort working with systems programming languages such as Rust.',
          'Experience building software across multiple platforms, including desktop, web, or mobile.',
          'Strong product intuition and attention to UX, interaction design, and visual polish.',
          'Excellent collaboration skills with designers, product managers, and fellow engineers.',
          'Curiosity, strong ownership, and the ability to thrive in a fast-moving engineering environment.',
          'Extensive use of AI-assisted development tools to increase engineering productivity and quality.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience building cross-platform products from a shared codebase or design system.',
          'Experience with AI products, LLM applications, AI agents, or tool-calling workflows.',
          'Familiarity with PyTorch, OpenAI-compatible APIs, model routing, or modern AI infrastructure.',
          'Contributions to open-source software or AI developer tools.',
          'Strong portfolio of personal projects demonstrating technical curiosity and product craftsmanship.',
        ],
      },
    ],
    subject: 'Software Engineer, Product',
  },
  {
    slug: 'forward-deployed-engineer',
    title: 'Forward Deployed Engineer',
    summary: 'Deploy and adapt Hermes Agent Enterprise inside customer environments.',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      "As a Forward Deployed Engineer at Animesh Mishra, you'll deploy and adapt Hermes Agent Enterprise inside complex customer environments. You'll partner directly with enterprise customers to understand their workflows, integrate internal systems, and deliver production-ready AI solutions that solve real business problems.",
      "You'll work across engineering, infrastructure, and customer teams to bridge the gap between cutting-edge AI research and reliable enterprise deployments. This is an ideal role for someone who enjoys solving ambiguous technical challenges, working closely with customers, and shipping high-impact solutions.",
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Deploy Hermes Agent Enterprise across cloud, on-premises, and hybrid customer environments.',
          'Integrate enterprise APIs, internal data sources, authentication systems, and business applications into agent workflows.',
          'Partner directly with customers to scope requirements, implement solutions, and iterate based on feedback.',
          'Debug and resolve production issues across infrastructure, orchestration, integrations, and AI application layers.',
          'Build reusable deployment patterns, tooling, and best practices that improve implementation speed and reliability.',
          'Collaborate with engineering and research teams to influence product direction based on customer needs.',
          'Improve deployment observability, monitoring, and operational tooling to support production AI systems.',
          'Document deployment architectures, integration guides, and customer implementation patterns.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '5+ years of software engineering or solutions engineering experience building and deploying production systems.',
          'Experience working directly with enterprise customers or cross-functional stakeholders to deliver technical solutions.',
          'Strong debugging skills across distributed systems, backend services, and cloud infrastructure.',
          'Comfortable working across backend engineering, infrastructure, APIs, and AI application layers.',
          'Excellent communication skills with the ability to translate complex technical concepts into practical customer solutions.',
          'Entrepreneurial mindset with the ability to thrive in fast-moving, ambiguous environments.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience with Docker, Kubernetes, and modern cloud infrastructure.',
          'Familiarity with LLMs, AI agents, RAG systems, or model orchestration frameworks.',
          'Experience integrating enterprise systems such as CRMs, data warehouses, internal APIs, or identity providers.',
          'History of shipping customer-facing technical solutions in enterprise or infrastructure-focused environments.',
        ],
      },
    ],
    subject: 'Forward Deployed Engineer',
  },
  {
    slug: 'product-analytics-engineer',
    title: 'Product Analytics Engineer',
    summary: 'Own the measurement systems that help us understand how users interact with Hermes Agent.',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      "As a Product Analytics Engineer at Animesh Mishra, you'll own the measurement systems that help us understand how users interact with Hermes Agent. You'll build the analytics foundation across our products, from instrumentation and event pipelines to dashboards and experimentation, then use that data to identify opportunities to improve activation, engagement, retention, and long-term product success.",
      "You'll partner closely with Product, Engineering, Design, Support, and Leadership to turn behavioral insights into concrete product improvements. This role is ideal for someone who enjoys building reliable analytics infrastructure while also using data to influence product strategy and execution.",
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Own product analytics end-to-end, from event design and instrumentation through data modeling, analysis, and product recommendations.',
          'Define and maintain a consistent event taxonomy and shared metrics layer across Hermes Agent and Nous Portal.',
          'Implement and maintain analytics instrumentation across desktop, mobile, web, CLI, backend services, and third-party integrations.',
          'Build reliable data pipelines, transformations, dashboards, and monitoring systems that make product behavior easy to understand and trust.',
          'Analyze user funnels, cohorts, retention, behavioral paths, and churn to identify friction points and opportunities for improvement.',
          'Segment user behavior across platforms, acquisition channels, pricing plans, models, tools, and use cases to uncover actionable insights.',
          'Design and evaluate experiments, measuring the impact of product changes on activation, engagement, retention, conversion, and revenue.',
          'Partner with Product, Engineering, Design, and Support to translate data into prioritized product improvements.',
          'Combine quantitative analysis with qualitative feedback from users, customer conversations, and direct product usage to develop a complete understanding of user behavior.',
          'Build monitoring and alerting systems for key product metrics and proactively investigate anomalies.',
          'Establish best practices for analytics instrumentation, documentation, data quality, and privacy-conscious telemetry.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '5+ years of experience in Product Analytics, Analytics Engineering, Data Engineering, or a similarly technical product role.',
          'Expert SQL skills and strong proficiency in Python, with experience working in production application codebases using TypeScript, JavaScript, or similar languages.',
          'Hands-on experience implementing analytics instrumentation across client applications and backend systems.',
          'Experience with modern product analytics platforms such as PostHog, Amplitude, or Mixpanel, along with data warehouses and BI tools.',
          'Deep understanding of product metrics including activation, engagement, retention, churn, experimentation, and funnel analysis.',
          'Strong analytical and problem-solving skills with the ability to trace issues from dashboards through underlying systems and instrumentation.',
          'Excellent communication skills and the ability to translate complex behavioral data into clear product recommendations.',
          'Entrepreneurial mindset, strong ownership, and the ability to operate effectively in a fast-moving environment.',
          'Extensive use of AI-assisted development and analysis to improve speed, depth, and quality of work.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience working on AI products, LLM applications, AI agents, or developer tools.',
          'Familiarity with agent workflows, tool calling, model routing, memory systems, and other modern AI application patterns.',
          'Experience measuring cross-platform products spanning desktop, mobile, web, CLI, and enterprise deployments.',
          'Experience with subscription or usage-based SaaS products, including conversion, credits, renewals, and monetization.',
          'Experience designing privacy-conscious telemetry and analytics systems for open-source or developer-focused products.',
          'Experience building analytics systems that support high-volume event streams and rapidly growing products.',
        ],
      },
    ],
    subject: 'Product Analytics Engineer',
  },
  {
    slug: 'security-engineer',
    title: 'Security Engineer',
    summary: 'Own security end-to-end across infrastructure, products, and enterprise deployments.',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      "As a Security Engineer at Animesh Mishra, you'll own security end-to-end across our infrastructure, products, and enterprise deployments. Nous builds open-source AI language models and agents, including Hermes Agent, which is used by consumers and Fortune 500 enterprises across multi-tenant SaaS, dedicated VPC, self-hosted, and air-gapped environments.",
      "This is a hands-on-keyboard role for someone who wants to harden multi-cloud infrastructure, secure a novel agentic AI platform, and build the security foundation regulated enterprise customers demand. You'll be the person focused full-time on protecting the company while helping the rest of the team continue shipping quickly.",
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Own production security across a multi-cloud footprint spanning AWS, GCP, Azure, and Vercel.',
          'Secure multi-tenant SaaS, dedicated VPC, self-hosted Kubernetes, and air-gapped deployments.',
          'Secure the Hermes Agent platform across sandboxing, kernel-level file system and network isolation, agent identity, credential controls, egress controls, and trace integrity.',
          'Own SOC 2 technical controls, evidence collection, remediation, and ongoing readiness.',
          'Harden identity and access management, including SSO and SAML consolidation, least-privilege access reviews, 2FA, and BYOD policies.',
          'Lead vulnerability management, penetration testing, incident response, and cloud-native security monitoring.',
          'Strengthen the secure software development lifecycle through practical controls, including peer-review requirements, while maintaining high development velocity.',
          'Support enterprise deals by completing security questionnaires, leading architecture reviews, and addressing penetration-testing requirements.',
          'Partner across engineering, infrastructure, product, FDE, and operations to identify and address security risks.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '8+ years of security engineering experience, with deep hands-on expertise in infrastructure and multi-cloud security.',
          'Track record securing production SaaS environments and owning security end-to-end at a fast-growing technology company.',
          'Strong Kubernetes, identity, and IAM fundamentals, including familiarity with enterprise SSO, SAML, and SCIM.',
          'Experience implementing compliance-driven engineering programs such as SOC 2 or ISO 27001 without allowing them to become checkbox exercises.',
          'Strong understanding of vulnerability management, incident response, access controls, penetration testing, and secure software development practices.',
          'Interest in securing agentic AI systems and addressing emerging risks across agent identity, tool permissions, prompt injection, and data provenance.',
          'Ability to work effectively in a high-velocity, open-source-native engineering culture.',
          'Security-minded by default and pragmatic in practice, with strong judgment around balancing protection and development speed.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience supporting regulated customers, financial services organizations, or air-gapped deployments.',
          'Prior experience securing AI, machine learning, or open-source systems.',
          'Experience with detection and response tooling in cloud-native environments.',
          'Familiarity with kernel-level sandboxing, network isolation, and agent security.',
          'Experience supporting Fortune 500 security reviews, architecture assessments, and penetration-testing requirements.',
        ],
      },
    ],
    subject: 'Security Engineer',
  },
  {
    slug: 'support-engineer',
    title: 'Support Engineer',
    summary:
      'Own the interface between our users and the systems behind Hermes Agent, from hands-on fixes to the tooling that scales support.',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      "Nous is building at the frontier of agentic AI, and we're looking for a Support Engineer to own the critical interface between our users and the systems behind that work. You'll solve issues hands-on, drive fixes with engineers, and build the tooling, automation, and feedback loops that help support scale with a fast-moving product.",
      "This is an individual contributor role with broad ownership: from answering tickets and implementing straightforward fixes to improving how we prioritize issues, coordinate escalations, and measure support quality. There's room for this person to grow into shaping and leading a support organization as Nous scales.",
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Own support requests from initial response through resolution, keeping users informed and following through on every open thread.',
          'Investigate technical issues, reproduce bugs, and develop a clear understanding of the systems and workflows behind them.',
          'Implement straightforward fixes and practical workarounds where appropriate.',
          'Partner with engineers to prioritize and schedule larger fixes, providing clear reproduction steps, technical context, and customer impact.',
          'Build tools and automation that improve triage, investigation, communication, and follow-up.',
          'Establish support metrics, surface trends, and define goals for queue health, responsiveness, resolution, and customer experience.',
          'Turn recurring issues into improvements to the product, documentation, and support process.',
          'Help shape the processes and operating practices that will support a growing support organization.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          'Experience in technical support or support engineering within a medium to large support organization, with strong organizational habits and polished customer communication.',
          'A track record of understanding complex software systems and methodically investigating unfamiliar technical problems.',
          'Practical coding skills and experience building useful scripts, personal tools, or internal utilities.',
          'Strong judgment about what to resolve independently, when to involve engineers, and how to make an escalation actionable.',
          'Clear, empathetic communication with both technical and nontechnical users, including when an issue is unresolved or priorities change.',
          'Consistent follow-through: you track commitments, coordinate handoffs, and close the loop without repeated reminders.',
          'Ability to bring structure to an evolving support function and improve processes independently.',
          'Availability to work US time zone hours.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience improving support workflows, building support automation, or introducing metrics and reporting.',
          'Experience mentoring support engineers, leading a support team, or helping build a support function.',
          'Familiarity with AI agents, LLM applications, open-source software, or developer tools.',
        ],
      },
    ],
    subject: 'Support Engineer',
  },
  {
    slug: 'product-manager-hermes-business',
    title: 'Product Manager, Hermes Business',
    summary:
      'Own the Hermes Enterprise roadmap and packaging across managed Hermes Business and customer-controlled Hermes Enterprise.',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      "Hermes Agent is an open, self-improving agent used by a fast-growing global community. Companies now want to give Hermes to their whole workforce, deployed on infrastructure they control, with the models they choose and the knowledge their people create staying with them. Hermes Enterprise is how we get there: managed Hermes Business for teams that want to start quickly, and customer-controlled Hermes Enterprise that runs in a company's own cloud or on premises.",
      'You will own what enterprise customers get, in what order and whether it works for them. The first enterprise rollouts are happening now, so you will shape the product while it meets its first customers. Like every role here, this one is a mission, not a narrow lane.',
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Own the Hermes Enterprise roadmap and packaging across managed Hermes Business and customer-controlled Hermes Enterprise, with a clear line between what is available today, what is in development and what is planned.',
          'Define and ship the enterprise foundations: repeatable fleet deployment, SSO and directory provisioning, workspace isolation, audit, administration and telemetry.',
          'Own Hermes Enterprise Workforce, the administration experience for provisioning employees and their agents, managing permissions and seeing health and usage across the fleet.',
          'Turn Spend Intelligence from visibility into decisions: help customers see which workloads consume budget, which models perform them and where a lower-cost model delivers the same quality.',
          "Turn Collective Wisdom into a shipped, governed product. Help each employee's agent capture useful methods as skills and, with permission, share them across the company, so a new hire can benefit from the best subject matter expert on day one.",
          'Shape how companies retain and use their own traces, from measuring which work matters most to laying the groundwork for company-specific models over time.',
          'Define how employees reach their agents across the CLI, desktop and messaging surfaces, with Slack and Microsoft Teams as the first enterprise work surfaces.',
          'Run design partner deployments with customers and our forward deployed engineers. Turn what you learn into clear specs, tickets and acceptance criteria that engineering can ship.',
          'Write the deployment playbook: what a customer agrees to at kickoff, how the first employee group is onboarded, and what it means for a deployment to be live and healthy.',
          'Work with cloud and marketplace partners on how Hermes Enterprise is packaged, procured and deployed on their platforms.',
          'Define the metrics that show enterprise value, including activation, active agents, skills reused and cost per completed task, and use them to set priorities.',
          'Run the roadmap in Jira with clear owners, due dates and status, and distill it into simple recaps for executives: what shipped, what is next, what is at risk and which decisions are needed.',
          'Collaborate closely with Engineering, Research, Design, Security, Business Development and the open source community to keep the enterprise product aligned with Hermes Agent.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          '5+ years of product management experience, including shipping B2B products to large enterprise customers.',
          'Hands-on experience owning enterprise foundations such as SSO, SCIM, role-based access, audit logs, admin consoles or usage analytics.',
          'Experience with products deployed in customer clouds, on premises or as single-tenant SaaS, and an understanding of the operational responsibilities that come with them.',
          'Strong technical fluency with LLMs and AI agents. You use them daily, can read code and can reason about models, tools, evaluations and cost.',
          'A track record of working directly with customers and turning ambiguous requirements into clear, prioritized plans.',
          'Excellent written communication. You can write a spec engineers trust and a customer update executives understand.',
          'Fluency with Jira or similar tracking tools, and comfort distilling a complex roadmap into a simple executive recap.',
          'Comfort operating with little structure on a small, fast-moving team, and a bias toward shipping.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Former software engineer, or a software engineering background.',
          'Experience at an open source or developer infrastructure company that sells both a managed cloud and a self-hosted product.',
          'Experience with identity providers and directories such as Microsoft Entra ID, Okta or Google Workspace.',
          'Experience launching or operating offers through cloud marketplaces such as Azure, Google Cloud or AWS.',
          'Experience with AI spend management, model routing, evaluations or usage-based pricing.',
          'Experience building knowledge-sharing, workflow or agent products used across large organizations.',
          'Contributions to open-source software or the AI ecosystem, or projects you have built with Hermes Agent.',
        ],
      },
    ],
    subject: 'Product Manager, Hermes Business',
  },
  {
    slug: 'product-manager-hermes-agent',
    title: 'Product Manager, Hermes Agent',
    summary: 'Own the day-to-day product direction and execution for Hermes Agent.',
    employment: 'Full time',
    location: 'Remote',
    eyebrow: 'Full time, Remote',
    intro: [
      'You will own the day-to-day product direction and execution for Hermes Agent, working directly with the Co-Founder to decide what we build, in what order and whether it works for the people using it. This is a hands-on role: you will connect product ambition to clear priorities, help engineering ship and stay close to the community using Hermes every day. Like every role here, this one is a mission, not a narrow lane.',
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Own the Hermes Agent roadmap, working with the Head of Product to turn product direction into a clear, prioritized plan.',
          'Run day-to-day product execution, from defining problems and writing specs to coordinating releases and checking whether shipped features deliver the intended result.',
          'Use Hermes Agent daily. Understand where it succeeds, where it breaks down and what would make people trust it with more of their work.',
          'Own the user journey from installation and setup to a first useful task and sustained use. Identify friction and work with Engineering and Design to remove it.',
          'Turn community feedback, user conversations, issues and usage data into product decisions. Distinguish recurring needs from one-off requests and make the tradeoffs clear.',
          'Define how agent capabilities become useful product experiences, including how Hermes uses tools, develops reusable skills and works with different models.',
          'Partner with Engineering and Research to evaluate agent behavior. Set acceptance criteria that account for task completion, reliability, speed and cost.',
          'Keep releases focused and moving. Make scope decisions, resolve dependencies and surface risks early enough for the team to act.',
          'Define the metrics that show whether Hermes is becoming more useful, including activation, repeat use and successful task completion, and use them to set priorities.',
          'Keep the roadmap and execution plan current, with clear owners and status. Write simple recaps of what shipped, what is next, what is at risk and which decisions are needed.',
          'Collaborate with the open source community and the Hermes Enterprise team so improvements to the core agent support the people and organizations building on it.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          'Product management experience at a company, with a track record of taking products or substantial features from an ambiguous problem through launch and iteration.',
          'A software engineering background. You can read code, understand system behavior and work through technical tradeoffs with engineers.',
          'Hands-on experience building or shipping AI agent products. You understand how models, tools, context and evaluations affect the user experience.',
          'Strong product judgment. You can identify the most important problem, make a clear decision and explain what should wait.',
          'The ability to lead as an individual contributor, creating clarity and momentum across a team without relying on reporting lines.',
          'Excellent written communication. You can write a spec engineers can build from and a product update the rest of the company can understand.',
          'Comfort owning both product direction and the daily work required to ship on a small, fast-moving team.',
          'Meaningful working-hours overlap with the US team.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Experience building an open source product or working closely with a developer community.',
          'Experience improving onboarding, activation and retention for a product people choose and adopt themselves.',
          'Experience designing evaluations for agent reliability and real-world task completion.',
          'Contributions to the AI ecosystem, or tools, workflows and projects you have built with Hermes Agent.',
        ],
      },
    ],
    subject: 'Product Manager, Hermes Agent',
  },
  {
    slug: 'controller',
    title: 'Controller',
    summary:
      'Own the accounting function and help build the in-house finance team behind our models, infrastructure, and products.',
    employment: 'Full time',
    location: 'New York',
    eyebrow: 'Full time, New York',
    intro: [
      'You will work directly with the Head of Finance to build the systems, reporting and financial discipline behind the business. You will also partner with Product and Engineering to help define product strategy, pricing and business models.',
      'You will own the day-to-day accounting function and help bring work currently handled by external providers in-house, including the monthly close, reporting, accounts payable and accounts receivable. This is a hands-on role with a meaningful voice in financial and operating decisions. Like every role here, this one is a mission, not a narrow lane.',
    ],
    sections: [
      {
        heading: 'Responsibilities',
        items: [
          'Own the monthly, quarterly and annual close. Build a repeatable process with clear deadlines, accurate reconciliations and financial statements the business can rely on.',
          'Lead the transition of accounting responsibilities from external providers to the internal finance team, preserving continuity and establishing clear ownership.',
          'Prepare financial statements in accordance with US GAAP. Own accounting policies, document significant judgments and keep the supporting records organized and current.',
          'Run accounts payable and accounts receivable, including vendor payments, customer billing, collections and the reconciliation of activity across accounting and payment systems.',
          'Own day-to-day cash accounting and visibility. Partner with the Head of Finance on cash forecasting, working capital and upcoming obligations.',
          'Coordinate tax preparation and compliance with external advisers, ensuring accurate records, timely filings and clear accountability.',
          'Build practical financial controls around spending, approvals, payments and access to financial systems.',
          'Own audit preparation and coordinate with external accountants and auditors. Maintain schedules and documentation that make the business ready for review.',
          'Develop reporting that explains business performance, including revenue, expenses, budget variances and the drivers behind them.',
          'Partner with Product and Engineering to evaluate pricing, product economics and business models. Translate technical and operating decisions into clear financial implications.',
          'Improve the systems and workflows connecting the ledger, billing, payments and expense management. Automate recurring work where it improves accuracy and gives the team time back.',
          'Work with the Head of Finance on budgets, forecasts and financial models, connecting reliable accounting data to operating decisions.',
        ],
      },
      {
        heading: 'Qualifications',
        items: [
          'An active CPA credential.',
          '6+ years of accounting and finance experience, including Controller or Assistant Controller experience in technology.',
          'Hands-on ownership of the close, US GAAP reporting, account reconciliations and audit preparation.',
          'Strong technical accounting judgment and the ability to explain financial implications to people outside finance.',
          'Strong spreadsheet and financial modeling skills, with the ability to build models that support practical business decisions.',
          'Experience with QuickBooks, Stripe, Ramp or comparable accounting, billing and spend management systems.',
          'Willingness to handle day-to-day accounting work while building the processes and systems that help the function scale.',
          'The ability to prioritize independently, follow through on details and work closely with a small team.',
          'Availability to work in US time zones.',
        ],
      },
      {
        heading: 'Preferred',
        items: [
          'Controller or broader finance experience at a SaaS company.',
          'Experience bringing accounting in-house or managing a transition from an outsourced provider.',
          'Experience with subscription or usage-based revenue models, including the connection between billing, revenue recognition and reporting.',
          'Experience partnering with Product and Engineering on pricing, margins or product investment decisions.',
          'Experience building a finance function at an early-stage or fast-growing technology company.',
        ],
      },
    ],
    subject: 'Controller',
  },
];

/** What candidates are asked to include (identical on every job page). */
export const applicationChecklist: string[] = [
  'The role you are applying for in the subject',
  'Resume or CV',
  'Cover letter',
  'A portfolio showcasing your work',
];

export const recruitingEmail = portfolio.email;
