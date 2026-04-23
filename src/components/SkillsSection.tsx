"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Core Security",
    color: "blue",
    skills: [
      "Cybersecurity",
      "Ethical Hacking",
      "Vulnerability Assessment",
      "Penetration Testing (VAPT)",
      "Threat Analysis",
      "Recon & Enumeration",
    ],
  },
  {
    title: "Web Application Security",
    color: "green",
    skills: [
      "Web App Security",
      "OWASP Top 10",
      "OWASP ZAP",
      "WebGoat",
      "Secure Configurations",
      "CVE Analysis",
    ],
  },
  {
    title: "AI & Privacy",
    color: "blue",
    skills: [
      "Machine Learning for Security",
      "Federated Learning",
      "Explainable AI",
      "Privacy-Preserving AI",
      "Cryptography",
      "Python",
    ],
  },
  {
    title: "Tools & Documentation",
    color: "green",
    skills: [
      "Docker",
      "Report Writing",
      "Security Documentation",
      "Red Team Mindset",
      "Blue Team Mindset",
      "ZAP Proxy Testing",
    ],
  },
];

const allSkills = [
  "Cybersecurity", "VAPT", "Web Application Security", "OWASP Top 10",
  "OWASP ZAP", "WebGoat", "Docker", "Ethical Hacking", "Cryptography",
  "Python", "Machine Learning for Security", "Federated Learning",
  "Explainable AI", "Threat Analysis", "Recon & Enumeration",
  "Secure Configurations", "Report Writing", "Security Documentation",
  "CVE Analysis", "Red Team Mindset", "Blue Team Mindset",
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag mb-3">// 02. Skills</div>
          <h2 className="font-display text-4xl font-bold text-[#e2e8f0]">
            Technical <span className="gradient-text-green">Arsenal</span>
          </h2>
          <p className="mt-3 text-[#64748b] max-w-xl">
            A comprehensive set of offensive and defensive security skills developed through research, internships, and real-world projects.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-premium rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 ${
                  cat.color === "blue"
                    ? "bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"
                    : "bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent"
                }`}
              />
              <h3
                className={`font-display font-semibold text-base mb-4 ${
                  cat.color === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"
                }`}
              >
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                      cat.color === "blue" ? "skill-badge" : "skill-badge-green"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* All skills ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="card-premium rounded-2xl p-6"
        >
          <div className="section-tag mb-4">// Full Skill Set</div>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.03 }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg ${
                  i % 2 === 0 ? "skill-badge" : "skill-badge-green"
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
