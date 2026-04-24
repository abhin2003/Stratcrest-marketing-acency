import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Advantage from "@/components/Advantage";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import MissionVision from "@/components/MissionVision";
import WhyPartner from "@/components/WhyPartner";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
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
