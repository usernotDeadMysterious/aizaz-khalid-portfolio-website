"use client";
import { useEffect, useRef } from "react";

export default function CyberSecurityBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    const nodes = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(2,6,10,0.35)";
      ctx.fillRect(0, 0, w, h);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        ctx.fillStyle = "#00ffaa";
        ctx.fillRect(n.x, n.y, 2, 2);

        nodes.forEach((m) => {
          const d = Math.hypot(n.x - m.x, n.y - m.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(0,255,170,${1 - d / 120})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(circle at center, #020b10 0%, #000308 70%)",
      }}
    />
  );
}
