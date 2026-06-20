import {
  MapPin,
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
  type LucideIcon,
} from "lucide-react";
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
// Personal Information
export const personalInfo = {
  name: "Aquib Yazdani",
  displayName: "aquib yazdani",
  role: "Senior Frontend Engineer",
  title:
    "Senior Frontend Engineer | React • Next.js • Frontend Architecture • AI Integration",
  heroTagline: "Sr. Software Engg. / JavaScript Expert / Tech Explorer",
  tagline: "a Senior Frontend Engineer",
  location: "Pune, India",
  email: "yazdaniaquib2@gmail.com",
  phone: "+91 8210773776",
  copyright: "© 2023 Aquib Yazdani",
  careerStartDate: "2021-06-01",
  professionalSummary:
    "Senior Frontend Engineer with 5 years building user-facing products at scale on React, Next.js, and TypeScript. Built Times of India's ePaper platform (Times Group ecosystem — 10M+ digital DAU, 60M+ app MAU), the American Arbitration Association's legal-tech arbitration product (largest US arbitration body, 180K+ annual cases), and a multi-tenant Auth0 SSO. Specialized in frontend architecture, performance engineering, AI/LLM integration, and accessibility. Track record of end-to-end ownership, mentoring direct reports, and conducting senior-level interviews.",
};

// Social Links
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/aquibyazdani/",
  github: "https://github.com/aquibyazdani/",
  instagram: "https://www.instagram.com/aquibyazdani/",
};

