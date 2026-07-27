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
      const cols = Math.ceil(2560 / spacing); // Cap at 2560x1440 to save CPU
      const rows = Math.ceil(1440 / spacing);

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
      if (canvas.clientWidth > 0 && canvas.clientHeight > 0) {
        width = canvas.width = canvas.clientWidth;
        height = canvas.height = canvas.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    // Initialize size and grid
    handleResize();
    createGrid();

    let currentFocalX = width >= 1024 ? (width / 2) + (Math.min(width, 1200) / 4) + 24 : width / 2;
    let currentFocalY = width >= 1024 ? (height / 2) + 40 : height * 0.75;
    let currentRadius = 200;

    const draw = (time: number) => {
      // Fix canvas distortion if parent container changes size (e.g. font loading)
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        width = canvas.width = canvas.clientWidth;
        height = canvas.height = canvas.clientHeight;
      }

      ctx.clearRect(0, 0, width, height);

      const isDesktop = width >= 1024;
      const containerWidth = Math.min(width, 1200);
      let targetFocalX = isDesktop ? (width / 2) + (containerWidth / 4) + 24 : width / 2;
      let targetFocalY = isDesktop ? (height / 2) + 40 : height * 0.75;
      let targetRadius = 200;

      const canvasEl = document.getElementById('hero-canvas-wrap') || document.getElementById('hero-3d-canvas');
      if (canvasEl && ctx.canvas) {
        const bgRect = ctx.canvas.getBoundingClientRect();
        const rect = canvasEl.getBoundingClientRect();

        // Only use the dynamic rect if it has actually been rendered in the layout
        if (rect.width > 0 && rect.height > 0) {
          targetFocalX = (rect.left - bgRect.left) + rect.width / 2;
          targetFocalY = (rect.top - bgRect.top) + rect.height / 2;
          
          // The 3D globe (radius 3.5) takes up ~89% of the camera's vertical view (7.86 units).
          // Therefore, the globe's visual pixel radius is ~44.5% of the canvas height.
          // We add 65px padding so the dots sit just a little bit further outside the globe's edge.
          targetRadius = (rect.height * 0.445) + 65;
        }
      }

      // Smooth interpolation (lerp) to prevent any snapping or jumping on load
      currentFocalX += (targetFocalX - currentFocalX) * 0.15;
      currentFocalY += (targetFocalY - currentFocalY) * 0.15;
      currentRadius += (targetRadius - currentRadius) * 0.15;

      const cutoutDistSq = currentRadius * currentRadius;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Move horizontally
        dot.x -= dot.speed;

        // Reset if moved off screen
        if (dot.x < 0) {
          dot.x = Math.max(width, 2560);
          dot.y = Math.random() * height;
        }

        // CULLING - Skip expensive math and rendering if dot is outside the visible screen!
        if (dot.x > width || dot.y > height) {
          continue;
        }

        const dx = dot.x - currentFocalX;
        const dy = dot.y - currentFocalY;
        const distSq = dx * dx + dy * dy;

        // Sinusoidal shimmer
        const alpha = 0.25 + Math.sin(time * dot.speed + dot.offset) * 0.15;

        // Radial proximity to 3D Globe (800 squared = 640000)
        // Avoid Math.sqrt for 90% of the dots!
        if (distSq < 640000) {
          // Dynamic cutout hole exactly matching the globe's visual size
          if (distSq < cutoutDistSq) {
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
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.8
      }}
    />
  );
}
