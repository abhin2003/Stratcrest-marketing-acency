"use client";

import { motion } from "framer-motion";
import s from "./Sections.module.css";

const metrics = [
  { value: "Lead Gen", label: "Increased generation", delay: 0 },
  { value: "Conversions", label: "Improved rates", delay: 0.1 },
  { value: "Presence", label: "Stronger brand", delay: 0.2 },
];

const Advantage = () => {
  return (
    <section className={s.advantage}>
      <div className={s.advantageGlow}></div>

      <div className={s.advantageContainer}>
        <div className={s.advantageHeader}>
          <h2 className={s.advantageTitle}>Measurable Growth. Real Results.</h2>
        </div>

        <div className={s.advantageGrid}>
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: metric.delay }}
              viewport={{ once: true }}
              className={s.metricCard}
            >
              <span className={s.metricCardValue}>{metric.value}</span>
              <span className={s.metricCardLabel}>{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
