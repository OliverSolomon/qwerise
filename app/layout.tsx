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

export const metadata: Metadata = {
  metadataBase: new URL("https://qwerise.org"),
  title: "Q We Rise Network | Advancing Rights & Wellness for ITGNC & LBQ Communities",
  description: "Q We Rise Network is a feminist, Kenyan-based organization advancing gender equity, mental wellness, and sexual and reproductive health rights for ITGNC and LBQ communities.",
  keywords: "LGBTQ+, intersex, transgender, non-binary, lesbian, bisexual, queer, Kenya, feminist, SRHR, mental wellness, advocacy",
  authors: [{ name: "Q We Rise Network" }],
  robots: "noindex, nofollow", // Block search engines until launch

  // Enhanced Open Graph tags for social media sharing
  openGraph: {
    title: "Q We Rise Network - Advancing Rights for ITGNC & LBQ Communities",
    description: "A feminist, Kenyan-based organization empowering ITGNC and LBQ individuals through rights-based advocacy, inclusive SRHR education, economic justice, and creative expression.",
    type: "website",
    url: "https://qwerise.org",
    siteName: "Q We Rise Network",
    images: [
      {
        url: "/logo-optimized.png",
        width: 1200,
        height: 630,
        alt: "Q We Rise Network Logo - Feminist organization advancing rights for ITGNC and LBQ communities in Kenya",
      },
    ],
    locale: "en_US",
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    title: "Q We Rise Network - Advancing Rights for ITGNC & LBQ Communities",
    description: "A feminist, Kenyan-based organization empowering ITGNC and LBQ individuals through rights-based advocacy, inclusive SRHR education, economic justice, and creative expression.",
    images: ["/logo-optimized.png"],
    creator: "@QWeRiseNetwork",
    site: "@QWeRiseNetwork",
  },

  // Additional meta tags
  other: {
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "twitter:image:alt": "Q We Rise Network Logo - Feminist organization advancing rights for ITGNC and LBQ communities in Kenya",
  },
};

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                "telephone": "+2547 14254097",
                "contactType": "General Inquiry",
                "email": "info@qwerise.org"
              },
              "sameAs": [
                "https://www.instagram.com/q_we_rise_network",
                "https://www.facebook.com/QWeRiseNetwork",
                "https://twitter.com/QWeRiseNetwork"
              ],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
