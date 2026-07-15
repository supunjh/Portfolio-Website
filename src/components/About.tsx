"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./About.module.css";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={styles.statNumber}>
      {count}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
        </ScrollReveal>

        <div className={styles.aboutContent}>
          <ScrollReveal>
            <div className={styles.aboutText}>
              <p className={styles.aboutDescription}>
                I&apos;m a performance-driven Software Engineer with over{" "}
                <span className={styles.highlight}>3 years of professional experience</span>{" "}
                architecting, developing, and deploying scalable full-stack
                applications. My expertise spans across{" "}
                <span className={styles.highlight}>Angular, Spring Boot, and AWS</span>{" "}
                cloud environments.
              </p>
              <p className={styles.aboutDescription}>
                I have a proven track record of delivering high-impact solutions
                ranging from serverless USSD enterprise platforms to automated
                customer engagement architectures while collaborating directly
                with international clients. I&apos;m passionate about optimizing
                system performance, streamlining data access layers, and
                mentoring cross-functional teams.
              </p>

              <div className={styles.aboutStats}>
                <div className={`glass-card ${styles.statCard}`}>
                  <AnimatedCounter target={3} suffix="+" />
                  <span className={styles.statLabel}>Years Exp.</span>
                </div>
                <div className={`glass-card ${styles.statCard}`}>
                  <AnimatedCounter target={10} suffix="+" />
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={`glass-card ${styles.statCard}`}>
                  <AnimatedCounter target={15} suffix="+" />
                  <span className={styles.statLabel}>Technologies</span>
                </div>
                <div className={`glass-card ${styles.statCard}`}>
                  <AnimatedCounter target={4} />
                  <span className={styles.statLabel}>Promotions</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className={styles.aboutVisual}>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}>
                  <Briefcase size={22} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Current Role</div>
                  <div className={styles.infoValue}>Software Engineer</div>
                </div>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoValue}>Kandy, Sri Lanka</div>
                </div>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}>
                  <Mail size={22} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Email</div>
                  <div className={styles.infoValue}>supunjhs@gmail.com</div>
                </div>
              </div>
              <div className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}>
                  <Phone size={22} />
                </div>
                <div>
                  <div className={styles.infoLabel}>Phone</div>
                  <div className={styles.infoValue}>+94 710 330 557</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
