"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-3 justify-center flex">// 08. Contact</div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#e2e8f0] mb-4">
            Let&apos;s Build Secure Systems
            <br />
            <span className="gradient-text-hero">for the Future.</span>
          </h2>
          <p className="text-[#64748b] text-base max-w-lg mx-auto leading-relaxed">
            Open to cybersecurity roles, research collaborations, internships, and consulting opportunities.
            Let&apos;s connect and make the digital world safer.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Email card */}
          <motion.a
            href="mailto:navinkarthick1@gmail.com"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card-premium rounded-2xl p-8 flex flex-col gap-5 group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00d4ff] to-[#007a99] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.3)] group-hover:shadow-[0_0_35px_rgba(0,212,255,0.5)] transition-all duration-300">
              <Mail className="w-7 h-7 text-[#050a15]" />
            </div>

            <div>
              <div className="text-xs text-[#64748b] mb-1 tracking-wide uppercase">Email</div>
              <div className="font-semibold text-[#e2e8f0] text-base mb-1">navinkarthick1@gmail.com</div>
              <div className="text-sm text-[#00d4ff] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                Send a message <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.a>

          {/* LinkedIn card */}
          <motion.a
            href="https://www.linkedin.com/in/navinkarthick/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="card-premium rounded-2xl p-8 flex flex-col gap-5 group relative overflow-hidden cursor-pointer"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,255,157,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ff9d] to-[#007a4d] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,157,0.3)] group-hover:shadow-[0_0_35px_rgba(0,255,157,0.5)] transition-all duration-300">
              <LinkedinIcon className="w-7 h-7 text-[#050a15]" />
            </div>

            <div>
              <div className="text-xs text-[#64748b] mb-1 tracking-wide uppercase">LinkedIn</div>
              <div className="font-semibold text-[#e2e8f0] text-base mb-1">linkedin.com/in/navinkarthick</div>
              <div className="text-sm text-[#00ff9d] flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                View Profile <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.a>
        </div>

        {/* Location + Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card-premium rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#00d4ff]" />
            <span className="text-[#94a3b8] text-sm">Salem, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff9d]" />
            </span>
            <span className="text-sm text-[#00ff9d] font-medium">Available for Opportunities</span>
          </div>
          <a
            href="mailto:navinkarthick1@gmail.com"
            className="flex items-center gap-2 px-6 py-2.5 btn-primary rounded-xl text-sm font-bold"
          >
            <Send className="w-4 h-4" />
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
