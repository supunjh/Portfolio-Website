"use client";

import { useState, FormEvent } from "react";
import styles from "./Contact.module.css";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Linkedin } from "./BrandIcons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

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

        <div className={styles.contactContent}>
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

          <ScrollReveal delay={2}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Your Name"
                  required
                  id="contact-name"
                />
                <label className={styles.formLabel} htmlFor="contact-name">
                  Name
                </label>
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  className={styles.formInput}
                  placeholder="Your Email"
                  required
                  id="contact-email"
                />
                <label className={styles.formLabel} htmlFor="contact-email">
                  Email
                </label>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Your Message"
                  required
                  id="contact-message"
                />
                <label className={styles.formLabel} htmlFor="contact-message">
                  Message
                </label>
              </div>

              {submitted ? (
                <div className={styles.successMessage}>
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              ) : (
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                  <Send size={18} />
                </button>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
