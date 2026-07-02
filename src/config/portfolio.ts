import {
  Code2,
  FileCode,
  Atom,
  Zap,
  Paintbrush,
  Wind,
  GitBranch,
  Github,
  Smartphone,
  Palette,
  Box,
  CheckCircle,
  TestTube2,
  Gauge,
  Timer,
  Globe,
  Database,
  Cloud,
  MessageSquare,
  Folder,
  Puzzle,
  Users,
  Linkedin,
  Instagram,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { StaticImageData } from "next/image";
import toi from "../assets/toi.png";
import screener from "../assets/screener.png";
import mm from "../assets/mm.png";
import adlob from "../assets/adlob.png";
import funpark from "../assets/funpark.png";
import ecommerce from "../assets/ecommerce.png";
import spotify from "../assets/spotify.png";
import libsilong from "../assets/libsilong.png";
import screenr_long from "../assets/screenr_long.png";
import portfolio from "../assets/aquib-portfolio.png";
import woovet from "../assets/woovet.png";
// Personal Information
export const personalInfo = {
  name: "Aquib Yazdani",
  displayName: "aquib yazdani",
  role: "Sr. Software Engineer",
  title:
    "Senior Software Engineer | React • Next.js • TypeScript • Frontend Architecture • AI Integration",
  heroTagline: "Sr. Software Engg. / JavaScript Expert / Tech Explorer",
  tagline: "a Sr. Software Engineer",
  location: "Pune, India",
  email: "yazdaniaquib2@gmail.com",
  phone: "+91 8210773776",
  copyright: `© ${new Date().getFullYear()} Aquib Yazdani`,
  careerStartDate: "2021-06-01",
  professionalSummary:
    "Senior Software Engineer with 5 years of experience shipping production-grade React applications at scale. Engineered the Times of India ePaper platform within the Times Group digital ecosystem (10M+ digital DAU, 60M+ app MAU) and the American Arbitration Association's legal-tech arbitration platform (180K+ annual cases). Specialized in frontend architecture, micro-frontends, performance engineering, AI/LLM integration, and accessibility. Consistent track record of end-to-end ownership across high-traffic products, leading direct reports, and conducting senior-level technical interviews. Currently deepening work in AI-integrated frontend systems and edge rendering patterns.",
};

// Social Links
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/aquibyazdani/",
  github: "https://github.com/aquibyazdani/",
  instagram: "https://www.instagram.com/aquibyazdani/",
};

// About Me
export const aboutMe = {
  intro: `Passionate Software Engineer with Deep Frontend Expertise`,

  background: `I care deeply about clean architecture, usability, and creating meaningful digital products. I build end-to-end solutions that integrate seamlessly from UI to backend. Outside of programming, I enjoy playing football, photography, and a few rounds of Valorant.`,

  capabilitiesDescription: `I am always learning and expanding my toolkit — from React performance patterns and AI/LLM integration to WCAG accessibility and modern build tooling. Here's what I bring to the table today.`,

  homeAboutBlurb: `I work as a senior software engineer with deep frontend expertise, building scalable products from UI to backend.`,

  philosophy: ``,

  yearOfExperience: "6+",
  projectsCompleted: "50+",
  happyClients: "30+",
};

