import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aquibyazdani.com"),
  title: {
    default: "Md Aquib Yazdani — Sr. Software Engineer",
    template: "%s — Md Aquib Yazdani",
  },
  description:
    "Sr. Software Engineer in Pune, India. 5 years building React, Next.js & TypeScript at scale — Times of India (60M+ MAU), AI-integrated apps, WCAG accessibility.",
  keywords: [
    "Md Aquib Yazdani",
    "Sr. Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Frontend Architecture",
    "Pune India",
  ],
  authors: [{ name: "Md Aquib Yazdani" }],
  creator: "Md Aquib Yazdani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aquibyazdani.com",
    siteName: "Aquib Yazdani Portfolio",
    title: "Md Aquib Yazdani — Sr. Software Engineer",
    description:
      "Sr. Software Engineer in Pune, India. 5 years building React, Next.js & TypeScript at scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Aquib Yazdani — Sr. Software Engineer",
    description:
      "Sr. Software Engineer in Pune, India. 5 years building React, Next.js & TypeScript at scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${manrope.variable}`}>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