// About Me
export const aboutMe = {
  intro: `Passionate Front-End Developer Focused on Accessibility & Design`,

  background: `I care deeply about clean architecture, usability, and creating meaningful digital products. While I specialize in frontend development, I also develop front-end solutions that integrate seamlessly from UI to backend. Outside of programming, I enjoy playing football, photography, and a few rounds of Valorant.`,

  capabilitiesDescription: `I am always learning and expanding my toolkit — from React performance patterns and AI/LLM integration to WCAG accessibility and modern build tooling. Here's what I bring to the table today.`,

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
    { name: "Node.js", icon: Code2 },
  ],
  frameworks: [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Zap },
    { name: "React Native", icon: Smartphone },
    { name: "Express.js", icon: Code2 },
  ],
  architecture: [
    { name: "Micro-Frontends", icon: Puzzle },
    { name: "Module Federation", icon: Puzzle },
    { name: "SSR", icon: Zap },
    { name: "SSG", icon: Zap },
    { name: "ISR", icon: Zap },
    { name: "BFF Pattern", icon: Puzzle },
    { name: "Design Systems", icon: Palette },
    { name: "Component Libraries", icon: Box },
    { name: "Component-Driven Development", icon: Box },
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
    { name: "Codex", icon: Code2 },
  ],
  stateAndData: [
    { name: "Redux", icon: Box },
    { name: "Redux Toolkit", icon: Box },
    { name: "Zustand", icon: Box },
    { name: "Context API", icon: Box },
    { name: "React Query", icon: Database },
    { name: "REST APIs", icon: Globe },
    { name: "GraphQL", icon: Database },
    { name: "WebSockets", icon: Globe },
  ],
  uiAndStyling: [
    { name: "Tailwind CSS", icon: Wind },
    { name: "Material UI", icon: Palette },
    { name: "Styled Components", icon: Paintbrush },
    { name: "Bootstrap", icon: Palette },
    { name: "Framer Motion", icon: Zap },
  ],
  webPerformance: [
    { name: "Core Web Vitals (LCP, INP, CLS)", icon: Gauge },
    { name: "Lighthouse", icon: Gauge },
    { name: "Code Splitting", icon: Timer },
    { name: "Lazy Loading", icon: Timer },
    { name: "List Virtualization", icon: Gauge },
    { name: "Bundle Analysis", icon: Gauge },
    { name: "Caching", icon: Timer },
    { name: "CDN", icon: Cloud },
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
  buildAndTooling: [
    { name: "Vite", icon: Zap },
    { name: "Webpack", icon: Box },
    { name: "Babel", icon: Code2 },
    { name: "ESLint", icon: CheckCircle },
    { name: "Prettier", icon: Paintbrush },
    { name: "Storybook", icon: Folder },
  ],
  cloudAndDevOps: [
    { name: "AWS (S3, CloudFront)", icon: Cloud },
    { name: "Netlify", icon: Cloud },
    { name: "Azure", icon: Cloud },
    { name: "CI/CD", icon: GitBranch },
    { name: "GitHub Actions", icon: Github },
  ],
  qualityAndWeb: [
    { name: "WCAG 2.1 Accessibility", icon: Users },
    { name: "i18n / Localization", icon: Globe },
    { name: "SEO", icon: Globe },
    { name: "Web Speech API", icon: MessageSquare },
    { name: "Google Analytics", icon: Gauge },
    { name: "GTM", icon: Gauge },
    { name: "AdSense", icon: Folder },
  ],
  collaborationSkills: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "GitLab", icon: GitBranch },
    { name: "Bitbucket", icon: GitBranch },
    { name: "Jira", icon: Folder },
    { name: "Agile/Scrum", icon: Users },
    { name: "Code Reviews", icon: CheckCircle },
    { name: "Mentoring", icon: Users },
    { name: "Technical Interviewing", icon: Users },
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
      "Own end-to-end frontend for the AAA Digital Dispute Resolution platform — legal-grade arbitration product for the American Arbitration Association (largest US arbitration administrator, ~88% market share, 180K+ annual cases) managing case filings, evidence workflows, hearings, and arbitrator verdicts.",
      "Architected the multi-step case submission module on React + TypeScript with chunked document uploads, draft auto-persistence, schema-driven validation, and role-based UI states — replacing a fragmented legacy flow and stabilizing the platform's highest-traffic intake surface.",
      "Integrated Claude API into arbitration dashboards with streaming responses and structured prompt design, auto-summarizing 30–60 page case documents into expandable, navigable briefs — substantially reducing arbitrator first-pass review time and surfacing critical case context within seconds.",
      "Designed and shipped a multi-tenant Auth0 SSO platform end-to-end (POC to production) with a Node.js token-exchange backend, custom Universal Login, RBAC, and tenant-aware routing — now the centralized auth layer across multiple internal applications.",
      "Contributing to a micro-frontend modernization using Webpack Module Federation, enabling independent team deploys, shared runtime dependencies, and incremental migration of a large legacy monolith without a big-bang rewrite.",
      "Migrated legacy modules to Vite, cutting build times from ~90s to under 20s (4.5x faster) and HMR feedback to sub-second; directly boosted team-wide development throughput.",
      "Refactored unstable, prop-drilled UI to Zustand with reusable selectors and sliced stores for filters, pagination, and async data — eliminated redundant re-renders and stabilized the highest-churn screens.",
      "Established Jest + React Testing Library coverage across filters, role-based rendering, and async workflows — preventing regressions during weekly production releases.",
      "Drove WCAG 2.1 AA compliance through keyboard navigation, ARIA semantics, focus management, and screen-reader support — critical for legal workflows where accessibility is statutorily required.",
      "Conducted 20+ senior-level frontend interviews, led PR reviews across the team, and mentored junior engineers — directly contributing to hiring quality and team velocity.",
      "Leverage AI-assisted engineering tools (GitHub Copilot, Cursor, Claude Code) daily for component scaffolding, refactoring, and test generation — accelerating frontend delivery while maintaining strong code review discipline and engineering judgment.",
    ],
  },
  {
    id: 2,
    title: "SDE-II",
    company: "Harns Technologies Pvt Ltd",
    location: "Mumbai, India",
    period: "Jun 2021 – Jun 2025",
    responsibilities: [
      "Owned and shipped the Times of India ePaper platform from scratch to production — part of Times Group's digital ecosystem (10M+ digital DAU, 60M+ app MAU; India's #1 English daily) — and launched 3 additional regional ePapers on the same platform, with a shared React component library and frontend architecture reused across all ePapers and the standalone Archive app.",
      "Spearheaded Adlob end-to-end — Times of India's single-platform advertisement booking product used by 200+ media agencies, developed from scratch on React with virtualized calendar inventory grids, campaign creation, and booking workflows.",
      "Created a custom CMS for podcast and post management, enabling editorial teams to self-serve content publishing without engineering involvement.",
      "Developed ePaper on React + SSR + Context API with Google AdSense, GTM, and analytics integrations driving traffic growth and ad-revenue monetization; engineered a text-to-speech reader via the Web Speech API for accessibility and differentiated audio consumption.",
      "Implemented advanced multi-keyword archive search across years of historical editions with complex query scenarios (boolean operators, date ranges, edition filters) — enabling deep content discovery for readers and researchers.",
      "Achieved strong Lighthouse and Core Web Vitals scores across ePaper through code splitting, lazy loading, image optimization, and route-level prefetching; drove WCAG 2.1 accessibility for a mass-market news audience.",
      "Solved a critical rendering bottleneck on data-heavy archive views using list virtualization and lazy hydration, cutting DOM render from ~20s to under 1s (20x improvement) and unblocking the archive product launch.",
      "Migrated the US-based Veterinary SaaS from a legacy stack to Next.js for 50+ hospitals; delivered core modules of Libsi Markah multilingual e-commerce (payment flow, product page, cart) on Next.js + Redux Toolkit.",
      "Mentored and led a team of 5 frontend engineers as direct reports — directed task planning, code reviews, delivery timelines, and growth conversations.",
      "Owned on-call coverage for peak-traffic production releases during major national events (general elections, Union Budget) — partnered directly with engineering leadership and CEO to ensure zero-downtime delivery on properties absorbing massive traffic spikes from one of India's most-read news destinations.",
    ],
  },
];

