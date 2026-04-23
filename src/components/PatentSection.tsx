"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, FileCheck, Zap, Globe } from "lucide-react";

export default function PatentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="patent" ref={ref} className="relative py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="section-tag mb-3">// 05. Patent</div>
          <h2 className="font-display text-4xl font-bold text-[#e2e8f0]">
            Innovation <span className="gradient-text-hero">Showcase</span>
          </h2>
        </motion.div>

        {/* Patent card — premium highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden group"
        >
          {/* Outer glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00d4ff] via-[#00ff9d] to-[#00d4ff] rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-[borderFlow_4s_linear_infinite] bg-[length:200%]" />

          <div className="relative card-premium rounded-2xl p-8 lg:p-12">
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ffc107] via-[#00d4ff] to-transparent" />

            {/* Background accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[rgba(0,255,157,0.05)] via-[rgba(0,212,255,0.03)] to-transparent rounded-bl-full pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#ffc107] via-[#00d4ff] to-[#00ff9d] flex items-center justify-center shadow-[0_0_30px_rgba(255,193,7,0.3),0_0_60px_rgba(0,212,255,0.15)]">
                  <Lightbulb className="w-10 h-10 text-[#050a15]" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold px-4 py-1.5 rounded-full bg-[rgba(255,193,7,0.15)] border border-[rgba(255,193,7,0.4)] text-[#ffc107] flex items-center gap-2">
                    <FileCheck className="w-3.5 h-3.5" />
                    Patent Filed
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.25)] text-[#00d4ff]">
                    Intellectual Property
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[rgba(0,255,157,0.08)] border border-[rgba(0,255,157,0.25)] text-[#00ff9d]">
                    Cross-Domain Innovation
                  </span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#e2e8f0] mb-3">
                  Solar Power EV Charging Station
                </h3>

                <p className="text-[#94a3b8] leading-relaxed text-sm lg:text-base mb-6">
                  An eco-friendly smart electric vehicle charging system powered entirely by solar energy,
                  designed for sustainable transportation infrastructure. This patent represents a
                  cross-domain engineering breakthrough — merging renewable energy, embedded systems, and
                  smart grid technology for a greener future.
                </p>

                {/* Feature grid */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Zap, label: "Solar-Powered", desc: "100% renewable energy source", color: "text-[#ffc107]" },
                    { icon: Globe, label: "Sustainable", desc: "Eco-friendly EV infrastructure", color: "text-[#00ff9d]" },
                    { icon: FileCheck, label: "Patent Filed", desc: "Officially filed innovation", color: "text-[#00d4ff]" },
                  ].map((feat) => (
                    <div
                      key={feat.label}
                      className="p-4 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)]"
                    >
                      <feat.icon className={`w-5 h-5 ${feat.color} mb-2`} />
                      <div className="text-sm font-semibold text-[#e2e8f0] mb-0.5">{feat.label}</div>
                      <div className="text-xs text-[#64748b]">{feat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
