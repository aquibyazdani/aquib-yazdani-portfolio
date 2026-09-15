import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Providers from "./providers";
import "./globals.css";
import { displayName, getContent, ogImageUrl, siteUrl } from "@/lib/content";
import { personJsonLd } from "@/lib/jsonld";

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

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContent();
  const { seo, integrations } = content;
  const base = siteUrl(content);
  const image = { url: ogImageUrl(content), width: 1200, height: 630, alt: seo.defaultOgImage.alt || seo.defaultTitle };
  const author = displayName(content);

  return {
    metadataBase: new URL(base),
    title: { default: seo.defaultTitle, template: seo.titleTemplate || "%s" },
    description: seo.defaultDescription,
    keywords: seo.defaultKeywords,
    authors: [{ name: author, url: base }],
    creator: author,
    publisher: author,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: base,
      siteName: seo.siteName,
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      site: seo.twitterHandle || undefined,
      creator: seo.twitterHandle || undefined,
      title: seo.defaultTitle,
      description: seo.defaultDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    other: integrations.adsenseClientId ? { "google-adsense-account": integrations.adsenseClientId } : undefined,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const content = await getContent();
  const { integrations } = content;
  const adsensePub = integrations.adsenseClientId.replace(/^ca-/, "");

  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(content)) }} />
        {integrations.adsenseClientId && (
          <>
            {/* Google-certified CMP: shows the EEA/UK consent message configured
                in AdSense > Privacy & messaging. Must load before the ad script. */}
            <Script async src={`https://fundingchoicesmessages.google.com/i/${adsensePub}?ers=1`} strategy="beforeInteractive" />
            <Script id="googlefc-present" strategy="beforeInteractive">
              {`(function() {
                function signalGooglefcPresent() {
                  if (!window.frames['googlefcPresent']) {
                    if (document.body) {
                      const iframe = document.createElement('iframe');
                      iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;';
                      iframe.style.display = 'none';
                      iframe.name = 'googlefcPresent';
                      document.body.appendChild(iframe);
                    } else {
                      setTimeout(signalGooglefcPresent, 0);
                    }
                  }
                }
                signalGooglefcPresent();
              })();`}
            </Script>
            <Script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${integrations.adsenseClientId}`}
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
      {integrations.gaId && <GoogleAnalytics gaId={integrations.gaId} />}
    </html>
  );
}