// Skills
export const skills = {
  // Legacy keys used by About.tsx
  frontend: [
    { name: "React.js", icon: Atom },
    { name: "React Native", icon: Smartphone },
    { name: "Next.js", icon: Zap },
    { name: "JavaScript (ES6+)", icon: Code2 },
    { name: "TypeScript", icon: FileCode },
    { name: "HTML", icon: FileCode },
    { name: "CSS", icon: Paintbrush },
    { name: "SCSS", icon: Paintbrush },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Material UI", icon: Palette },
    { name: "Bootstrap", icon: Palette },
  ],
  stateManagement: [
    { name: "Redux", icon: Box },
    { name: "Context API", icon: Box },
    { name: "Zustand", icon: Box },
  ],
  testing: [
    { name: "Jest", icon: CheckCircle },
    { name: "React Testing Library", icon: TestTube2 },
    { name: "Cypress", icon: TestTube2 },
    { name: "Playwright", icon: TestTube2 },
  ],
  performance: [
    { name: "SSR", icon: Zap },
    { name: "SSG", icon: Zap },
    { name: "Component Reusability", icon: Puzzle },
    { name: "UI Optimization", icon: Gauge },
    { name: "Load Time Reduction", icon: Timer },
    { name: "Accessibility Improvements", icon: Users },
  ],
  api: [
    { name: "RESTful APIs", icon: Globe },
    { name: "GraphQL", icon: Database },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "Azure", icon: Cloud },
    { name: "GitLab", icon: GitBranch },
    { name: "Bitbucket", icon: GitBranch },
    { name: "Jira", icon: Folder },
    { name: "Slack", icon: MessageSquare },
    { name: "ProofHub", icon: Folder },
  ],

  // Resume-exact skill categories matching PDF
  languages: [
    { name: "JavaScript (ES6+)", icon: Code2 },
    { name: "TypeScript", icon: FileCode },
    { name: "HTML5", icon: FileCode },
    { name: "CSS3", icon: Paintbrush },
    { name: "SCSS", icon: Paintbrush },
  ],
  resumeFrontend: [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Zap },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Material UI", icon: Palette },
    { name: "Styled Components", icon: Paintbrush },
    { name: "Framer Motion", icon: Zap },
    { name: "Bootstrap", icon: Palette },
    { name: "Storybook", icon: Folder },
  ],
  resumeBackend: [
    { name: "Node.js", icon: Code2 },
    { name: "Express.js", icon: Code2 },
    { name: "REST APIs", icon: Globe },
    { name: "GraphQL", icon: Database },
    { name: "WebSockets", icon: Globe },
  ],
  architecture: [
    { name: "Micro-Frontends", icon: Puzzle },
    { name: "Webpack Module Federation", icon: Puzzle },
    { name: "SSR", icon: Zap },
    { name: "SSG", icon: Zap },
    { name: "ISR", icon: Zap },
    { name: "BFF Pattern", icon: Puzzle },
    { name: "Design Systems", icon: Palette },
    { name: "Component-Driven Development", icon: Box },
  ],
  stateAndData: [
    { name: "Redux", icon: Box },
    { name: "Redux Toolkit", icon: Box },
    { name: "Zustand", icon: Box },
    { name: "Context API", icon: Box },
    { name: "React Query", icon: Database },
  ],
  aiAndDevTools: [
    { name: "Claude API", icon: MessageSquare },
    { name: "LLM Integration", icon: MessageSquare },
    { name: "Streaming Responses", icon: Zap },
    { name: "Prompt Engineering", icon: MessageSquare },
    { name: "GitHub Copilot", icon: Github },
    { name: "Cursor", icon: Code2 },
    { name: "Claude Code", icon: MessageSquare },
  ],
  webPerformance: [
    { name: "Core Web Vitals (LCP, INP, CLS)", icon: Gauge },
    { name: "Lighthouse", icon: Gauge },
    { name: "Code Splitting", icon: Timer },
    { name: "Lazy Loading", icon: Timer },
    { name: "List Virtualization", icon: Gauge },
    { name: "Bundle Analysis", icon: Gauge },
    { name: "CDN", icon: Cloud },
  ],
  buildAndTooling: [
    { name: "Vite", icon: Zap },
    { name: "Webpack", icon: Box },
    { name: "Babel", icon: Code2 },
    { name: "ESLint", icon: CheckCircle },
    { name: "Prettier", icon: Paintbrush },
  ],
  cloudAndDevOps: [
    { name: "AWS (S3, CloudFront)", icon: Cloud },
    { name: "Netlify", icon: Cloud },
  ],
  qualityAndWeb: [
    { name: "WCAG 2.1 Accessibility", icon: Users },
    { name: "i18n / Localization", icon: Globe },
    { name: "SEO", icon: Globe },
    { name: "Web Speech API", icon: MessageSquare },
    { name: "Google Analytics", icon: Gauge },
    { name: "GTM", icon: Gauge },
  ],
  collaborationSkills: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "GitLab", icon: GitBranch },
    { name: "Jira", icon: Folder },
    { name: "Agile/Scrum", icon: Users },
    { name: "Code Reviews", icon: CheckCircle },
    { name: "Mentoring", icon: Users },
    { name: "Technical Interviewing", icon: Users },
  ],
  // kept for About.tsx legacy usage
  frameworks: [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Zap },
    { name: "React Native", icon: Smartphone },
    { name: "Express.js", icon: Code2 },
  ],
  uiAndStyling: [
    { name: "Tailwind CSS", icon: Wind },
    { name: "Material UI", icon: Palette },
    { name: "Styled Components", icon: Paintbrush },
    { name: "Bootstrap", icon: Palette },
    { name: "Framer Motion", icon: Zap },
  ],
  authAndSecurity: [
    { name: "Auth0", icon: CheckCircle },
    { name: "OAuth 2.0", icon: CheckCircle },
    { name: "OIDC", icon: CheckCircle },
    { name: "SAML", icon: CheckCircle },
    { name: "JWT", icon: CheckCircle },
    { name: "Multi-Tenant SSO", icon: Users },
    { name: "RBAC", icon: Users },
  ],
  aiIntegration: [
    { name: "Claude API", icon: MessageSquare },
    { name: "LLM Integration", icon: MessageSquare },
    { name: "Streaming Responses", icon: Zap },
    { name: "Prompt Engineering", icon: MessageSquare },
  ],
  aiDevTools: [
    { name: "GitHub Copilot", icon: Github },
    { name: "Claude Code", icon: MessageSquare },
    { name: "Cursor", icon: Code2 },
  ],
};

