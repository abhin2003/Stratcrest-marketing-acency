"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import s from "./Sections.module.css";

const Hero = () => {
  return (
    <section id="home" className={s.hero}>
      <div className="container">
        <div className={s.heroGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className={s.heroTitle}>
              Illuminate Your <br />
              <span className="text-gradient">Brand.</span> <br />
              Accelerate Your <br />
              <span className="text-gradient">Growth.</span>
            </h1>
            <p className={s.heroDesc}>
              Stratcrest is a results-driven marketing and consulting agency helping businesses grow through branding, digital presence, and performance marketing.
            </p>
            <div className={s.heroBtns}>
              <Link href="#services" className="btn-purple">
                Explore Our Services
              </Link>
              <Link href="#contact" className="btn-dark" style={{ background: '#FFFFFF', color: '#1E1B2E', border: '1px solid #E2D8F0' }}>
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={s.heroImageWrap}
          >
            <div className={s.imageOverlayLight}></div>
            <Image
              src="/assets/hero_lux_v2.png"
              alt="Abstract Soft Luxury Art"
              fill
              className="object-cover"
              priority
              quality={100}
              style={{ filter: 'brightness(1.15) contrast(0.9) saturate(0.85)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
