import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Md Aquib Yazdani — Sr. Software Engineer, Pune",
  description:
    "5 years building with React, Next.js, TypeScript, Node.js, Auth0, AWS & AI. WCAG 2.1 AA, Core Web Vitals, micro-frontends, design systems. Based in Pune, India.",
  alternates: { canonical: "https://aquibyazdani.com/about" },
  keywords: [
    // Frontend
    "React.js developer",
    "Next.js SSR SSG ISR",
    "TypeScript engineer",
    "JavaScript ES6 developer",
    "HTML5 CSS3 SCSS",
    "Tailwind CSS Material UI",
    "Redux Zustand Context API",
    "React Query",
    "Framer Motion GSAP animation",
    "React Native developer",
    // Backend
    "Node.js developer",
    "Express.js REST API",
    "GraphQL developer",
    "MongoDB developer",
    "WebSockets real-time",
    // Auth & Security
    "Auth0 developer",
    "OAuth 2.0 OIDC SAML",
    "JWT multi-tenant SSO",
    "RBAC role-based access",
    // Architecture
    "micro-frontend Module Federation",
    "design system component library",
    "BFF backend for frontend",
    "frontend architecture India",
    // Cloud & DevOps
    "AWS S3 CloudFront EC2",
    "Netlify Azure CI/CD",
    "GitHub Actions Vite Webpack",
    // Quality
    "WCAG 2.1 AA accessibility",
    "Core Web Vitals Lighthouse",
    "Jest React Testing Library Cypress",
    "i18n localization",
    // AI
    "Claude API LLM integration",
    "prompt engineering streaming",
    "AI-powered web applications",
    // Identity
    "Md Aquib Yazdani",
    "Sr. Software Engineer Pune India",
  ],
  openGraph: {
    url: "https://aquibyazdani.com/about",
    title: "About Md Aquib Yazdani — Sr. Software Engineer",
    description:
      "React, Next.js, Node.js, Auth0, AWS & AI integration. WCAG 2.1 AA, Core Web Vitals, micro-frontends. 5 years building at scale from Pune, India.",
    images: [{ url: "https://aquibyazdani.com/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    title: "About Md Aquib Yazdani — Sr. Software Engineer",
    description:
      "React, Next.js, Node.js, Auth0, AWS & AI integration. WCAG 2.1 AA, Core Web Vitals, micro-frontends. 5 years building at scale.",
    images: ["https://aquibyazdani.com/opengraph-image"],
  },
};

export default function AboutPage() {
  return <About />;
}
