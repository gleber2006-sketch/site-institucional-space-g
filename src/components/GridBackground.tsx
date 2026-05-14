"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const tiltRef = useRef({ x: 0, y: 0 });
  const targetTiltRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Normalized coordinates (-1 to 1)
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      // Target rotation (max 4 degrees)
      targetTiltRef.current = {
        x: -ny * 4, // Up/down tilt
        y: nx * 4,  // Left/right tilt
      };
    };

    const handleMouseLeave = () => {
      targetTiltRef.current = { x: 0, y: 0 };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    handleResize();

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth transition for tilt (lerp)
      tiltRef.current.x = lerp(tiltRef.current.x, targetTiltRef.current.x, 0.08);
      tiltRef.current.y = lerp(tiltRef.current.y, targetTiltRef.current.y, 0.08);

      // Draw grid lines
      const cellSize = 60;
      const opacity = 0.15; // Temporariamente mais alto para conferir visibilidade
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = 1;

      // Expand draw area to cover rotation gaps
      const offset = 200;

      // Horizontal lines
      for (let y = -offset; y < canvas.height + offset; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(-offset, y);
        ctx.lineTo(canvas.width + offset, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = -offset; x < canvas.width + offset; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, -offset);
        ctx.lineTo(x, canvas.height + offset);
        ctx.stroke();
      }
    };

    const animate = () => {
      drawGrid();
      
      if (canvas) {
        canvas.style.transform = `perspective(1200px) rotateX(${tiltRef.current.x}deg) rotateY(${tiltRef.current.y}deg) scale(1.1)`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        backfaceVisibility: "hidden",
        willChange: "transform",
      }}
    />
  );
}
