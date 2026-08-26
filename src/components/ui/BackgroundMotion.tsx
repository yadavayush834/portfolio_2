"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Handle high DPI & full screen sizing
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Mouse tracking for gentle interactive glow
    const mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Particle nodes
    const particleCount = 55;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.8,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      alpha: Math.random() * 0.5 + 0.25,
      dAlpha: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
    }));

    let orbAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Base background fill
      ctx.fillStyle = "#09090b";
      ctx.fillRect(0, 0, width, height);

      orbAngle += 0.004;

      // 1. Floating Ambient Aura Orbs
      const orb1X = width * 0.35 + Math.cos(orbAngle) * (width * 0.2);
      const orb1Y = height * 0.25 + Math.sin(orbAngle) * (height * 0.18);

      const orb2X = width * 0.7 + Math.cos(orbAngle + Math.PI) * (width * 0.2);
      const orb2Y = height * 0.65 + Math.sin(orbAngle + Math.PI) * (height * 0.2);

      // Cyan / Ice ambient aura
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, 400);
      grad1.addColorStop(0, "rgba(56, 189, 248, 0.12)");
      grad1.addColorStop(0.5, "rgba(56, 189, 248, 0.03)");
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Indigo / Violet ambient aura
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, 450);
      grad2.addColorStop(0, "rgba(129, 140, 248, 0.10)");
      grad2.addColorStop(0.5, "rgba(129, 140, 248, 0.025)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Interactive mouse spotlight
      if (mouse.active) {
        const mouseGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          250
        );
        mouseGrad.addColorStop(0, "rgba(255, 255, 255, 0.04)");
        mouseGrad.addColorStop(1, "transparent");
        ctx.fillStyle = mouseGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Draw drifting constellation particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.dAlpha;
        if (p.alpha > 0.75 || p.alpha < 0.2) {
          p.dAlpha = -p.dAlpha;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 244, 245, ${p.alpha})`;
        ctx.fill();

        // Draw subtle connectors between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 125) * 0.16;
            ctx.strokeStyle = `rgba(244, 244, 245, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      style={{ display: "block" }}
    />
  );
}
