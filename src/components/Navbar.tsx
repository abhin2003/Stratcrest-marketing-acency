"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/assets/stratcrest_theme.png"
            alt="Stratcrest Logo"
            width={160}
            height={40}
            style={{ width: "auto", height: "40px", objectFit: "contain" }}
            priority
          />
        </Link>

        <ul className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.ctaLink}>
            Get Started
          </Link>
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileMenuList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={styles.mobileMenuLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: '1rem' }}>
              <Link 
                href="#contact" 
                className={styles.ctaLink} 
                style={{ display: 'inline-block', width: '100%' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
