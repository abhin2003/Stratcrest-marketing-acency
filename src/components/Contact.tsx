"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";
import s from "./Sections.module.css";

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const categories = [
  {
    title: "Brand Strategy",
    desc: "Let's define your positioning, competitive edge, and the story only you can tell.",
  },
  {
    title: "Digital Growth",
    desc: "From campaigns to content — we engineer ecosystems that compound your reach.",
  },
  {
    title: "General Inquiries",
    desc: "Partnerships, press, or anything else — we're always open to a conversation.",
  },
];

const Contact = () => {
  return (
    <section id="contact" className={s.contactSection}>
      <div className={s.contactInner}>

        {/* LEFT — Editorial Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={s.contactLeft}
        >
          <h2 className={s.contactBigTitle}>Get Started <br /> With Stratcrest</h2>
          <p className={s.contactSubline}>
            Email, call, or complete the form — we&apos;d love to hear from you.
          </p>

          <div className={s.contactDirectList}>
            <a href="mailto:stratcrest.agency@gmail.com" className={s.contactDirectLink}>
              <Mail size={16} />
              stratcrest.agency@gmail.com
            </a>
            <a href="https://wa.me/916282938648" target="_blank" rel="noopener noreferrer" className={s.contactDirectLink} style={{ color: '#25D366' }}>
              <MessageCircle size={16} />
              WhatsApp Us (Quick Response)
            </a>
            <a href="tel:+916282938648" className={s.contactDirectLink}>
              <Phone size={16} />
              +91 6282938648
            </a>
            <a href="tel:+919072993957" className={s.contactDirectLink}>
              <Phone size={16} />
              +91 9072993957
            </a>
            <a
              href="https://www.instagram.com/stratcrest/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.contactDirectLink}
            >
              <InstagramIcon size={16} />
              @stratcrest
            </a>
          </div>

          <div className={s.contactCategoryGrid}>
            {categories.map((cat) => (
              <div key={cat.title} className={s.contactCategory}>
                <h4 className={s.contactCategoryTitle}>{cat.title}</h4>
                <p className={s.contactCategoryDesc}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Floating Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className={s.contactFormCard}
        >
          <h3 className={s.formCardTitle}>Book a Free Strategy Call</h3>
          <p className={s.formCardSub}>You can reach us anytime</p>

          <form className={s.formBody}>
            <div className={s.formRow2}>
              <div className={s.formField}>
                <input
                  type="text"
                  placeholder="First name"
                  className={s.formInput2}
                />
              </div>
              <div className={s.formField}>
                <input
                  type="text"
                  placeholder="Last name"
                  className={s.formInput2}
                />
              </div>
            </div>

            <div className={s.formField}>
              <input
                type="email"
                placeholder="Your email"
                className={s.formInput2}
              />
            </div>

            <div className={s.formField}>
              <input
                type="text"
                placeholder="How can we help?"
                className={s.formInput2}
              />
            </div>

            <div className={s.formField}>
              <textarea
                rows={4}
                placeholder="Tell us about your goals..."
                className={`${s.formInput2} ${s.formTextarea2}`}
              />
            </div>

            <button type="submit" className={s.formSubmitBtn2}>
              Send Message <Send size={16} />
            </button>

            <p className={s.formDisclaimer}>
              By contacting us, you agree to our{" "}
              <a href="#" className={s.formDisclaimerLink}>Terms of Service</a>{" "}
              and{" "}
              <a href="#" className={s.formDisclaimerLink}>Privacy Policy</a>.
            </p>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
