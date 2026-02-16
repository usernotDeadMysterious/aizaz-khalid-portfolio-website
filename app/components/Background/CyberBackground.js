"use client";
import { useEffect, useRef } from "react";

export default function CyberBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    /* ==============================
       MATRIX CODE RAIN
    ============================== */
    const letters =
      "01アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    /* ==============================
       PARTICLES (DATA NODES)
    ============================== */
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.8 + 0.5,
    }));

    let glitchTimer = 0;

    const draw = () => {
      // Background fade
      ctx.fillStyle = "rgba(5, 10, 15, 0.15)";
      ctx.fillRect(0, 0, width, height);

      /* Matrix text */
      ctx.fillStyle = "#00ffcc";
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((y, i) => {
        const text = letters.charAt(
          Math.floor(Math.random() * letters.length)
        );
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });

      /* Particles */
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffaa";
        ctx.fill();

        /* Connection lines */
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0,255,170,${
              1 - dist / 120
            })`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      /* Glitch effect */
      glitchTimer++;
      if (glitchTimer % 180 === 0) {
        ctx.globalCompositeOperation = "difference";
        ctx.fillStyle = "rgba(0,255,255,0.15)";
        ctx.fillRect(
          Math.random() * width,
          Math.random() * height,
          width * 0.4,
          30
        );
        ctx.globalCompositeOperation = "source-over";
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "radial-gradient(circle at center, #050b12, #02060a)",
      }}
    />
  );
}
