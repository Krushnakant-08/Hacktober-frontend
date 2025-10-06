import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const setCanvasSize = () => {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    setCanvasSize();

    const particleCount = window.innerWidth < 768 ? 30 : 60;
    let particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.5 + 0.2,
    }));

    let resizeTimeout;
    const resizeCanvas = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
        particles.forEach(p => {
          p.x = Math.random() * window.innerWidth;
          p.y = Math.random() * window.innerHeight;
        });
      }, 100);
    };

    let animationFrameId;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0D0C1D";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const centerX = Math.floor(window.innerWidth / 2);
      const centerY = Math.floor(window.innerHeight / 2);
      const gridSize = window.innerWidth < 768 ? 60 : 40;
      const maxLines = window.innerWidth < 768 ? Math.floor(window.innerWidth / gridSize) : Infinity;
      let lineCount = 0;

      for (let x = 0; x < window.innerWidth; x += gridSize) {
        if (lineCount >= maxLines) break;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(180, 0, 255, 0.4)";
        ctx.lineWidth = 0.5;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
        lineCount++;
      }

      lineCount = 0;

      for (let x = window.innerWidth; x > centerX; x -= gridSize) {
        if (lineCount >= maxLines) break;
        ctx.beginPath();
        ctx.strokeStyle = "rgba(180, 0, 255, 0.4)";
        ctx.lineWidth = 0.5;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
        lineCount++;
      }

      particles.forEach((p) => {
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, "rgba(220, 130, 255, 0.8)");
        gradient.addColorStop(1, "rgba(180, 0, 255, 0)");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();

        p.y += p.speedY;
        if (p.y > window.innerHeight) p.y = 0;
      });
    }

    animate();

    window.addEventListener('resize', resizeCanvas);
    const onVisChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        animate();
      }
    };
    document.addEventListener('visibilitychange', onVisChange);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', onVisChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C1D] via-transparent to-transparent pointer-events-none z-0" />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4 sm:px-6 max-w-6xl overflow-hidden">
         <h1
  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-mono font-bold text-purple-400 mb-4 sm:mb-6 md:mb-8"
  style={{
    textShadow:
      "0 0 8px rgba(180,0,255,0.6), 0 0 15px rgba(180,0,255,0.4)",
  }}
>
  <Typewriter
    words={["Hacktoberfest 2025"]}
    loop={false}
    // cursor
    // cursorStyle="|"
    typeSpeed={100}
    // deleteSpeed={1}
    delaySpeed={100}
  />
</h1>


          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-200 font-mono max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed text-shadow font-semibold">
            Presented by PCCoE ACM. Your journey into open source begins now.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <div className="p-3 sm:p-4">
              <button
                aria-label="Register Now"
                className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 text-purple-300 text-base sm:text-lg md:text-xl font-mono tracking-wide hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(180,0,255,0.45)] transform hover:scale-[1.03] transition-all duration-300"
                style={{
                  boxShadow:
                    "0 0 10px rgba(180,0,255,0.35), 0 0 0 2px rgba(180,0,255,0.4)",
                }}
                onClick={() => Navigate('/events')}
              >
                Register Now
              </button>
            </div>
            <div className="p-3 sm:p-4">
              <button
                aria-label="View gallery"
                className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 text-purple-300 text-base sm:text-lg md:text-xl font-mono tracking-wide hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(180,0,255,0.45)] transform hover:scale-[1.03] transition-all duration-300"
                style={{
                  boxShadow:
                    "0 0 10px rgba(180,0,255,0.35), 0 0 0 2px rgba(180,0,255,0.4)",
                }}
                onClick={() => Navigate('/gallery')}
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
