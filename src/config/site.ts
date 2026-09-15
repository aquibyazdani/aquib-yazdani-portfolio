// Design copy that belongs to this site's layout rather than to its content:
// navigation, section headings, button and label text. Content that changes
// over time (profile, projects, posts, forms, SEO, legal text) comes from the
// CMS — see src/lib/content.ts.

export const site = {
  nav: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Resume", path: "/resume" },
    { label: "Contact", path: "/contact" },
  ],

  footer: {
    // {year} and {name} are filled in at render time.
    copyright: "© {year} {name}",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms & Conditions",
  },

  home: {
    greeting: "HI, I AM",
    ctaLabel: "Let's Connect",
    featuredHeading: "Featured Projects",
    featuredIntro: "Here are some of the selected projects that showcase my passion for software development.",
    allProjectsLabel: "All Projects",
    aboutHeading: "About me",
    aboutLinkLabel: "More about me",
  },

  about: {
    heading: "ABOUT ME",
    resumeButtonLabel: "My Resume",
    capabilitiesHeading: "MY CAPABILITIES",
    experienceHeading: "MY EXPERIENCE",
  },

  projects: {
    heading: "ALL PROJECTS",
    intro: "Here's a collection of projects that showcase my passion for software development and problem-solving.",
    notableHeading: "NOTABLE PROJECTS",
    personalHeading: "PERSONAL PROJECTS",
    ctaHeading: "INTERESTED IN WORKING TOGETHER?",
    ctaButtonLabel: "Get in Touch",
    infoLabel: "Project Info",
    clientLabel: "Client",
    yearLabel: "Year",
    roleLabel: "Role",
    techStackLabel: "Tech Stack",
    liveDemoLabel: "Live Demo",
    viewProjectLabel: "View Project",
    /** Achievements shown per notable project. */
    bulletLimit: 3,
    /** Tech stack items shown per notable project. */
    techLimit: 3,
  },

  blog: {
    heading: "BLOG",
    intro: "Thoughts on frontend engineering, system design, AI integration, and building products at scale.",
    featuredLabel: "Featured",
    morePostsLabel: "More Posts",
    emptyMessage: "No posts yet — check back soon.",
    readLabel: "Read →",
    backLabel: "← All Posts",
    cta: {
      enabled: true,
      heading: "Building something interesting?",
      text: "I'm open to new projects, collaborations, and conversations.",
      buttonLabel: "Let's Talk",
      href: "/contact",
    },
  },

  resume: {
    downloadLabel: "Download Resume",
    summaryHeading: "Professional Summary",
    skillsHeading: "Skills",
    educationHeading: "Education",
    experienceHeading: "Work Experience",
    projectsHeading: "Notable Projects",
    awardsHeading: "Awards",
    showEmail: false,
    showPhone: false,
  },

  contact: {
    heading: "GET IN TOUCH",
    findMeLabel: "Find me on",
    resumeButtonLabel: "View My Resume",
    sendingLabel: "Sending…",
    /** Shown when no form is active or the form service is unreachable. */
    fallbackText: "The form is unavailable right now — email me at",
  },

  legal: {
    privacyTitle: "PRIVACY POLICY",
    termsTitle: "TERMS & CONDITIONS",
    lastUpdatedLabel: "Last updated",
  },

  notFound: {
    title: "Page Not Found",
    heading: "Page not found",
    message: "The page you're looking for doesn't exist or has been moved.",
    buttonLabel: "Back to Home",
  },

  theme: {
    color: "#0a0a0a",
    background: "#0a0a0a",
  },
} as const;
