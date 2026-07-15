"use client";

import { useState } from "react";
import styles from "./Experience.module.css";
import ScrollReveal from "./ScrollReveal";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "hSenid Software Lanka",
    period: "2025 – Present",
    badge: "senior",
    details: [
      "Architected and deployed a highly scalable, serverless USSD-based mobile classified advertisements platform utilizing AWS Cloud Services (API Gateway, Lambda) to ensure high availability and structural fault tolerance.",
      "Engineered an automated WhatsApp-based consultation platform using Java, Spring Boot, and MongoDB; integrated the WhatsApp Cloud API, Redis caching, and payment gateway services to streamline client interactions and transaction handling.",
      "Designed and delivered an end-to-end Impact Area Management System using React and Firebase, improving cross-team workflows and operational tracking accuracy.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "hSenid Software Lanka",
    period: "2023 – 2025",
    badge: "associate",
    details: [
      "Developed scalable, enterprise-grade microservice-based HR modules leveraging Angular, Spring Boot, and GraphQL to process data loads efficiently.",
      "Optimized frontend Angular applications for client deployments, yielding enhanced client-side loading speeds and standardizing architectural best practices.",
      "Co-authored and delivered the Safety Confirmation Feature for the Software Research Association (SRA) project, collaborating directly with Japanese clients to align feature logic with client specifications.",
      "Conducted technical intern training sessions on corporate code standards, framework paradigms, and version control workflows, noticeably accelerating onboarding timelines.",
    ],
  },
  {
    title: "Trainee Software Engineer",
    company: "hSenid Software Lanka",
    period: "2023 Aug – 2023 Nov",
    badge: "trainee",
    details: [
      "Constructed interactive, responsive frontend dashboards and robust backend APIs for the SRA Safety Confirmation Application.",
      "Developed responsive and adaptive mobile user interfaces for the core PHT web application to maximize mobile platform compatibility.",
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "hSenid Software Lanka",
    period: "2023 Jan – 2023 Aug",
    badge: "intern",
    details: [
      "Contributed to UI component development and seamless backend API integration pipelines across modules of the PHT medical application.",
      "Designed and built a full-stack Hotel Rating System prototype utilizing Angular and Spring Boot as part of the internal engineering baseline evaluation.",
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <ScrollReveal>
          <div className={styles.experienceHeader}>
            <span className="section-label">Experience</span>
            <h2 className="section-title">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              My career progression at hSenid Software Lanka
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index + 1}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div
                  className={`glass-card ${styles.timelineCard}`}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                >
                  <span
                    className={`${styles.roleBadge} ${
                      styles[exp.badge as keyof typeof styles]
                    }`}
                  >
                    {exp.period}
                  </span>
                  <h3 className={styles.roleTitle}>{exp.title}</h3>
                  <p className={styles.roleCompany}>{exp.company}</p>

                  <ul
                    className={`${styles.roleDetails} ${
                      expandedIndex === index ? styles.expanded : ""
                    }`}
                  >
                    {exp.details.map((detail, dIndex) => (
                      <li key={dIndex}>{detail}</li>
                    ))}
                  </ul>

                  <button className={styles.expandToggle}>
                    {expandedIndex === index ? "Show Less" : "Show Details"}
                    <ChevronDown
                      size={16}
                      className={`${styles.expandIcon} ${
                        expandedIndex === index ? styles.rotated : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
