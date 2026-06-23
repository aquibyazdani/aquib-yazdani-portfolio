import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Providers from "./providers";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const OG_IMAGE = {
  url: "https://aquibyazdani.com/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Md Aquib Yazdani — Sr. Software Engineer",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aquibyazdani.com"),
  title: {
    default: "Md Aquib Yazdani — Sr. Software Engineer",
    template: "%s | Md Aquib Yazdani",
  },
  description:
    "Sr. Software Engineer in Pune, India. 5 years building React, Next.js & TypeScript at scale — Times of India (60M+ MAU), AI-integrated apps, WCAG accessibility.",
  keywords: [
    // Identity
    "Md Aquib Yazdani",
    "Aquib Yazdani",
    "Sr. Software Engineer",
    "Software Engineer Pune",
    "Software Engineer India",
    // Core frontend
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Engineer",
    "Frontend Architect",
    // Backend & fullstack
    "Node.js Developer",
    "Express.js",
    "REST API Developer",
    "GraphQL",
    "MongoDB",
    // Architecture
    "Micro-frontend Architecture",
    "Module Federation",
    "SSR Developer",
    "Design Systems",
    // AI
    "AI Integration Developer",
    "LLM Integration",
    "Claude API",
    // Notable work
    "Times of India ePaper",
    "Zensar Technologies",
  ],
  authors: [{ name: "Md Aquib Yazdani", url: "https://aquibyazdani.com" }],
  creator: "Md Aquib Yazdani",
  publisher: "Md Aquib Yazdani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aquibyazdani.com",
    siteName: "Aquib Yazdani Portfolio",
    title: "Md Aquib Yazdani — Sr. Software Engineer",
    description:
      "Sr. Software Engineer in Pune, India. 5 years building React, Next.js & TypeScript at scale — Times of India (60M+ MAU), AI-integrated apps.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aquibyazdani",
    creator: "@aquibyazdani",
    title: "Md Aquib Yazdani — Sr. Software Engineer",
    description:
      "Sr. Software Engineer in Pune, India. 5 years building React, Next.js & TypeScript at scale — Times of India (60M+ MAU), AI-integrated apps.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md Aquib Yazdani",
  alternateName: "Aquib Yazdani",
  jobTitle: "Sr. Software Engineer",
  url: "https://aquibyazdani.com",
  email: "yazdaniaquib2@gmail.com",
  image: "https://aquibyazdani.com/opengraph-image",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/in/aquibyazdani/",
    "https://github.com/aquibyazdani/",
    "https://www.instagram.com/aquibyazdani/",
  ],
  knowsAbout: [
    "React.js", "Next.js", "React Native",
    "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "SCSS",
    "Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets",
    "Redux", "Redux Toolkit", "Zustand", "Context API", "React Query",
    "Tailwind CSS", "Material UI", "Styled Components", "Bootstrap",
    "Micro-frontends", "Module Federation", "SSR", "SSG", "ISR", "BFF Pattern",
    "Design Systems", "Component-Driven Development",
    "Auth0", "OAuth 2.0", "OIDC", "SAML", "JWT", "Multi-Tenant SSO", "RBAC",
    "AWS S3", "AWS CloudFront", "AWS EC2", "Netlify", "Azure", "CI/CD", "GitHub Actions",
    "Vite", "Webpack", "Babel", "ESLint", "Storybook",
    "Jest", "React Testing Library", "Cypress", "Playwright",
    "Core Web Vitals", "Lighthouse", "Code Splitting", "Lazy Loading", "List Virtualization",
    "WCAG 2.1 AA Accessibility", "i18n", "Google Analytics", "GTM", "Web Speech API",
    "AI/LLM Integration", "Claude API", "Streaming Responses", "Prompt Engineering",
    "GitHub Copilot", "Cursor", "MongoDB",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Zensar Technologies",
    url: "https://www.zensar.com",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Heritage Institute of Technology, Kolkata",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
      <GoogleAnalytics gaId="G-YR78Y0K8L8" />
    </html>
  );
}
