import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Stratcrest · Marketing",
    template: "%s | Stratcrest"
  },
  description: "Stratcrest helps businesses grow through strategic branding, digital presence, and performance-focused solutions. Accelerate your growth today.",
  keywords: ["marketing agency", "branding", "digital marketing", "consulting", "lead generation", "sales training"],
  authors: [{ name: "Stratcrest" }],
  creator: "Stratcrest",
  publisher: "Stratcrest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/assets/stratcrest2.png",
    shortcut: "/assets/stratcrest2.png",
    apple: "/assets/stratcrest2.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Stratcrest",
    title: "Stratcrest · Marketing",
    description: "Illuminate Your Brand. Accelerate Your Growth.",
    images: [{
      url: "/assets/stratcrest2.png",
      width: 1200,
      height: 630,
      alt: "Stratcrest Marketing Agency"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratcrest · Marketing",
    description: "Illuminate Your Brand. Accelerate Your Growth.",
    images: ["/assets/stratcrest2.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
