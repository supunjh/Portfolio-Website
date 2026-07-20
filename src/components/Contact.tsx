"use client";

import styles from "./Contact.module.css";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { Linkedin } from "./BrandIcons";

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <ScrollReveal>
          <div className={styles.contactHeader}>
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Have a project in mind? Let&apos;s discuss how I can help bring your
              ideas to life.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactInfoTitle}>Get in Touch</h3>
            <p className={styles.contactInfoText}>
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of these channels.
            </p>

            <div className={styles.contactCards}>
              <a
                href="mailto:supunjhs@gmail.com"
                className={`glass-card ${styles.contactCard}`}
              >
                <div className={styles.contactCardIcon}>
                  <Mail size={20} />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Email</div>
                  <div className={styles.contactCardValue}>
                    supunjhs@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="tel:+94710330557"
                className={`glass-card ${styles.contactCard}`}
              >
                <div className={styles.contactCardIcon}>
                  <Phone size={20} />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Phone</div>
                  <div className={styles.contactCardValue}>
                    +94 710 330 557
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/supun-jayasuriya-6b6208193"
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card ${styles.contactCard}`}
              >
                <div className={styles.contactCardIcon}>
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>LinkedIn</div>
                  <div className={styles.contactCardValue}>
                    Supun Jayasuriya
                  </div>
                </div>
              </a>

              <div className={`glass-card ${styles.contactCard}`}>
                <div className={styles.contactCardIcon}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div className={styles.contactCardLabel}>Location</div>
                  <div className={styles.contactCardValue}>
                    Kandy, Sri Lanka
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
