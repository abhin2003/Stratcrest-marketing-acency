"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import s from "./Sections.module.css";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again later.");
    }
  };

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

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={s.successContainer}
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px"
                }}
              >
                <CheckCircle2 size={48} color="#7c3aed" />
                <div>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#111", marginBottom: "8px" }}>Message Sent!</h4>
                  <p style={{ color: "#666", fontSize: "0.95rem" }}>
                    We&apos;ve received your request and will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className={s.formSubmitBtn2}
                  style={{ marginTop: "12px", padding: "10px 24px", width: "auto" }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className={s.formBody}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className={s.formRow2}>
                  <div className={s.formField}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={s.formInput2}
                    />
                  </div>
                  <div className={s.formField}>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={s.formInput2}
                    />
                  </div>
                </div>

                <div className={s.formField}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={s.formInput2}
                  />
                </div>

                <div className={s.formField}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    className={s.formInput2}
                  />
                </div>

                <div className={s.formField}>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us about your goals..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`${s.formInput2} ${s.formTextarea2}`}
                  />
                </div>

                {status === "error" && (
                  <p style={{ color: "#ef4444", fontSize: "0.85rem", marginBottom: "12px" }}>
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={s.formSubmitBtn2}
                >
                  {status === "loading" ? (
                    <>Sending... <Loader2 size={16} className={s.spinner} /></>
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </button>

                <p className={s.formDisclaimer}>
                  By contacting us, you agree to our{" "}
                  <a href="#" className={s.formDisclaimerLink}>Terms of Service</a>{" "}
                  and{" "}
                  <a href="#" className={s.formDisclaimerLink}>Privacy Policy</a>.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;

