"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import s from "./Sections.module.css";

const WhyPartner = () => {
  return (
    <section id="why-us" className={`${s.sectionPadding} ${s.bgLavender}`}>
      <div className="container">
        <div className={s.splitLayout}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={s.overlapImage}
          >
            <Image
              src="/assets/image_bento.png"
              alt="Abstract UI Elements"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={s.overlapText}
          >
            <h2 className={s.headlineH2} style={{ marginBottom: "1.5rem" }}>
              Why Choose <br />
              <span className="text-gradient">Stratcrest</span>
            </h2>
            <p className={s.subhead} style={{ marginBottom: "2rem" }}>
              We combine creativity with practical, data-driven strategies to deliver measurable business growth.
            </p>
            
            <ul className={s.whyList}>
              <li className={s.whyListItem}>
                <div className={s.whyListIcon}>
                  <CheckCircle2 size={20} />
                </div>
                <div className={s.whyListContent}>
                  <span className={s.whyListTitle}>Customized Strategies</span>
                  <p className={s.whyListDesc}>Tailored plans designed for your unique goals.</p>
                </div>
              </li>
              <li className={s.whyListItem}>
                <div className={s.whyListIcon}>
                  <CheckCircle2 size={20} />
                </div>
                <div className={s.whyListContent}>
                  <span className={s.whyListTitle}>End-to-End Support</span>
                  <p className={s.whyListDesc}>From initial strategy to full execution.</p>
                </div>
              </li>
              <li className={s.whyListItem}>
                <div className={s.whyListIcon}>
                  <CheckCircle2 size={20} />
                </div>
                <div className={s.whyListContent}>
                  <span className={s.whyListTitle}>Revenue & Visibility Focus</span>
                  <p className={s.whyListDesc}>Maximizing your ROI and market presence.</p>
                </div>
              </li>
              <li className={s.whyListItem}>
                <div className={s.whyListIcon}>
                  <CheckCircle2 size={20} />
                </div>
                <div className={s.whyListContent}>
                  <span className={s.whyListTitle}>Strong Engagement Systems</span>
                  <p className={s.whyListDesc}>Building lasting connections with your audience.</p>
                </div>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
