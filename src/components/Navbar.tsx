"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <div className={styles.navContent}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {"<SJ />"}
        </a>

        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.href}
              className={`${styles.navLink} ${
                activeSection === item.href.slice(1) ? styles.active : ""
              }`}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
          <button
            className={styles.contactBtn}
            onClick={() => handleNavClick("#contact")}
          >
            Contact
          </button>
        </div>

        <button
          className={`${styles.menuToggle} ${mobileOpen ? styles.open : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className={`${styles.mobileOverlay} ${
            mobileOpen ? styles.open : ""
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              className={`${styles.mobileNavLink} ${
                activeSection === item.href.slice(1) ? styles.active : ""
              }`}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
          <button
            className={styles.mobileContactBtn}
            onClick={() => handleNavClick("#contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
