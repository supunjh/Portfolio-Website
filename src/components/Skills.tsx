"use client";

import styles from "./Skills.module.css";
import ScrollReveal from "./ScrollReveal";
import { Monitor, Server, Database, Cloud } from "lucide-react";
import { 
  SiAngular, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiBootstrap, SiJquery, SiChartdotjs, SiReactivex,
  SiSpringboot, SiGraphql, SiApollographql, SiMongodb, SiMysql, SiFirebase, SiRedis, SiGithubactions
} from "react-icons/si";
import { FaJava, FaNodeJs, FaWhatsapp, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Monitor size={22} />,
    iconClass: "frontend",
    skills: [
      { name: "Angular (12+)", icon: <SiAngular /> },
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "Nebular", icon: null },
      { name: "ChartJS", icon: <SiChartdotjs /> },
      { name: "RxJS", icon: <SiReactivex /> },
      { name: "Akita", icon: null },
    ],
  },
  {
    title: "Backend & APIs",
    icon: <Server size={22} />,
    iconClass: "backend",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "RESTful APIs", icon: <TbApi /> },
      { name: "Apollo GraphQL", icon: <SiApollographql /> },
      { name: "WhatsApp Cloud API", icon: <FaWhatsapp /> },
    ],
  },
  {
    title: "Databases & Caching",
    icon: <Database size={22} />,
    iconClass: "database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: <Cloud size={22} />,
    iconClass: "devops",
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "API Gateway", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <ScrollReveal>
          <div className={styles.skillsHeader}>
            <span className="section-label">Skills</span>
            <h2 className="section-title">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.skillCategories}>
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index + 1}>
              <div className={`glass-card ${styles.categoryCard}`}>
                <div className={styles.categoryHeader}>
                  <div
                    className={`${styles.categoryIcon} ${
                      styles[category.iconClass as keyof typeof styles]
                    }`}
                  >
                    {category.icon}
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </div>
                <div className={styles.skillsList}>
                  {category.skills.map((skill) => (
                    <span key={skill.name} className={styles.skillTag}>
                      {skill.icon && <span className={styles.skillIcon}>{skill.icon}</span>}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
