"use client";

import { motion } from "framer-motion";
import s from "./Sections.module.css";

const MissionVision = () => {
  return (
    <section className={s.missionSection}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={s.missionTitle}>Mission</h2>
            <p className={s.missionText}>
              To empower businesses with innovative marketing strategies that drive measurable growth and build lasting brands.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className={s.missionTitle}>Vision</h2>
            <p className={s.missionText}>
              To become a leading marketing and consulting partner known for transforming brands into industry leaders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
