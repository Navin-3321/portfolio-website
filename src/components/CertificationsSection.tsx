"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM / Coursera",
    desc: "Core cybersecurity concepts, threat modeling, and security architecture.",
    color: "blue",
    status: "Earned",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco NetAcad",
    desc: "Network security, threat landscape analysis, and security policies.",
    color: "green",
    status: "Earned",
  },
  {
    title: "OWASP Top 10 Web Security",
    issuer: "OWASP Foundation",
    desc: "Web application vulnerabilities and mitigation strategies per OWASP guidelines.",
    color: "blue",
    status: "Earned",
  },
  {
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "EC-Council",
    desc: "Hands-on ethical hacking methodologies, tools, and techniques.",
    color: "green",
    status: "Earned",
  },
  {
    title: "Python for Cybersecurity",
    issuer: "Infosec Institute",
    desc: "Python scripting for automation, penetration testing, and security analysis.",
    color: "blue",
    status: "Earned",
  },
  {
    title: "Machine Learning for Security",
    issuer: "Coursera / Stanford",
    desc: "AI and ML techniques applied to threat detection and security analytics.",
    color: "green",
    status: "Earned",
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag mb-3">// 07. Certifications</div>
          <h2 className="font-display text-4xl font-bold text-[#e2e8f0]">
            Credentials &amp; <span className="gradient-text-green">Recognition</span>
          </h2>
          <p className="mt-3 text-[#64748b] max-w-xl">
            Industry-recognized certifications validating expertise across cybersecurity and AI.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium rounded-2xl p-6 relative overflow-hidden group"
            >
              {/* Top accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 ${
                  cert.color === "blue"
                    ? "bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"
                    : "bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent"
                } opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                  cert.color === "blue"
                    ? "bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)]"
                    : "bg-[rgba(0,255,157,0.08)] border border-[rgba(0,255,157,0.2)]"
                }`}
              >
                <Award
                  className={`w-5 h-5 ${cert.color === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"}`}
                />
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-sm text-[#e2e8f0] mb-1 leading-snug">
                {cert.title}
              </h3>
              <p
                className={`text-xs font-medium mb-3 ${
                  cert.color === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"
                }`}
              >
                {cert.issuer}
              </p>
              <p className="text-xs text-[#64748b] leading-relaxed mb-4">{cert.desc}</p>

              {/* Badge */}
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  cert.color === "blue"
                    ? "bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] text-[#00d4ff]"
                    : "bg-[rgba(0,255,157,0.08)] border border-[rgba(0,255,157,0.2)] text-[#00ff9d]"
                }`}
              >
                ✓ {cert.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
