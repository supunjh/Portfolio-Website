"use client";

import styles from "./Hero.module.css";
import { Code2, Database, Cloud, Layers, ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Animated background */}
      <div className={styles.heroBg}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <div className={styles.greeting}>
            <span className={styles.greetingLine} />
            Hello, I&apos;m
          </div>
          <h1 className={styles.heroName}>
            Supun{" "}
            <span className="gradient-text">Jayasuriya</span>
          </h1>
          <p className={styles.heroTitle}>Software Engineer</p>
          <p className={styles.heroDescription}>
            Performance-driven Software Engineer with 3+ years of experience
            architecting scalable full-stack applications using Angular, Spring
            Boot, and AWS cloud environments. Passionate about building
            high-impact solutions that make a difference.
          </p>
          <div className={styles.heroCtas}>
            <button
              className={styles.ctaPrimary}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
              <ArrowDown size={18} />
            </button>
            <a
              href="/Supun_Jayasuriya_CV.pdf"
              download
              className={styles.ctaDownload}
            >
              <Download size={18} />
              Download CV
            </a>
            <button
              className={styles.ctaSecondary}
              onClick={() =>
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </button>
          </div>
        </div>

        {/* Visual element */}
        <div className={styles.heroVisual}>
          <div className={styles.avatarRing} />
          <div className={styles.avatarGlow} />
          <div className={styles.avatarInner}>
            <span className={styles.avatarInitials}>SJ</span>
          </div>
          <div className={styles.floatingIcon}>
            <Code2 size={20} />
          </div>
          <div className={styles.floatingIcon}>
            <Database size={20} />
          </div>
          <div className={styles.floatingIcon}>
            <Cloud size={20} />
          </div>
          <div className={styles.floatingIcon}>
            <Layers size={20} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
