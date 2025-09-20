import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.5 + 0.2,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = "#0D0C1D";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Perspective grid
      ctx.strokeStyle = "rgba(180, 0, 255, 0.5)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      const gridSize = 40;
      const perspective = 0.008;
      for (let y = canvas.height / 2; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(x, canvas.height);
      }
      ctx.stroke();

      // Floating particles
      ctx.fillStyle = "rgba(200, 100, 255, 0.8)";
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speedY;
        if (p.y > canvas.height) p.y = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Overlay Content - Perfectly Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-4xl">
          <h1
            className="text-5xl md:text-7xl font-mono font-bold text-purple-400 mb-6"
            style={{
              textShadow:
                "0 0 10px rgba(180,0,255,0.8), 0 0 20px rgba(180,0,255,0.6), 0 0 40px rgba(180,0,255,0.6)",
            }}
          >
            Hacktoberfest 2025
          </h1>
          <p className="text-lg md:text-xl text-purple-200 font-mono max-w-2xl mx-auto mb-8 leading-relaxed">
            Presented by PCCoE ACM. Your journey into open source begins now.
          </p>
          <button
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 font-mono tracking-wide hover:bg-purple-500 hover:bg-opacity-10 hover:shadow-[0_0_20px_rgba(180,0,255,0.9)] transition-all duration-300 transform hover:scale-105"
            style={{
              boxShadow:
                "0 0 10px rgba(180,0,255,0.6), inset 0 0 10px rgba(180,0,255,0.6)",
            }}
          >
            Explore Projects
          </button>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent pointer-events-none" />
    </div>
  );
}