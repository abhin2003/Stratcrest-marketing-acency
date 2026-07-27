"use client";
import React, { useEffect, useRef } from 'react';

export function DotMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 14;
    let dots: { x: number, y: number, offset: number, speed: number }[] = [];

    const createGrid = () => {
      dots = [];
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          dots.push({
            x,
            y,
            offset: Math.random() * Math.PI * 2,
            speed: 0.001 + Math.random() * 0.002,
          });
        }
      }
    };

    const handleResize = () => {
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
      createGrid();
    };

    window.addEventListener('resize', handleResize);
    // Initialize size and grid
    handleResize();

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Mathematically precise calculation of the globe's center based on max-w-7xl grid layout
      const isDesktop = width >= 1024;
      const containerWidth = Math.min(width, 1280); // max-w-7xl is 1280px

      // On desktop, it's the center of the right half of the 1280px container
      let focalX = isDesktop
        ? (width / 2) + (containerWidth / 4)
        : width / 2;

      // On desktop, hero has pt-48 (192px) and canvas is 600px. 192 + 300 = 492px from top.
      // Total height is roughly 192 + 600 + 128 = 920. 492/920 ~ 0.53
      let focalY = isDesktop
        ? height * 0.53
        : height * 0.75;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = dot.x - focalX;
        const dy = dot.y - focalY;
        const distSq = dx * dx + dy * dy;

        // Sinusoidal shimmer
        const alpha = 0.25 + Math.sin(time * dot.speed + dot.offset) * 0.15;

        // Radial proximity to 3D Globe (800 squared = 640000)
        // Avoid Math.sqrt for 90% of the dots!
        if (distSq < 640000) {
          // Create a clean cutout hole slightly larger than the globe (radius ~300px)
          if (distSq < 90000) {
            continue; // Skip rendering this dot
          }

          const dist = Math.sqrt(distSq);
          const purpleFactor = 1 - dist / 800;
          // Vibrant Stratcrest Purple
          ctx.fillStyle = `rgba(147, 51, 234, ${Math.min(1, alpha + purpleFactor * 0.6)})`;
        } else {
          ctx.fillStyle = `rgba(160, 160, 175, ${alpha})`;
        }

        ctx.fillRect(dot.x, dot.y, 2, 2); // Fast 2D square rendering
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
}