// Work Experience
export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Zensar Technologies",
    location: "Pune, India",
    period: "Jun 2025 – Present",
    responsibilities: [
      "Own end-to-end frontend for the AAA Digital Dispute Resolution platform, a legal-grade arbitration system for the American Arbitration Association (largest US arbitration administrator, ~88% market share, 180K+ annual cases) spanning case filings, evidence workflows, hearings, and arbitrator verdicts.",
      "Architected the multi-step case submission module in React and TypeScript with chunked document uploads, draft auto-persistence, schema-driven validation, and role-based UI states, replacing a fragmented legacy flow and stabilizing the platform's highest-traffic intake surface.",
      "Integrated the Claude API into arbitration dashboards with streaming responses and structured prompt design, auto-summarizing 30 to 60 page case documents into expandable navigable briefs, substantially reducing arbitrator first-pass review time and surfacing critical case context within seconds.",
      "Shipped a multi-tenant Auth0 SSO platform end-to-end (POC to production) across 3 tenant configurations, with a custom token-exchange layer, Universal Login, RBAC, and tenant-aware routing, now serving as the centralized authentication layer across multiple internal applications.",
      "Contributing to a micro-frontend modernization via Webpack Module Federation, enabling independent team deploys, shared runtime dependencies, and incremental migration away from a large legacy monolith without a big-bang rewrite.",
      "Migrated legacy build configuration to Vite, reducing build times from approximately 90 seconds to under 20 seconds (4.5x faster) and cutting HMR feedback to sub-second, directly improving team-wide development throughput.",
      "Refactored prop-drilled, unstable UI to Zustand with reusable selectors and sliced stores across filters, pagination, and async data flows, eliminating redundant re-renders and stabilizing the highest-churn screens.",
      "Established Jest and React Testing Library coverage across filter logic, role-based rendering, and async workflows, preventing regressions during weekly production releases.",
      "Drove WCAG 2.1 AA compliance via keyboard navigation, ARIA semantics, focus management, and screen-reader support, critical for legal workflows where accessibility is statutorily required.",
      "Conducted 20+ senior-level frontend interviews, led team-wide PR reviews, and mentored junior engineers, directly contributing to hiring quality and delivery velocity.",
    ],
  },
  {
    id: 2,
    title: "Software Development Engineer II",
    company: "Harns Technologies",
    location: "Mumbai, India",
    period: "Jun 2021 – Jun 2025",
    responsibilities: [
      "Owned and shipped the Times of India ePaper platform from scratch to production, part of the Times Group digital ecosystem (10M+ digital DAU, 60M+ app MAU; India's #1 English daily).",
      "Extended the ePaper architecture to launch 3 additional regional ePapers on the same platform, with a shared React component library and frontend architecture reused across all editions and a standalone Archive application.",
      "Spearheaded Adlob end-to-end, Times of India's unified advertisement booking platform used by 200+ media agencies, built from scratch on React with virtualized calendar inventory grids, campaign creation workflows, and booking management.",
      "Resolved a rendering bottleneck on archive views with dense paginated data through list virtualization and lazy hydration, bringing DOM render time from ~20s to under 1s and unblocking the archive product launch.",
      "Engineered the ePaper on React with SSR, Context API, Google AdSense, GTM, and analytics integrations supporting ad-revenue monetization; built a text-to-speech reader via the Web Speech API for accessible audio consumption.",
      "Delivered advanced multi-keyword archive search across years of historical editions with boolean operators, date ranges, and edition filters, enabling deep content discovery for readers and researchers.",
      "Achieved strong Lighthouse and Core Web Vitals scores across ePaper through code splitting, lazy loading, image optimization, and route-level prefetching; drove WCAG 2.1 AA compliance for a mass-market news audience.",
      "Migrated a US-based Veterinary SaaS serving 50+ hospitals from a legacy stack to Next.js; delivered core modules of Libsi Markah multilingual e-commerce (payment flow, product pages, cart) on Next.js and Redux Toolkit.",
      "Built a custom CMS for podcast and post management, enabling editorial teams to self-serve content publishing and removing engineering as a bottleneck.",
      "Mentored and led a team of 5 frontend engineers as direct reports, directing task planning, code reviews, delivery timelines, and growth conversations.",
      "Owned on-call coverage during peak-traffic production releases for major national events including general elections and the Union Budget, collaborating directly with engineering leadership and the CEO to ensure zero-downtime delivery.",
    ],
  },
];

