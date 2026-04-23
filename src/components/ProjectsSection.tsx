"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Cpu, Zap, Eye, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    icon: Shield,
    title: "BullyDetectX",
    subtitle: "Privacy-Preserving Multilingual Cyberbullying Detection System",
    description:
      "Built an advanced multilingual cyberbullying detection platform using Federated Learning and Explainable AI to preserve user privacy while detecting toxicity severity levels (Non-toxic, Moderate, Severe). Includes web-based prediction interface for real-world deployment.",
    tags: ["Federated Learning", "Explainable AI", "Python", "Privacy-AI", "NLP"],
    highlights: ["Final Year Capstone", "Privacy-Preserving", "Severity-Aware", "XAI Integration"],
    badge: "Capstone Project",
    badgeColor: "blue",
    accentColor: "blue",
    featured: true,
  },
  {
    id: 2,
    icon: Lock,
    title: "DNIB Framework",
    subtitle: "Dynamic Noise Injection with On-Demand Bootstrapping",
    description:
      "A robust framework for privacy-preserving data analysis that balances sensitive data protection while maintaining analytical utility across healthcare, finance, and enterprise systems.",
    tags: ["Privacy", "Data Security", "Python", "Healthcare", "Enterprise"],
    highlights: ["Published Research", "Privacy Architecture", "Multi-Domain"],
    badge: "Published Research",
    badgeColor: "green",
    accentColor: "green",
    featured: false,
  },
  {
    id: 3,
    icon: Cpu,
    title: "Parallel Brute-Force Decryption Tool",
    subtitle: "Grammar-Validated Cryptographic Cracking Framework",
    description:
      "Designed a high-efficiency cryptographic cracking framework using grammar and structure validation to improve brute-force decryption performance and reduce invalid search paths.",
    tags: ["Cryptography", "Python", "Parallel Computing", "Grammar Validation"],
    highlights: ["Published Research", "Crypto Optimization", "Parallel Execution"],
    badge: "Published Research",
    badgeColor: "green",
    accentColor: "blue",
    featured: false,
  },
  {
    id: 4,
    icon: Zap,
    title: "Solar Power EV Charging Station",
    subtitle: "Eco-Friendly Smart EV Charging System",
    description:
      "Developed an eco-friendly smart EV charging system powered by solar energy for sustainable transportation infrastructure — bridging engineering with sustainability.",
    tags: ["IoT", "Solar Energy", "Embedded Systems", "Sustainability"],
    highlights: ["Patent Filed", "Cross-Domain Innovation", "Engineering"],
    badge: "Patent Filed",
    badgeColor: "gold",
    accentColor: "green",
    featured: false,
  },
  {
    id: 5,
    icon: Eye,
    title: "Biometric System Vulnerability Assessment",
    subtitle: "Security Assessment of Biometric Authentication Systems",
    description:
      "Performed a comprehensive security assessment of biometric authentication systems to identify weaknesses, attack vectors, and practical mitigation strategies.",
    tags: ["VAPT", "Biometrics", "Threat Analysis", "Security Research"],
    highlights: ["Security Research", "Vulnerability Discovery", "Attack Vectors"],
    badge: "Security Research",
    badgeColor: "blue",
    accentColor: "blue",
    featured: false,
  },
];

const badgeStyles: Record<string, string> = {
  blue: "bg-[rgba(0,212,255,0.12)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff]",
  green: "bg-[rgba(0,255,157,0.1)] border border-[rgba(0,255,157,0.3)] text-[#00ff9d]",
  gold: "bg-[rgba(255,193,7,0.1)] border border-[rgba(255,193,7,0.3)] text-[#ffc107]",
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag mb-3">// 03. Projects</div>
          <h2 className="font-display text-4xl font-bold text-[#e2e8f0]">
            Featured <span className="gradient-text-blue">Work</span>
          </h2>
          <p className="mt-3 text-[#64748b] max-w-xl">
            Research-driven projects at the intersection of security, privacy, and AI — built for real-world impact.
          </p>
        </motion.div>

        {/* Featured project (large card) */}
        {featured.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 card-premium rounded-2xl p-8 lg:p-10 relative overflow-hidden group"
          >
            {/* BG accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[rgba(0,212,255,0.06)] to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />

            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#00ff9d] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)] flex-shrink-0">
                <project.icon className="w-7 h-7 text-[#050a15]" strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display text-2xl font-bold text-[#e2e8f0]">{project.title}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles[project.badgeColor]}`}>
                    {project.badge}
                  </span>
                </div>
                <p className="text-[#00d4ff] text-sm font-medium mb-4">{project.subtitle}</p>
                <p className="text-[#94a3b8] leading-relaxed text-sm mb-6">{project.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.highlights.map((h) => (
                    <span key={h} className="text-xs px-3 py-1 rounded-full bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.15)] text-[#00d4ff]">
                      ✓ {h}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#64748b]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Grid of rest */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="card-premium rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Top line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 ${
                  project.accentColor === "blue"
                    ? "bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"
                    : "bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    project.accentColor === "blue"
                      ? "bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)]"
                      : "bg-[rgba(0,255,157,0.08)] border border-[rgba(0,255,157,0.2)]"
                  }`}
                >
                  <project.icon
                    className={`w-5 h-5 ${
                      project.accentColor === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"
                    }`}
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-base text-[#e2e8f0] leading-tight">
                      {project.title}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeStyles[project.badgeColor]}`}>
                      {project.badge}
                    </span>
                  </div>
                  <p
                    className={`text-xs font-medium ${
                      project.accentColor === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"
                    }`}
                  >
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-[#64748b] text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.highlights.map((h) => (
                  <span
                    key={h}
                    className={`text-xs px-2.5 py-1 rounded-full ${
                      project.accentColor === "blue"
                        ? "bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.15)] text-[#00d4ff]"
                        : "bg-[rgba(0,255,157,0.06)] border border-[rgba(0,255,157,0.15)] text-[#00ff9d]"
                    }`}
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] text-[#64748b]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
