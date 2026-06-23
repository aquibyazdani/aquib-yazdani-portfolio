import type { Metadata } from "next";
import Resume from "@/components/Resume";

export const metadata: Metadata = {
  title: "Resume — Md Aquib Yazdani | Sr. Software Engineer",
  description:
    "Resume: React, Next.js, TypeScript, Node.js, Express, MongoDB, Auth0, AWS, Redux, Zustand, Jest, WCAG, micro-frontends, AI/LLM. Zensar & Harns Technologies.",
  alternates: { canonical: "https://aquibyazdani.com/resume" },
  keywords: [
    // Recruiter-intent keywords — what hiring managers search
    "hire React developer India",
    "hire Next.js developer Pune",
    "hire TypeScript engineer",
    "hire Node.js developer",
    "senior frontend engineer CV",
    "software engineer resume India",
    // Full tech stack — all skills on resume
    "React.js", "Next.js", "React Native",
    "TypeScript", "JavaScript ES6",
    "Node.js", "Express.js",
    "REST API", "GraphQL", "WebSockets",
    "MongoDB", "AWS S3 CloudFront",
    "Redux", "Redux Toolkit", "Zustand", "Context API", "React Query",
    "Tailwind CSS", "Material UI", "Styled Components", "Bootstrap", "SCSS",
    "Auth0", "OAuth 2.0", "OIDC", "SAML", "JWT", "multi-tenant SSO", "RBAC",
    "micro-frontend", "Module Federation", "design systems",
    "SSR", "SSG", "ISR", "BFF pattern",
    "Vite", "Webpack", "Babel", "ESLint", "Prettier", "Storybook",
    "Jest", "React Testing Library", "Cypress", "Playwright",
    "Core Web Vitals", "Lighthouse", "code splitting", "lazy loading",
    "WCAG 2.1 AA", "i18n", "Google Analytics", "GTM",
    "Claude API", "LLM integration", "streaming AI",
    "GitHub Actions", "CI/CD", "Azure", "Netlify",
    "Agile Scrum", "code review", "technical interviewing", "mentoring",
    // Companies
    "Zensar Technologies engineer",
    "Harns Technologies developer",
    "Md Aquib Yazdani resume",
    "Md Aquib Yazdani CV",
  ],
  openGraph: {
    url: "https://aquibyazdani.com/resume",
    title: "Resume — Md Aquib Yazdani | Sr. Software Engineer",
    description:
      "React, Next.js, TypeScript, Node.js, Auth0, AWS, Redux, Jest, WCAG, micro-frontends, AI/LLM. 5 years at Zensar & Harns Technologies.",
    images: [{ url: "https://aquibyazdani.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Resume — Md Aquib Yazdani | Sr. Software Engineer",
    description:
      "React, Next.js, TypeScript, Node.js, Auth0, AWS, Redux, Jest, WCAG, micro-frontends, AI/LLM. 5 years at Zensar & Harns Technologies.",
    images: ["https://aquibyazdani.com/opengraph-image"],
  },
};

export default function ResumePage() {
  return <Resume />;
}