// Education
export const education = [
  {
    id: 1,
    institution: "Heritage Institute Of Technology, Kolkata",
    degree: "B.Tech, Chemical Engineering",
    period: "2016 – 2020",
  },
];

// Resume Notable Projects
export const resumeNotableProjects = [
  {
    id: 1,
    title: "WooVet",
    url: "https://www.woovet.com/",
    techStack: "Next.js, TypeScript",
    description:
      "AI-powered veterinary practice management platform (PIMS) serving 50+ hospitals. Features AI-assisted clinical diagnostics (Coggo Assess), voice-driven SOAP note generation (Coggo Voice), and a real-time clinic management whiteboard. Migrated from a legacy stack to Next.js, delivering a modern, performant frontend.",
  },
  {
    id: 2,
    title: "Libsi Markah",
    url: "https://libsimarkah.com/",
    techStack: "Next.js, Redux Toolkit",
    description:
      "Multilingual e-commerce platform covering payment flow, product pages, and cart. Implemented SEO-friendly practices and delivered localization across multiple languages.",
  },
];

// ─── Unified Projects ────────────────────────────────────────────────────────
// Single source of truth for all projects across homepage and projects page.
// types: "featured" → homepage Featured Projects
//        "notable"  → /projects Notable Projects
//        "personal" → /projects Personal Projects
// A project can have multiple types; images key provides the right asset per context.

export type ProjectType = "featured" | "notable" | "personal";

export type UnifiedProject = {
  id: number;
  title: string;
  shortTitle?: string;
  types: ProjectType[];
  url: string;
  year?: string;
  role?: string;
  techStack?: string[];
  images: {
    featured?: StaticImageData;
    notable?: StaticImageData;
    personal?: StaticImageData;
  };
  featured?: {
    description: string;
    client?: string | null;
    badge: string;
    linkLabel: string;
    alt: string;
  };
  notable?: {
    achievements: string[];
  };
};

