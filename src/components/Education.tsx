"use client";

import styles from "./Education.module.css";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educations = [
  {
    degree: "BSc (Hons) in Computer Science and Software Engineering",
    institution: "University of Bedfordshire",
    period: "2021 – 2022",
    grade: "Second Class, Upper Division",
    icon: <GraduationCap size={26} />,
    iconClass: "uni",
  },
  {
    degree: "Higher National Diploma in Information Technology",
    institution: "Sri Lankan Institute of Information Technology (SLIIT)",
    period: "2019 – 2021",
    grade: null,
    icon: <Award size={26} />,
    iconClass: "diploma",
  },
  {
    degree: "G.C.E. Advanced Level — Physical Science Stream",
    institution: "Dharmaraja College, Kandy",
    period: "2019 – 2021",
    grade: null,
    icon: <BookOpen size={26} />,
    iconClass: "school",
  },
];

export default function Education() {
  return (
    <section className={`section ${styles.education}`} id="education">
      <div className="container">
        <ScrollReveal>
          <div className={styles.educationHeader}>
            <span className="section-label">Education</span>
            <h2 className="section-title">
              Academic <span className="gradient-text">Background</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              My educational foundation in computer science and engineering
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.educationGrid}>
          {educations.map((edu, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <div className={`glass-card ${styles.eduCard}`}>
                <div
                  className={`${styles.eduIcon} ${
                    styles[edu.iconClass as keyof typeof styles]
                  }`}
                >
                  {edu.icon}
                </div>
                <h3 className={styles.eduDegree}>{edu.degree}</h3>
                <p className={styles.eduInstitution}>{edu.institution}</p>
                {edu.grade && (
                  <p className={styles.eduGrade}>{edu.grade}</p>
                )}
                <span className={styles.eduPeriod}>{edu.period}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
