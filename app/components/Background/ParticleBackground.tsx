"use client";

import { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  fixed?: boolean;
}

const ParticleBackground = ({ fixed = true }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const isDarkMode = () =>
      document.documentElement.classList.contains("dark");

    /* ================= RETINA ================= */

    const resize = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scale;
      canvas.height = window.innerHeight * scale;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    /* ================= MOUSE ================= */

    const mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    /* ================= PARTICLES ================= */

    const numParticles = 120;
    const maxDistance = 120;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        const dark = isDarkMode();

        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;

        // Larger in light mode so they are visible
        this.radius = dark ? Math.random() * 2 + 1 : Math.random() * 3 + 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= window.innerWidth) this.vx *= -1;
        if (this.y <= 0 || this.y >= window.innerHeight) this.vy *= -1;

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          this.x += dx * 0.015;
          this.y += dy * 0.015;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        const dark = isDarkMode();

        context.beginPath();

        context.fillStyle = dark
          ? "rgba(0,255,170,0.95)"
          : "rgba(37,99,235,0.95)"; // strong blue in light

        context.shadowBlur = dark ? 8 : 4;
        context.shadowColor = dark ? "#00ffaa" : "#2563eb";

        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();

        context.shadowBlur = 0;
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    /* ================= MATRIX RAIN ================= */

    const letters = "01";
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    /* ================= ANIMATE ================= */

    const animate = () => {
      const dark = isDarkMode();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* ===== MATRIX RAIN (Dark Only) ===== */
      if (dark) {
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        ctx.fillStyle = "#00ffaa";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (
            drops[i] * fontSize > window.innerHeight &&
            Math.random() > 0.975
          ) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      }

      /* ===== PARTICLES ===== */
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      /* ===== CONNECTION LINES ===== */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.strokeStyle = dark
              ? `rgba(0,255,170,${1 - dist / maxDistance})`
              : `rgba(37,99,235,${0.8 - dist / (maxDistance * 1.5)})`;

            ctx.lineWidth = dark ? 1.2 : 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${
        fixed ? "fixed" : "absolute"
      } inset-0 w-screen h-screen -z-30 pointer-events-none`}
    />
  );
};

export default ParticleBackground;