// Education
export const education = [
  {
    id: 1,
    institution: "Heritage Institute Of Technology, Kolkata",
    degree: "B.Tech in Chemical Engineering (CGPA: 8.5)",
    period: "2016 - 2020",
  },
];

// Notable Projects
export const notableProjects = [
  {
    id: 1,
    title: "Screener - Zamzam Capital",
    role: "Sole Developer",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "REST APIs",
    ],
    year: "2025",
    src: screenr_long,
    achievements: [
      "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria.",
      "Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters, providing a streamlined and user-friendly interface for Islamic investment research.",
      "Created responsive dashboards with intuitive UI/UX for seamless user experience across devices.",
    ],
  },
  {
    id: 2,
    title: "TOI Epaper (Times of India)",
    role: "Lead Frontend Engineer",
    techStack: ["React.js", "Redux", "Bootstrap", "REST APIs"],
    year: "2024",
    src: toi,
    achievements: [
      "Developed and maintained a high-traffic ePaper platform accessed by thousands daily.",
      "Reduced development time by 30% using efficient language management and reusable components.",
      "Built a reusable component library to streamline frontend development.",
      "Integrated RESTful APIs for real-time updates, ensuring smooth content delivery.",
      "Implemented cross-browser compatibility and accessibility features.",
      "Integrated Google Ads and Google Analytics.",
    ],
  },
  {
    id: 3,
    title: "Adlob (Response 4You) - (Times of India)",
    role: "Principal UI Developer",
    techStack: [
      "React.js",
      "Context API",
      "Styled Components",
      "Jest",
      "REST APIs",
    ],
    year: "2024",
    src: adlob,
    achievements: [
      "Designed a seamless ad booking platform, simplifying the process for agencies and clients.",
      "Automated workflows, allowing 200+ agencies to manage campaigns effortlessly.",
      "Developed a responsive UI, improving usability by 60% across all devices.",
      "Integrated real-time tracking for ad placements and performance monitoring.",
    ],
  },
  {
    id: 4,
    title: "Libsi Markah E-commerce",
    role: "Key Developer",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS (EC2)"],
    year: "2025",
    src: libsilong,
    achievements: [
      "Improved operational efficiency by 30% with enhanced data workflows.",
      "Reduced manual intervention by 20% through seamless system integrations.",
      "Implemented efficient language management to support multilingual content.",
      "Implemented SEO-friendly practices, improving search rankings and organic traffic.",
    ],
  },
];

