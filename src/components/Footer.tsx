"use client";

import { Shield, Mail, MapPin } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 lg:px-8 border-t border-[rgba(0,212,255,0.08)]">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#00ff9d] flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.4)]">
                <Shield className="w-5 h-5 text-[#050a15]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display font-bold text-[#e2e8f0]">Navin Karthick E</div>
                <div className="text-xs text-[#64748b]">Cybersecurity Researcher</div>
              </div>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed mb-5 max-w-xs">
              Building privacy-preserving systems at the intersection of security and AI.
              Let&apos;s make the digital world safer, together.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9d]" />
              </span>
              <span className="text-xs text-[#00ff9d] font-medium">Available · Open to Opportunities</span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs font-semibold text-[#64748b] tracking-widest uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-[rgba(0,212,255,0.3)] group-hover:w-5 group-hover:bg-[#00d4ff] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold text-[#64748b] tracking-widest uppercase mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:navinkarthick1@gmail.com"
                  className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-[#00d4ff] transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)] flex items-center justify-center group-hover:bg-[rgba(0,212,255,0.15)] transition-all duration-200">
                    <Mail className="w-3.5 h-3.5 text-[#00d4ff]" />
                  </div>
                  navinkarthick1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/navinkarthick/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-[#00ff9d] transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[rgba(0,255,157,0.06)] border border-[rgba(0,255,157,0.15)] flex items-center justify-center group-hover:bg-[rgba(0,255,157,0.12)] transition-all duration-200">
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#00ff9d]" />
                  </div>
                  linkedin.com/in/navinkarthick
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#64748b]">
                <div className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                </div>
                Salem, Tamil Nadu, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#64748b]">
            © {year} Navin Karthick E · Cybersecurity Researcher & Published Author
          </p>
          <p className="text-xs text-[#64748b]">
            Built with{" "}
            <span className="text-[#00d4ff]">Next.js</span> ·{" "}
            <span className="text-[#00ff9d]">Tailwind CSS</span> ·{" "}
            <span className="text-[#94a3b8]">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
