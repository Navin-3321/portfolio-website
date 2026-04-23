import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navin Karthick E | Cybersecurity Researcher & Web Application Security Expert",
  description:
    "Portfolio of Navin Karthick E — Cybersecurity Researcher specializing in Web Application Security, VAPT, AI-based Security Solutions, and Privacy-Preserving Systems. B.Tech CSE Final Year, Published Author.",
  keywords: [
    "Cybersecurity",
    "Vulnerability Assessment",
    "Penetration Testing",
    "VAPT",
    "Web Application Security",
    "AI Security",
    "Federated Learning",
    "Navin Karthick",
    "Security Researcher",
    "Ethical Hacking",
  ],
  authors: [{ name: "Navin Karthick E" }],
  openGraph: {
    title: "Navin Karthick E | Cybersecurity Researcher",
    description:
      "Cybersecurity Researcher specializing in VAPT, Web App Security, and AI-based Privacy-Preserving Systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050a15] text-[#e2e8f0] antialiased">{children}</body>
    </html>
  );
}
