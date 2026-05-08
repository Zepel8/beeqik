import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/content/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Reliable China Sourcing Agent | Verified Suppliers`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "China sourcing agent",
    "sourcing company in China",
    "supplier verification China",
    "product sourcing service",
    "trusted China suppliers",
    "Alibaba alternative",
    "China sourcing partner",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Reliable China Sourcing Agent`,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Reliable China Sourcing Agent`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}#org`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: "Worldwide",
      sameAs: [],
    },
    {
      "@type": "Service",
      name: "China Sourcing & Supplier Verification",
      provider: { "@id": `${SITE.url}#org` },
      areaServed: "Worldwide",
      serviceType: "Product sourcing, supplier verification, sample handling, custom packaging",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
