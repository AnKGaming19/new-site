import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    let mouse = { x: -9999, y: -9999 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.size = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.5 ? '0, 240, 255' : '112, 0, 255';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            const directionX = (dx / distance) * force * 1.0;
            const directionY = (dy / distance) * force * 1.0;
            this.x -= directionX;
            this.y -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, 0.6)`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 25000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      // Draw Discreet Spotlight
      if (mouse.x !== -9999) {
          ctx.save();
          ctx.globalCompositeOperation = 'screen';
          // Increased radius (300) but drastically reduced opacity for "Discreet" look
          const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 300);
          gradient.addColorStop(0, 'rgba(0, 240, 255, 0.1)'); // Very subtle cyan
          gradient.addColorStop(0.4, 'rgba(112, 0, 255, 0.05)'); // Very subtle purple
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, 300, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
      }

      particles.forEach(p => {
        p.update();
        p.draw();

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${p.color}, ${ (1 - distance/120) * 0.3 })`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        // Check if mouse is strictly within the element's bounds
        if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
             mouse.x = e.clientX - rect.left;
             mouse.y = e.clientY - rect.top;
        } else {
             mouse.x = -9999;
             mouse.y = -9999;
        }
    };

    window.addEventListener('resize', handleResize);
    // Use window listener to ensure smooth tracking even if moving fast, 
    // but the bounds check above ensures we only draw when inside this specific section.
    window.addEventListener('mousemove', handleMouseMove);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
};

export default ParticleBackground;