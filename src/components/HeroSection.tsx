"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Download, MapPin, Mail, ChevronDown, Terminal } from "lucide-react";

const roles = [
  "Cybersecurity Researcher",
  "Web App Security Expert",
  "Vulnerability Assessor",
  "AI in Security Engineer",
  "Ethical Hacker",
  "Published Author",
];

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-[#00d4ff] font-mono">
      {displayed}
      <span className="animate-[blink_1s_step-end_infinite] border-r-2 border-[#00d4ff] ml-0.5" />
    </span>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#00d4ff]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: 0.3,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <FloatingParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-[rgba(0,255,157,0.25)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9d]" />
          </span>
          <span className="text-xs font-medium text-[#00ff9d] tracking-wider uppercase">
            Open to Cybersecurity Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-[#e2e8f0]">Navin </span>
          <span className="gradient-text-hero">Karthick E</span>
        </motion.h1>

        {/* Dynamic role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl font-medium text-[#94a3b8] mb-8 h-9 flex items-center justify-center gap-2"
        >
          <Terminal className="w-5 h-5 text-[#00d4ff] flex-shrink-0" />
          <TypewriterText />
        </motion.div>

        {/* Short bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl mx-auto text-[#64748b] text-base sm:text-lg leading-relaxed mb-3"
        >
          I got into cybersecurity because I wanted to understand how systems break —
          <span className="text-[#94a3b8]"> and then build systems that don&apos;t.</span>
        </motion.p>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-[#64748b]"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#00d4ff]" />
            Salem, Tamil Nadu, India
          </span>
          <span className="w-1 h-1 rounded-full bg-[#1a2540] hidden sm:block" />
          <span className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-[#00ff9d]" />
            navinkarthick1@gmail.com
          </span>
          <span className="w-1 h-1 rounded-full bg-[#1a2540] hidden sm:block" />
          <span className="text-[#94a3b8] font-medium">
            B.Tech CSE (Cybersecurity) · Kalasalingam University · 2022–2026
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="/resume.pdf"
            download="Navin_Karthick_E_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 btn-primary rounded-xl text-sm font-bold tracking-wide shadow-[0_0_30px_rgba(0,212,255,0.3)]"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="https://www.linkedin.com/in/navinkarthick/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 btn-glow-blue rounded-xl text-sm font-semibold tracking-wide"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn Profile
          </a>
          <a
            href="mailto:navinkarthick1@gmail.com"
            className="flex items-center gap-2 px-7 py-3.5 btn-glow-green rounded-xl text-sm font-semibold tracking-wide"
          >
            <Mail className="w-4 h-4" />
            Let&apos;s Connect
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-16"
        >
          {[
            { value: "3+", label: "Years in Security" },
            { value: "3", label: "Publications" },
            { value: "1", label: "Patent Filed" },
            { value: "3", label: "Internships" },
          ].map((stat) => (
            <div key={stat.label} className="card-premium rounded-xl p-4 text-center">
              <div className="text-2xl font-bold font-display gradient-text-hero mb-1">{stat.value}</div>
              <div className="text-xs text-[#64748b] tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-[#64748b]">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-[#00d4ff]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
