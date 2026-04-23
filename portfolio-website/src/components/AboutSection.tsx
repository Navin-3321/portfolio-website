"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Shield, Brain, Code2, Zap } from "lucide-react";

const opportunities = [
  { icon: Shield, label: "VAPT", desc: "Vulnerability Assessment & Penetration Testing" },
  { icon: Brain, label: "AI Security", desc: "AI-based Security Solutions" },
  { icon: Target, label: "Security Research", desc: "Advanced Research & Analysis" },
  { icon: Code2, label: "SOC Analyst", desc: "Security Operations Center" },
  { icon: Zap, label: "Pen Testing", desc: "Active Exploitation & Reporting" },
  { icon: Shield, label: "Threat Analysis", desc: "Threat Modeling & Intelligence" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag mb-3">// 01. About</div>
          <h2 className="font-display text-4xl font-bold text-[#e2e8f0]">
            The Person Behind the{" "}
            <span className="gradient-text-blue">Firewall</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="card-premium rounded-2xl p-8 relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[rgba(0,212,255,0.08)] to-transparent rounded-bl-3xl" />

              <p className="text-[#94a3b8] leading-relaxed text-base mb-6">
                I got into cybersecurity because I wanted to understand how systems break —
                <span className="text-[#e2e8f0] font-medium"> and then build systems that don&apos;t.</span>
              </p>
              <p className="text-[#64748b] leading-relaxed text-sm mb-6">
                Over the last 3 years, I have worked on cybersecurity research, privacy-preserving AI
                systems, vulnerability assessment, and web application security. My focus lies at the
                intersection of{" "}
                <span className="text-[#00d4ff] font-medium">Security Research + AI</span>, specifically
                building systems that are both intelligent and privacy-preserving.
              </p>

              {/* Education card */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.12)]">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#00ff9d] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#050a15]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#e2e8f0] mb-0.5">
                    B.Tech – Computer Science Engineering
                  </div>
                  <div className="text-xs text-[#00d4ff] mb-0.5">Cybersecurity Specialization</div>
                  <div className="text-xs text-[#64748b]">Kalasalingam University · 2022 – 2026</div>
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Research Focus", value: "AI + Security" },
                { label: "Primary Domain", value: "Web App Security" },
                { label: "Specialization", value: "VAPT & Privacy-AI" },
                { label: "Status", value: "Final Year · Open to Work" },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="card-premium rounded-xl p-4"
                >
                  <div className="text-xs text-[#64748b] mb-1 tracking-wide uppercase">{fact.label}</div>
                  <div className="text-sm font-semibold text-[#e2e8f0]">{fact.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Seeking Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="mb-4">
              <div className="section-tag mb-1">// Actively Seeking</div>
              <h3 className="text-xl font-display font-semibold text-[#e2e8f0]">
                Open to Opportunities In:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {opportunities.map((opp, i) => (
                <motion.div
                  key={opp.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="card-premium rounded-xl p-4 flex items-start gap-3 group cursor-default"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,212,255,0.15)] group-hover:border-[rgba(0,212,255,0.3)] group-hover:shadow-[0_0_12px_rgba(0,212,255,0.2)] transition-all duration-300">
                    <opp.icon className="w-4 h-4 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#e2e8f0] mb-0.5">{opp.label}</div>
                    <div className="text-xs text-[#64748b] leading-relaxed">{opp.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-6 p-5 rounded-xl border border-[rgba(0,255,157,0.2)] bg-[rgba(0,255,157,0.04)]"
            >
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                <span className="text-[#00ff9d] font-semibold">Published Author</span> with 3 research
                papers and an active patent. Currently completing B.Tech CSE with Cybersecurity
                Specialization — graduating 2026.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
