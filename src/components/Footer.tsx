"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import s from "./Sections.module.css";

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerGrid}>
          <div>
            <div className={s.footerLogo}>
              <Image
                src="/assets/stratcrest_theme.png"
                alt="Logo"
                width={160}
                height={42}
                style={{ width: "auto", height: "42px", objectFit: "contain" }}
              />
            </div>
            <p className={s.footerDesc}>
              Premium marketing & consulting for brands that demand authority and elegance in every interaction.
            </p>
          </div>

          <div>
            <h4 className={s.footerColTitle}>Navigation</h4>
            <ul className={s.footerLinks}>
              <li><Link href="#home" className={s.footerLink}>Home</Link></li>
              <li><Link href="#services" className={s.footerLink}>Services</Link></li>
              <li><Link href="#about" className={s.footerLink}>About</Link></li>
              <li><Link href="#contact" className={s.footerLink}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={s.footerColTitle}>Services</h4>
            <ul className={s.footerLinks}>
              <li><Link href="#services" className={s.footerLink}>Website Creation</Link></li>
              <li><Link href="#services" className={s.footerLink}>Ads Management</Link></li>
              <li><Link href="#services" className={s.footerLink}>Social Media</Link></li>
              <li><Link href="#services" className={s.footerLink}>Sales Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={s.footerColTitle}>Connect</h4>
            <div className={s.footerSocials}>
              <a href="mailto:stratcrest.agency@gmail.com" className={s.footerSocialLink} aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://www.instagram.com/stratcrest/" target="_blank" rel="noopener noreferrer" className={s.footerSocialLink} aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className={s.footerBottom}>
          <p className={s.copyright}>
            © 2026 Stratcrest Marketing & Consulting. All rights reserved.
          </p>
          <div className={s.footerLinksRow}>
            <Link href="#" className={s.footerLink}>Privacy Policy</Link>
            <Link href="#" className={s.footerLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
