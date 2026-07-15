"use client";

import styles from "./Skills.module.css";
import ScrollReveal from "./ScrollReveal";
import { Monitor, Server, Database, Cloud, Cpu, Code2, Wrench, Sparkles, Layers, Brain } from "lucide-react";
import { 
  SiAngular, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiBootstrap, SiJquery, SiChartdotjs, SiReactivex,
  SiSpringboot, SiGraphql, SiApollographql, SiMongodb, SiMysql, SiFirebase, SiRedis, SiGithubactions,
  SiLinux, SiAndroid, SiNginx, SiApache, SiIntellijidea, SiPostman,
  SiTensorflow, SiDocker, SiWireshark, SiKeycloak, SiGithubcopilot, SiGooglegemini, SiClaude
} from "react-icons/si";
import { FaJava, FaNodeJs, FaWhatsapp, FaDocker, FaGitAlt, FaAws, FaWindows } from "react-icons/fa";
import { TbApi, TbBrandFirebase } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

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
  {
    title: "Operating Systems",
    icon: <Cpu size={22} />,
    iconClass: "os",
    skills: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Windows", icon: <FaWindows /> },
      { name: "Android", icon: <SiAndroid /> },
    ],
  },
  {
    title: "Server Products",
    icon: <Server size={22} />,
    iconClass: "server",
    skills: [
      { name: "Nginx", icon: <SiNginx /> },
      { name: "Apache HTTP", icon: <SiApache /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
  {
    title: "Development Tools",
    icon: <Wrench size={22} />,
    iconClass: "tools",
    skills: [
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "Visual Studio", icon: <VscVscode /> },
      { name: "JMeter", icon: <SiApache /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
  {
    title: "Scripting Languages",
    icon: <Code2 size={22} />,
    iconClass: "scripting",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "jQuery", icon: <SiJquery /> },
      { name: "AJAX", icon: <TbApi /> },
    ],
  },
  {
    title: "AI Technologies",
    icon: <Sparkles size={22} />,
    iconClass: "ai",
    skills: [
      { name: "Google Antigravity (Gemini 3)", icon: <SiGooglegemini /> },
      { name: "Firebase Studio", icon: <TbBrandFirebase /> },
      { name: "Claude (Opus 4.5)", icon: <SiClaude /> },
      { name: "Cursor", icon: <Code2 size={16} /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot /> },
      { name: "TensorFlow (Responsible AI)", icon: <SiTensorflow /> },
      { name: "OpenAI API", icon: <Brain size={16} /> },
    ],
  },
  {
    title: "Other Technologies",
    icon: <Layers size={22} />,
    iconClass: "other",
    skills: [
      { name: "REST API", icon: <TbApi /> },
      { name: "Apache", icon: <SiApache /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "JMeter", icon: <SiApache /> },
      { name: "Wireshark", icon: <SiWireshark /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Keycloak", icon: <SiKeycloak /> },
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
