"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award, Star } from "lucide-react";

const publications = [
  {
    id: 1,
    title:
      "BullyDetectX: A Privacy-Preserving, Severity-Aware, and Multilingual Cyberbullying Detection System Using Federated Learning and Explainable AI",
    abstract:
      "Proposes a novel federated learning approach for multilingual cyberbullying detection with explainable AI integration for severity classification (Non-toxic, Moderate, Severe) while fully preserving user privacy.",
    keywords: ["Federated Learning", "Explainable AI", "Privacy", "NLP", "Cyberbullying"],
    type: "Research Paper",
    accentColor: "blue",
  },
  {
    id: 2,
    title:
      "Dynamic Noise Injection with On-Demand Bootstrapping (DNIB): A Robust Framework for Privacy-Preserving Data Analysis",
    abstract:
      "Introduces the DNIB framework for privacy-preserving data analysis, dynamically injecting noise while maintaining analytical utility across healthcare, finance, and enterprise domains.",
    keywords: ["Privacy", "Differential Privacy", "Data Security", "Healthcare", "Finance"],
    type: "Research Paper",
    accentColor: "green",
  },
  {
    id: 3,
    title:
      "Parallel Brute-Force Decryption Tool with Grammar and Structure Validation for Enhanced Cryptographic Cracking Efficiency",
    abstract:
      "Presents a high-efficiency parallel cryptographic cracking framework leveraging grammar and structure validation to eliminate invalid search paths and significantly reduce decryption time.",
    keywords: ["Cryptography", "Parallel Computing", "Brute-Force", "Security Tools"],
    type: "Research Paper",
    accentColor: "blue",
  },
];

export default function PublicationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="publications" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag mb-3">// 04. Publications</div>
          <h2 className="font-display text-4xl font-bold text-[#e2e8f0]">
            Published <span className="gradient-text-green">Research</span>
          </h2>
          <p className="mt-3 text-[#64748b] max-w-xl">
            Peer-reviewed research contributions advancing privacy, security, and AI fields.
          </p>
        </motion.div>

        {/* Publication cards */}
        <div className="space-y-5">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-premium rounded-2xl p-7 relative overflow-hidden group"
            >
              {/* Accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 ${
                  pub.accentColor === "blue"
                    ? "bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"
                    : "bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent"
                }`}
              />
              {/* Left border accent */}
              <div
                className={`absolute left-0 top-6 bottom-6 w-0.5 ${
                  pub.accentColor === "blue" ? "bg-[#00d4ff]" : "bg-[#00ff9d]"
                } opacity-40 group-hover:opacity-80 transition-opacity duration-300`}
              />

              <div className="pl-5">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        pub.accentColor === "blue"
                          ? "bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)]"
                          : "bg-[rgba(0,255,157,0.08)] border border-[rgba(0,255,157,0.2)]"
                      }`}
                    >
                      <BookOpen
                        className={`w-5 h-5 ${
                          pub.accentColor === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"
                        }`}
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 ${
                          pub.accentColor === "blue"
                            ? "bg-[rgba(0,212,255,0.12)] border border-[rgba(0,212,255,0.3)] text-[#00d4ff]"
                            : "bg-[rgba(0,255,157,0.1)] border border-[rgba(0,255,157,0.3)] text-[#00ff9d]"
                        }`}
                      >
                        <Award className="w-3 h-3" />
                        {pub.type}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] text-[#94a3b8] flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-[#ffc107]" />
                        Published Author
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#64748b] font-mono">#{String(pub.id).padStart(2, "0")}</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-[#e2e8f0] text-base lg:text-lg leading-snug mb-3">
                  {pub.title}
                </h3>

                {/* Abstract */}
                <p className="text-[#64748b] text-sm leading-relaxed mb-5">{pub.abstract}</p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs px-2.5 py-1 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#64748b]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
