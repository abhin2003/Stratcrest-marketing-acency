"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import s from "./Sections.module.css";

const About = () => {
  return (
    <section id="how-we-work" className={`${s.sectionPadding} ${s.bgWhite}`}>
      <div className="container">
        <div className={s.splitLayout}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={s.splitText}
          >
            <h2 className={s.headlineH2}>
              Precision <br />
              <span className="text-gradient">Meets Elegance.</span>
            </h2>
            <p className={s.subhead}>
              We combine creativity with data-driven strategy to build digital experiences that convert attention into revenue.
            </p>
            <ul className={s.aboutList}>
              <li className={s.aboutListItem}>
                <div className={s.aboutListIcon}>
                  <ArrowRight size={16} />
                </div>
                <span className={s.aboutListText}>High-converting websites</span>
              </li>
              <li className={s.aboutListItem}>
                <div className={s.aboutListIcon}>
                  <ArrowRight size={16} />
                </div>
                <span className={s.aboutListText}>Performance-driven campaigns</span>
              </li>
              <li className={s.aboutListItem}>
                <div className={s.aboutListIcon}>
                  <ArrowRight size={16} />
                </div>
                <span className={s.aboutListText}>Scalable growth systems</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={s.aboutImageWrap}
          >
            <Image
              src="/assets/image_workspace.png"
              alt="Modern Minimal Workspace"
              fill
              className={s.aboutImage}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