export const projects: UnifiedProject[] = [
  // ── Featured order: TOI → Libsi Markah → Woovet → Memorable Mumbai → Zamzam ──────
  {
    id: 1,
    title: "TOI Epaper (Times of India)",
    types: ["featured", "notable"],
    url: "https://epaper.indiatimes.com/",
    year: "2022",
    role: "Lead Frontend Engineer",
    techStack: ["React.js", "Redux", "Bootstrap", "REST APIs"],
    images: { featured: toi, notable: toi },
    featured: {
      description:
        "Developed and maintained a high-traffic ePaper platform accessed by thousands daily. Built a reusable component library to streamline frontend development, reducing development time by 30% through efficient language management and implementing cross-browser compatibility features.",
      client: "Times of India",
      badge: "Professional",
      linkLabel: "Live Demo",
      alt: "Times of India ePaper platform — high-traffic digital newspaper serving 10M+ daily active users",
    },
    notable: {
      achievements: [
        "Developed and maintained a high-traffic ePaper platform accessed by thousands daily.",
        "Reduced development time by 30% using efficient language management and reusable components.",
        "Built a reusable component library to streamline frontend development.",
        "Integrated RESTful APIs for real-time updates, ensuring smooth content delivery.",
        "Implemented cross-browser compatibility and accessibility features.",
        "Integrated Google Ads and Google Analytics.",
      ],
    },
  },
  {
    id: 2,
    title: "Libsi Markah E-commerce",
    types: ["featured", "notable"],
    url: "https://libsimarkah.com/",
    year: "2025",
    role: "Key Developer",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS (EC2)"],
    images: { featured: libsilong, notable: libsilong },
    featured: {
      description:
        "Built a multilingual e-commerce platform covering payment flow, product pages, and cart on Next.js and Redux Toolkit. Improved operational efficiency by 30%, reduced manual intervention by 20%, and implemented SEO-friendly practices to improve search rankings and organic traffic.",
      client: "Libsi Markah",
      badge: "Professional",
      linkLabel: "Live Demo",
      alt: "Libsi Markah — multilingual e-commerce platform built with Next.js, Node.js, MongoDB and AWS",
    },
    notable: {
      achievements: [
        "Improved operational efficiency by 30% with enhanced data workflows.",
        "Reduced manual intervention by 20% through seamless system integrations.",
        "Implemented efficient language management to support multilingual content.",
        "Implemented SEO-friendly practices, improving search rankings and organic traffic.",
      ],
    },
  },
  {
    id: 3,
    title: "Woovet",
    types: ["featured", "notable"],
    url: "https://www.woovet.com/",
    year: "2023",
    role: "Key Frontend Developer",
    techStack: ["Next.js", "React.js", "TypeScript", "REST APIs"],
    images: { featured: woovet, notable: woovet },
    featured: {
      description:
        "AI-powered veterinary practice management platform (PIMS) serving 50+ hospitals. Features AI-assisted clinical diagnostics (Coggo Assess), voice-driven SOAP note generation (Coggo Voice), and a real-time clinic management whiteboard. Migrated from a legacy stack to Next.js, delivering a modern, performant frontend.",
      client: "Woovet",
      badge: "Professional",
      linkLabel: "Live Demo",
      alt: "Woovet — US-based Veterinary SaaS platform migrated to Next.js, serving 50+ hospitals",
    },
    notable: {
      achievements: [
        "Migrated the platform from a legacy stack to Next.js, serving 50+ veterinary hospitals across the US.",
        "Delivered core practice management modules with a modern, performant frontend architecture.",
        "Improved load times, developer experience, and scalability across the entire platform.",
      ],
    },
  },
  {
    id: 4,
    title: "Memorable Mumbai",
    types: ["personal"],
    url: "https://memorablemumbai.com",
    year: "2022",
    role: "Sole Developer",
    images: { featured: mm, personal: mm },
    featured: {
      description:
        "A comprehensive travel and tourism website showcasing the vibrant culture, iconic landmarks, and hidden gems of Mumbai. Features an intuitive interface with responsive design, interactive maps, and detailed guides to help visitors explore and experience the city's rich heritage.",
      client: null,
      badge: "Personal Project",
      linkLabel: "View Project",
      alt: "Memorable Mumbai — travel and tourism website showcasing Mumbai's culture, landmarks, and heritage",
    },
  },
  {
    id: 5,
    title: "Screener - Zamzam Capital",
    shortTitle: "Screener",
    types: ["featured", "notable"],
    url: "https://screener.zamzam-capital.com/",
    year: "2025",
    role: "Sole Developer",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "REST APIs",
    ],
    images: {
      featured: screenr_long,
      notable: screenr_long,
      personal: screener,
    },
    featured: {
      description:
        "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria. Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters.",
      client: "Zamzam Capital",
      badge: "Professional",
      linkLabel: "Live Demo",
      alt: "Screener by Zamzam Capital — Halal stock screening platform for Shariah-compliant investment research",
    },
    notable: {
      achievements: [
        "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria.",
        "Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters, providing a streamlined and user-friendly interface for Islamic investment research.",
        "Created responsive dashboards with intuitive UI/UX for seamless user experience across devices.",
      ],
    },
  },
  {
    id: 6,
    title: "Adlob (Response 4You) - (Times of India)",
    types: ["notable"],
    url: "",
    year: "2024",
    role: "Principal UI Developer",
    techStack: [
      "React.js",
      "Context API",
      "Styled Components",
      "Jest",
      "REST APIs",
    ],
    images: { notable: adlob },
    notable: {
      achievements: [
        "Designed a seamless ad booking platform, simplifying the process for agencies and clients.",
        "Automated workflows, allowing 200+ agencies to manage campaigns effortlessly.",
        "Developed a responsive UI, improving usability by 60% across all devices.",
        "Integrated real-time tracking for ad placements and performance monitoring.",
      ],
    },
  },
  {
    id: 7,
    title: "Portfolio",
    types: ["personal"],
    url: "https://aquibyazdani.com",
    images: { personal: portfolio },
  },
  {
    id: 8,
    title: "Amusement Park",
    types: ["personal"],
    url: "https://amusement-park-new.netlify.app",
    images: { personal: funpark },
  },
  {
    id: 9,
    title: "E-commerce clone",
    types: ["personal"],
    url: "https://shoppe-aquib-yazdani.netlify.app",
    images: { personal: ecommerce },
  },
  {
    id: 10,
    title: "Spotify clone",
    types: ["personal"],
    url: "https://spotify-yazdani.netlify.app",
    images: { personal: spotify },
  },
  {
    id: 11,
    title: "Screener",
    types: ["personal"],
    url: "https://screener.zamzam-capital.com",
    images: { personal: screener },
  },
  {
    id: 12,
    title: "TOI ePaper - Archive",
    types: ["personal"],
    url: "#",
    images: { personal: toi },
  },
];

