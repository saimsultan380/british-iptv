import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "@/components/WhatsAppButton";
import ApplyButtonPreview from "@/components/ApplyButtonPreview";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_ALTERNATE_NAMES,
  SITE_FAVICON_PATH,
  SITE_LOGO_HEIGHT,
  SITE_LOGO_PATH,
  SITE_LOGO_WIDTH,
  SITE_NAME,
  SITE_URL,
  assetUrl,
  canonicalUrl,
} from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
const logoUrl = assetUrl(SITE_LOGO_PATH);

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  // Relative "./" resolves to each route's own URL (not the homepage).
  // Child pages still set absolute canonicals via pageMetadata().
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: canonicalUrl("/"),
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: SITE_LOGO_PATH,
        width: SITE_LOGO_WIDTH,
        height: SITE_LOGO_HEIGHT,
        alt: `${SITE_NAME} Logo`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [SITE_LOGO_PATH],
  },
  // Google Search favicon: square, stable URL, preferably ≥48×48
  icons: {
    icon: [
      { url: SITE_FAVICON_PATH, type: "image/png", sizes: "48x48" },
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: SITE_FAVICON_PATH,
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  verification: {
    google: "-jGXddDi94X5MFYYPcbpSVz2T9dz3IsivXvo1XDP8YE",
  },
};

export const viewport = {
  themeColor: "#0B1E5C",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      alternateName: [...SITE_ALTERNATE_NAMES],
      url: canonicalUrl("/"),
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: logoUrl,
        contentUrl: logoUrl,
        width: SITE_LOGO_WIDTH,
        height: SITE_LOGO_HEIGHT,
        caption: SITE_NAME,
        inLanguage: "en-GB",
      },
      image: logoUrl,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: SITE_NAME,
      alternateName: [...SITE_ALTERNATE_NAMES],
      url: canonicalUrl("/"),
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en-GB",
      publisher: { "@id": organizationId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Explicit favicon link helps Googlebot discover the ≥48px icon */}
        <link rel="icon" href={SITE_FAVICON_PATH} type="image/png" sizes="48x48" />
        <link rel="icon" href="/favicon-96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
        <ApplyButtonPreview />
      </body>
    </html>
  );
}
