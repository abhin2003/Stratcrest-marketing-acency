"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import s from "./Sections.module.css";
import { DotMatrixBackground } from "@/components/ui/DotMatrixBackground";

const HeroCanvas = dynamic(() => import("@/components/3d/HeroCanvas"), { ssr: false });

const Hero = () => {
  return (
    <section id="home" className={s.hero} style={{ position: 'relative' }}>
      <DotMatrixBackground />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className={s.heroGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={s.heroTitle}>
              Illuminate Your <br />
              <span style={{ color: '#8B5CF6' }}>Brand.</span><br />
              Accelerate Your <br />
              <span style={{ color: '#8B5CF6' }}>Growth.</span>
            </h1>
            <p className={s.heroDesc}>
              Stratcrest is a results-driven marketing and consulting agency helping businesses grow through branding, digital presence, and performance marketing.
            </p>
            <div className={s.heroBtns}>
              <Link href="/services" className={s.btnPurpleSolid}>
                Explore Our Services
              </Link>
              <Link href="/contact" className={s.btnOutline}>
                Contact Us
              </Link>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={s.heroCanvasWrap}
            id="hero-canvas-wrap"
          >
            <HeroCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
