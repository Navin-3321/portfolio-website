"use client";

import { useEffect, useRef } from "react";

export default function GlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Moving blue orb top-left
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.15 + Math.sin(time * 0.5) * 40,
        canvas.height * 0.25 + Math.cos(time * 0.4) * 30,
        0,
        canvas.width * 0.15,
        canvas.height * 0.25,
        canvas.width * 0.35
      );
      g1.addColorStop(0, "rgba(0,212,255,0.08)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Moving green orb bottom-right
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.82 + Math.cos(time * 0.3) * 50,
        canvas.height * 0.72 + Math.sin(time * 0.45) * 35,
        0,
        canvas.width * 0.82,
        canvas.height * 0.72,
        canvas.width * 0.3
      );
      g2.addColorStop(0, "rgba(0,255,157,0.06)");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle center accent
      const g3 = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.5 + Math.sin(time * 0.2) * 20,
        0,
        canvas.width * 0.5,
        canvas.height * 0.5,
        canvas.width * 0.25
      );
      g3.addColorStop(0, "rgba(0,212,255,0.03)");
      g3.addColorStop(1, "transparent");
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Static cyber grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />
    </div>
  );
}