// Awards
export const awards = [
  {
    id: 1,
    title: "Customer Focus Award",
    organization: "Harns Technologies",
    date: "2025",
    description:
      "Recognized for client-delivery excellence on high-traffic Times Group production products.",
  },
];

// Achievements
export const achievements = [
  "Boosted application responsiveness by 25% through optimized code and design.",
  "Reduced version control conflicts by 15%, improving workflow efficiency by 20%.",
  "Improved team collaboration by 10%, leading to a 12% increase in project delivery speed.",
];

// References
export const references = [
  {
    id: 1,
    name: "Harish Yerragintla",
    position: "Lead Developer",
    company: "Harns Technologies",
    phone: "+1 (205) 736-5808",
    email: "harish.yerraguntla2706@gmail.com",
  },
  {
    id: 2,
    name: "Md Fariduzzaman Ansari",
    position: "Senior Frontend Engineer",
    company: "Icertis",
    phone: "+91 70443 56471",
    email: "fariduzzamaansari@gmail.com",
  },
];

// Social Media
export const socialMedia = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: socialLinks.linkedin,
  },
  {
    name: "GitHub",
    icon: Github,
    url: socialLinks.github,
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: socialLinks.instagram,
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/918210773776",
  },
  {
    name: "Phone",
    icon: Phone,
    url: "tel:+918210773776",
  },
];

// Navigation Items
export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Resume", path: "/resume" },
  { label: "Contact", path: "/contact" },
];
