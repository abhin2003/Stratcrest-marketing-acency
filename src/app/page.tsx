import Script from "next/script";
import dynamic from "next/dynamic";
import ScrollHandler from "@/components/ScrollHandler";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantage from "@/components/Advantage";
import { Metadata } from "next";

const Services = dynamic(() => import("@/components/Services"));
const HowWeWork = dynamic(() => import("@/components/HowWeWork"));
const MissionVision = dynamic(() => import("@/components/MissionVision"));
const WhyPartner = dynamic(() => import("@/components/WhyPartner"));
const CTA = dynamic(() => import("@/components/CTA"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Stratcrest. Accelerate your growth today with our strategic digital marketing and branding solutions.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home | Stratcrest",
    description: "Welcome to Stratcrest. Accelerate your growth today with our strategic digital marketing and branding solutions.",
    url: "/",
  },
  twitter: {
    title: "Home | Stratcrest",
    description: "Welcome to Stratcrest. Accelerate your growth today with our strategic digital marketing and branding solutions.",
  },
};

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stratcrest",
    "url": "https://www.stratcrest.com",
    "logo": "https://www.stratcrest.com/assets/stratcrest_theme.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "stratcrest.agency@gmail.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/stratcrest/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stratcrest Marketing Agency",
    "image": "https://www.stratcrest.com/assets/stratcrest_theme.webp",
    "url": "https://www.stratcrest.com",
    "email": "stratcrest.agency@gmail.com",
    "priceRange": "$$"
  };

  return (
    <main className="min-h-screen">
      <ScrollHandler />
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="localbiz-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Navbar />
      <Hero />
      <About />
      <Advantage />
      <Services />
      <HowWeWork />
      <MissionVision />
      <WhyPartner />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
