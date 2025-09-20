import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // Disable alpha for better performance
    
    // Set initial canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    
    // Create particles
    let particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.5 + 0.2,
    }));

    let animationFrameId;
    
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = "#0D0C1D";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Perspective grid - improved vertical lines
      const centerX = Math.floor(canvas.width / 2);
      const centerY = Math.floor(canvas.height / 2);
      const gridSize = 40;
      
      // Draw each line individually for better precision
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(180, 0, 255, 0.4)";
        ctx.lineWidth = 0.5;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw lines on the right side too
      for (let x = canvas.width; x > centerX; x -= gridSize) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(180, 0, 255, 0.4)";
        ctx.lineWidth = 0.5;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Floating particles with improved rendering
      particles.forEach((p) => {
        // Create a glow effect
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, "rgba(220, 130, 255, 0.8)");
        gradient.addColorStop(1, "rgba(180, 0, 255, 0)");
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        p.y += p.speedY;
        if (p.y > canvas.height) p.y = 0;
      });
    }

    animate();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Overlay Content - Perfectly Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-6xl">
          <h1
            className="text-5xl md:text-6xl lg:text-8xl font-mono font-bold text-purple-400 mb-8"
            style={{
              textShadow:
                "0 0 10px rgba(180,0,255,0.8), 0 0 20px rgba(180,0,255,0.6), 0 0 40px rgba(180,0,255,0.6)",
            }}
          >
            Hacktoberfest 2025
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-purple-200 font-mono max-w-5xl mx-auto mb-10 leading-relaxed">
            Presented by PCCoE ACM. Your journey into open source begins now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 text-lg md:text-xl font-mono tracking-wide hover:bg-purple-500 hover:bg-opacity-10 hover:shadow-[0_0_20px_rgba(180,0,255,0.9)] transition-all duration-300 transform hover:scale-105"
              style={{
                boxShadow:
                  "0 0 10px rgba(180,0,255,0.6), inset 0 0 10px rgba(180,0,255,0.6)",
              }}
            >
              Explore Projects
            </button>
            <button
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 text-lg md:text-xl font-mono tracking-wide hover:bg-purple-500 hover:bg-opacity-10 hover:shadow-[0_0_20px_rgba(180,0,255,0.9)] transition-all duration-300 transform hover:scale-105"
              style={{
                boxShadow:
                  "0 0 10px rgba(180,0,255,0.6), inset 0 0 10px rgba(180,0,255,0.6)",
              }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent pointer-events-none" />
      
      {/* CESA Logo at Bottom */}
      <div className="absolute bottom-1 w-full flex justify-center z-20 mt">
        <img 
          src="/assests/CESA_WHITE.png" 
          alt="CESA Logo" 
          className="max-w-[600px] md:max-w-md lg:max-w-[280px] h-auto opacity-90 hover:opacity-100 transition-opacity duration-300 transform scale-110 mt-50"
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
          }}
        />
      </div>
    </div>
  );
}