// Personal Projects
export const personalProjects = [
  {
    id: 1,
    title: "Portfolio",
    url: "https://aquibyazdani.com",
    src: portfolio,
  },
  {
    id: 2,
    title: "Amusement Park",
    url: "https://amusement-park-new.netlify.app",
    src: funpark,
  },
  {
    id: 3,
    title: "Memorable Mumbai",
    url: "https://memorablemumbai.com",
    src: mm,
  },
  {
    id: 4,
    title: "E-commerce clone",
    url: "https://shoppe-aquib-yazdani.netlify.app",
    src: ecommerce,
  },
  {
    id: 5,
    title: "Spotify clone",
    url: "https://spotify-yazdani.netlify.app",
    src: spotify,
  },
  {
    id: 6,
    title: "Screener",
    url: "https://screener.zamzam-capital.com",
    src: screener,
  },
  { id: 7, title: "TOI ePaper - Archive", url: "#", src: toi },
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
  "Boosted application responsiveness by 25% through optimized front-end code and design.",
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

// Featured Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "ecommerce platform",
    year: "2023",
    role: "Full Stack Developer",
    client: "ShopFast Inc.",
    tag: "Featured",
    links: {
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/username/ecommerce",
    },
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile App",
    description:
      "Cross-platform mobile app for task and project management with real-time sync.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "task management app",
    year: "2023",
    role: "Mobile Developer",
    client: "ProductivePro",
    links: {
      demo: "https://taskapp-demo.com",
      github: "https://github.com/username/taskapp",
    },
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    description:
      "Modern, responsive portfolio website with smooth animations and dark mode.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "portfolio website design",
    year: "2022",
    role: "Front-end Developer",
    links: {
      demo: "https://portfolio-demo.com",
      github: "https://github.com/username/portfolio",
    },
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Interactive dashboard for visualizing complex data with charts and graphs.",
    technologies: ["React", "D3.js", "TypeScript"],
    image: "analytics dashboard",
    year: "2022",
    role: "Front-end Developer",
    client: "DataViz Corp.",
    links: {
      demo: "https://analytics-demo.com",
      github: "https://github.com/username/analytics",
    },
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Full Stack",
    description:
      "Social networking platform with posts, comments, and real-time messaging.",
    technologies: ["React", "GraphQL", "PostgreSQL"],
    image: "social media interface",
    year: "2021",
    role: "Full Stack Developer",
    client: "ConnectHub",
    links: {
      demo: "https://socialmedia-demo.com",
      github: "https://github.com/username/social",
    },
  },
  {
    id: 6,
    title: "Weather Application",
    category: "API Integration",
    description:
      "Beautiful weather app with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    image: "weather app interface",
    year: "2021",
    role: "Front-end Developer",
    links: {
      demo: "https://weather-demo.com",
      github: "https://github.com/username/weather",
    },
  },
];

// Contact Information for Footer
export const contactInfo = [
  // {
  //   icon: Mail,
  //   label: "Email",
  //   value: personalInfo.email,
  //   href: `mailto:${personalInfo.email}`,
  // },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: personalInfo.phone,
  //   href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  // },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
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
  // {
  //   name: "WhatsApp",
  //   icon: MessageCircle,
  //   url: "https://wa.me/918210773776",
  // },
  // {
  //   name: "Phone",
  //   icon: Phone,
  //   url: "tel:+918210773776",
  // },
];

// Navigation Items
export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
];
