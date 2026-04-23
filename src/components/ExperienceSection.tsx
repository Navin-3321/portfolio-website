"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Building2, ChevronRight } from "lucide-react";

const internships = [
  {
    id: 1,
    role: "Cyber Security Intern",
    company: "The Red Users",
    period: "Aug 2025 – Nov 2025",
    duration: "4 Months",
    color: "blue",
    tasks: [
      "Web Application Security",
      "Vulnerability Assessment & Reporting",
      "Recon, Enumeration & Analysis",
      "Secure Configurations",
      "Professional Documentation",
      "Real-world security case studies",
    ],
  },
  {
    id: 2,
    role: "Cybersecurity Intern",
    company: "Future Interns",
    period: "Aug 2025 – Sep 2025",
    duration: "2 Months",
    color: "green",
    tasks: [
      "Web Application Security",
      "Vulnerability Assessment",
      "CVE Analysis",
      "Security Mitigation",
    ],
  },
  {
    id: 3,
    role: "Cyber Security Intern",
    company: "Redynox",
    period: "Jul 2025 – Aug 2025",
    duration: "1 Month",
    color: "blue",
    tasks: [
      "Vulnerability Assessment",
      "OWASP Top 10 Exploitation",
      "ZAP Proxy Testing",
      "Web Application Security Testing",
      "Red Team vs Blue Team Mindset",
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-tag mb-3">// 06. Experience</div>
          <h2 className="font-display text-4xl font-bold text-[#e2e8f0]">
            Internship <span className="gradient-text-blue">Timeline</span>
          </h2>
          <p className="mt-3 text-[#64748b] max-w-xl">
            Real-world cybersecurity experience across multiple industry internships.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 lg:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {internships.map((intern, i) => (
              <motion.div
                key={intern.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex gap-6 lg:gap-10"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <div
                    className={`w-10 h-10 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center z-10 relative ${
                      intern.color === "blue"
                        ? "bg-gradient-to-br from-[#00d4ff] to-[#007a99] shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                        : "bg-gradient-to-br from-[#00ff9d] to-[#007a4d] shadow-[0_0_20px_rgba(0,255,157,0.4)]"
                    }`}
                  >
                    <Briefcase className="w-4 h-4 lg:w-7 lg:h-7 text-[#050a15]" strokeWidth={2} />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 card-premium rounded-2xl p-6 lg:p-8 group relative overflow-hidden mb-2">
                  {/* Top accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 ${
                      intern.color === "blue"
                        ? "bg-gradient-to-r from-[#00d4ff] to-transparent"
                        : "bg-gradient-to-r from-[#00ff9d] to-transparent"
                    }`}
                  />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#e2e8f0] mb-1">
                        {intern.role}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Building2 className={`w-4 h-4 ${intern.color === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"}`} />
                        <span className={`text-sm font-semibold ${intern.color === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"}`}>
                          {intern.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="flex items-center gap-1.5 text-xs text-[#64748b]">
                        <Calendar className="w-3.5 h-3.5" />
                        {intern.period}
                      </span>
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          intern.color === "blue"
                            ? "bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] text-[#00d4ff]"
                            : "bg-[rgba(0,255,157,0.08)] border border-[rgba(0,255,157,0.2)] text-[#00ff9d]"
                        }`}
                      >
                        {intern.duration}
                      </span>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="grid sm:grid-cols-2 gap-2">
                    {intern.tasks.map((task) => (
                      <div key={task} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                        <ChevronRight
                          className={`w-3.5 h-3.5 flex-shrink-0 ${
                            intern.color === "blue" ? "text-[#00d4ff]" : "text-[#00ff9d]"
                          }`}
                        />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
