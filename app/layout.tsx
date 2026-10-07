import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { general, social } = await getSiteSettings();
  const ogAlt = "Q We Rise Network Logo - Feminist organization advancing rights for ITGNC and LBQ communities in Kenya";
  return {
    metadataBase: new URL("https://qwerise.org"),
    title: general.seoTitle,
    description: general.seoDescription,
    keywords: general.keywords,
    authors: [{ name: general.siteName }],
    robots: "noindex, nofollow", // Block search engines until launch
    openGraph: {
      title: general.seoTitle,
      description: general.socialDescription,
      type: "website",
      url: "https://qwerise.org",
      siteName: general.siteName,
      images: [{ url: "/logo-optimized.png", width: 1200, height: 630, alt: ogAlt }],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: general.seoTitle,
      description: general.socialDescription,
      images: ["/logo-optimized.png"],
      creator: "@QWeRiseNetwork",
      site: "@QWeRiseNetwork",
    },
    other: {
      "og:image:width": "1200",
      "og:image:height": "630",
      "og:image:type": "image/png",
      "twitter:image:alt": ogAlt,
    },
  };
}

import { getSiteSettings } from "@/sanity/lib/content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AccessibilityTools from "./components/AccessibilityTools";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { general, contact, social } = await getSiteSettings();
  const sameAs = [social.instagram, social.facebook, social.twitter, social.linkedin].filter(Boolean);
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-optimized.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-optimized.png" />
        <link rel="apple-touch-icon" href="/logo-optimized.png" />

        {/* Additional meta tags for better social sharing */}
        <meta property="og:image:secure_url" content="/logo-optimized.png" />
        <meta name="twitter:domain" content="qwerise.org" />
        <meta name="twitter:url" content="https://qwerise.org" />

        {/* Alternative social media images */}
        <meta property="og:image" content="/logo-optimized.png" />
        <meta property="og:image:url" content="https://qwerise.org/logo-optimized.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#7B2CBF" />
        <meta name="msapplication-TileColor" content="#7B2CBF" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <meta name="geo.position" content="-1.2921;36.8219" />
        <meta name="ICBM" content="-1.2921, 36.8219" />

        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Q We Rise Network",
              "alternateName": "Q We Rise",
              "url": "https://qwerise.org",
              "logo": "/logo-optimized.png",
              "description": "A feminist, Kenyan-based organization advancing gender equity, mental wellness, and sexual and reproductive health rights for ITGNC and LBQ communities.",
              "foundingDate": "2023",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "KE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": contact.phone,
                "contactType": "General Inquiry",
                "email": contact.email
              },
              "sameAs": sameAs,
              "mission": "To empower ITGNC and LBQ individuals through Rights-Based Advocacy, inclusive SRHR Education, Economic Justice, and Creative Expression that centers healing and communal care.",
              "areaServed": {
                "@type": "Country",
                "name": "Kenya"
              },
              "knowsAbout": [
                "LGBTQ+ Rights",
                "Sexual and Reproductive Health Rights",
                "Gender Equity",
                "Mental Wellness",
                "Advocacy",
                "Community Development"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${inter.variable} antialiased`}
      >
        <Toaster position="top-right" richColors />
        <Header navLinks={general.navLinks} donateLabel={general.donateLabel} donateUrl={general.donateUrl} />
        {children}
        <Footer general={general} contact={contact} social={social} />
        <AccessibilityTools />
      </body>
    </html>
  );
}
