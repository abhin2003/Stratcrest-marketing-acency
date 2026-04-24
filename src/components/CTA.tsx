"use client";

import { motion } from "framer-motion";
import s from "./Sections.module.css";

const CTA = () => {
  return (
    <section className={s.ctaSection}>
      <div className={s.ctaContainer}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={s.ctaCard}
        >
          <div className={s.ctaBlob}></div>

          <div className={s.ctaContent}>
            <h2 className={s.ctaTitle}>
              Let&apos;s Build Something <br />
              <span className="text-gradient">Extraordinary.</span>
            </h2>
            <p className={s.ctaText}>
              Ready to transcend the ordinary? Join the ranks of industry leaders who have trusted Stratcrest to define their future.
            </p>
            <a 
              href="mailto:stratcrest.agency@gmail.com" 
              className="btn-purple"
            >
              Start the Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
