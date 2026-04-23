import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050a15",
          secondary: "#080e1a",
          card: "#0b1222",
          "card-hover": "#0f1830",
          border: "#1a2540",
        },
        cyber: {
          blue: "#00d4ff",
          "blue-light": "#4de8ff",
          "blue-dim": "#007a99",
          green: "#00ff9d",
          "green-light": "#4dffbe",
          "green-dim": "#007a4d",
          purple: "#7c3aed",
        },
        text: {
          primary: "#e2e8f0",
          secondary: "#94a3b8",
          muted: "#64748b",
          accent: "#00d4ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
        "blink": "blink 1s step-end infinite",
        "shimmer": "shimmer 2s linear infinite",
        "border-flow": "borderFlow 4s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
        "glow-blue":
          "radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%)",
        "glow-green":
          "radial-gradient(ellipse at center, rgba(0,255,157,0.12) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(11,18,34,0.9) 0%, rgba(15,24,48,0.9) 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #050a15 0%, #0a1428 50%, #050a15 100%)",
      },
      backgroundSize: {
        "grid-size": "60px 60px",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.15)",
        "glow-green": "0 0 20px rgba(0,255,157,0.4), 0 0 60px rgba(0,255,157,0.15)",
        "glow-blue-sm": "0 0 10px rgba(0,212,255,0.3), 0 0 30px rgba(0,212,255,0.1)",
        "glow-green-sm": "0 0 10px rgba(0,255,157,0.3), 0 0 30px rgba(0,255,157,0.1)",
        "card": "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(0,212,255,0.1), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      borderColor: {
        "cyber-blue": "rgba(0,212,255,0.3)",
        "cyber-green": "rgba(0,255,157,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
