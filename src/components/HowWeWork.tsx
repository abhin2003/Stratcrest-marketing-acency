"use client";

import { motion } from "framer-motion";
import s from "./Sections.module.css";

const steps = [
  { 
    number: "01", 
    title: "Client Onboarding", 
    description: "Seamless integration into our growth ecosystem with a clear roadmap for success." 
  },
  { 
    number: "02", 
    title: "Local Presence & Trust", 
    description: "Establishing your brand as a dominant and trusted authority in your specific local market." 
  },
  { 
    number: "03", 
    title: "Social Media & Engagement", 
    description: "Building an active community and driving meaningful interactions that lead to brand loyalty." 
  },
  { 
    number: "04", 
    title: "Lead Generation System", 
    description: "Implementing automated, performance-driven pipelines that ensure consistent business growth." 
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className={s.howWeWork}>
      <div className={s.howWeWorkContainer}>
        <div className={s.howWeWorkHeader}>
          <h2 className={s.howWeWorkTitle}>The Methodology.</h2>
        </div>

        <div className={s.howWeWorkSteps}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={s.howWeWorkStep}
            >
              <div className={s.stepNumber}>{step.number}</div>
              <div className={s.stepContent}>
                <h3 className={s.stepTitle}>{step.title}</h3>
                <p className={s.stepDesc}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
