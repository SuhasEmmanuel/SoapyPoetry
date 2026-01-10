import type { Metadata } from "next";
import { Elsie, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const elsie = Elsie({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SoapyPoetry - Handmade Natural Soaps & Skincare",
    template: "%s | SoapyPoetry"
  },
  description: "Discover our collection of handmade natural soaps crafted with love. Premium ingredients like coconut oil, shea butter, and essential oils for gentle, nourishing skincare.",
  keywords: ["handmade soap", "natural skincare", "organic soap", "coconut oil soap", "shea butter", "artisan soap", "vegan soap", "cruelty-free"],
  authors: [{ name: "SoapyPoetry" }],
  creator: "SoapyPoetry",
  publisher: "SoapyPoetry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://soappypoetry.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soappypoetry.com",
    title: "SoapyPoetry - Handmade Natural Soaps & Skincare",
    description: "Discover our collection of handmade natural soaps crafted with love. Premium ingredients for gentle, nourishing skincare.",
    siteName: "SoapyPoetry",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SoapyPoetry Handmade Natural Soaps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoapyPoetry - Handmade Natural Soaps & Skincare",
    description: "Discover our collection of handmade natural soaps crafted with love. Premium ingredients for gentle, nourishing skincare.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SoapyPoetry",
    description: "Handmade natural soaps and skincare products crafted with premium ingredients",
    url: "https://soappypoetry.com",
    logo: "https://soappypoetry.com/logo.png",
    image: "https://soappypoetry.com/logo.png",
    "@id": "https://soappypoetry.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://instagram.com/soappypoetry",
      "https://facebook.com/soappypoetry",
      "https://twitter.com/soappypoetry"
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceRange: "$8-25",
      availability: "https://schema.org/InStock"
    },
    product: {
      "@type": "Product",
      name: "Handmade Natural Soap",
      description: "Premium handmade soaps with natural ingredients like coconut oil, shea butter, and essential oils",
      category: "Beauty & Personal Care",
      brand: "SoapyPoetry"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${poppins.variable} ${elsie.variable} antialiased`}>
        <div className="site-frame">
          <div className="site-frame__border site-frame__border--left" aria-hidden="true" />
          <div className="site-frame__border site-frame__border--right" aria-hidden="true" />
          <div className="site-frame__content">{children}</div>
        </div>
      </body>
    </html>
  );
}
