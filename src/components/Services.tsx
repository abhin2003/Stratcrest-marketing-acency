"use client";

import { motion } from "framer-motion";
import { PenTool, Target, Zap, LayoutDashboard, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import s from "./Sections.module.css";

const Services = () => {
  return (
    <section id="services" className={`${s.sectionPadding} ${s.bgLavender}`}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className={s.headlineH2}>Our Capabilities</h2>
        </div>

        <div className={s.bentoGrid}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={s.bentoFeatured}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F5F3FF] flex items-center justify-center text-[#6D28D9] mb-4">
              <LayoutDashboard size={32} />
            </div>
            <h3 className="text-3xl font-semibold text-[#1E1B2E]">Website Creation</h3>
            <p className={s.subhead}>
              Custom-built, high-converting digital storefronts designed to scale your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={s.bentoSmall}
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D28D9]">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1B2E]">Ads Management</h3>
            <p className="text-[#64748B]">Performance-driven campaigns that scale revenue and lead generation.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className={s.bentoSmall}
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D28D9]">
              <PenTool size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1B2E]">Branding</h3>
            <p className="text-[#64748B]">Strategic identity systems that build market authority and trust.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className={s.bentoSmall}
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D28D9]">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1B2E]">Social Media Management</h3>
            <p className="text-[#64748B]">Engaging content that grows your community and brand awareness.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className={s.bentoSmall}
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D28D9]">
              <ArrowUpRight size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1B2E]">Video Production</h3>
            <p className="text-[#64748B]">Cinematic storytelling that captures and keeps attention.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className={s.bentoSmall}
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D28D9]">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1B2E]">Sales Training</h3>
            <p className="text-[#64748B]">Empowering your team to close more high-value deals.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className={s.bentoSmall}
          >
            <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] flex items-center justify-center text-[#6D28D9]">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold text-[#1E1B2E]">Customer Service Training</h3>
            <p className="text-[#64748B]">Elevating your client experience to build loyalty.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
