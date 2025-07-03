// components/ParticleBackground.js
'use client'
import { useEffect } from 'react';

const ParticleBackground = ({ fixed = true }) => {
  useEffect(() => {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 120;
    const maxDistance = 75;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = '#fa321b'; // sky blue
        // ctx.fillStyle = '#000000'; // sky blue
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            // ctx.strokeStyle = 'rgba(243, 126, 112, 0.1)';
            // ctx.strokeStyle = 'rgba(67, 255, 100, 0.85)'; //green
            // ctx.strokeStyle = 'rgba(255, 73, 124, 1)'; //pinkinsh red
            ctx.strokeStyle = 'rgba(255, 73, 124, 0.55)'; //ligh pink

            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
  // <canvas id="background-canvas" className="fixed top-0 left-0 w-screen h-screen -z-10"></canvas>
   <canvas
      id="background-canvas"
      className={`${fixed ? 'fixed' : 'absolute'} top-0 left-0 w-full h-full -z-10 pointer-events-none`}
    />
);
};

export default ParticleBackground;
