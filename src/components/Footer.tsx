import styles from "./Footer.module.css";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={styles.footerLogo}>{"<SJ />"}</span>

        <p className={styles.footerText}>
          © {new Date().getFullYear()} Supun Jayasuriya. All rights reserved.
        </p>

        <div className={styles.footerSocials}>
          <a
            href="mailto:supunjhs@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/supun-jayasuriya-6b6208193"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/supunjh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
