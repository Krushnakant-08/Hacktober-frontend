import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "../App.css";

export default function ProjectsPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particleCount = window.innerWidth < 768 ? 30 : 60;
    let particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.5 + 0.2,
    }));
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.forEach((p) => {
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height;
      });
    };
    let animationFrameId;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0D0C1D";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const centerX = Math.floor(canvas.width / 2);
      const centerY = Math.floor(canvas.height / 2);
      const gridSize = canvas.width < 768 ? 60 : 40;
      const maxLines =
        canvas.width < 768 ? Math.floor(canvas.width / gridSize) : Infinity;
      let lineCount = 0;
      for (let x = 0; x < canvas.width; x += gridSize) {
        if (lineCount >= maxLines) break;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(180, 0, 255, 0.4)";
        ctx.lineWidth = 0.5;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        lineCount++;
      }
      lineCount = 0;
      for (let x = canvas.width; x > centerX; x -= gridSize) {
        if (lineCount >= maxLines) break;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(180, 0, 255, 0.4)";
        ctx.lineWidth = 0.5;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
        lineCount++;
      }
      particles.forEach((p) => {
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2
        );
        gradient.addColorStop(0, "rgba(220, 130, 255, 0.8)");
        gradient.addColorStop(1, "rgba(180, 0, 255, 0)");
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
        p.y += p.speedY;
        if (p.y > canvas.height) p.y = 0;
      });
    }
    animate();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent pointer-events-none z-0" />
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center w-full pt-32 pb-8">
        <h2 className="projects-page-title mb-8 text-4xl font-bold text-purple-200">
          Projects to contribute
        </h2>
  <div className="projects-list w-full px-1 py-8" style={{paddingLeft: '4rem', paddingRight: '3rem', margin: '0 auto'}}>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}
