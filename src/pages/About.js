import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const goals = [
  "Contribute to open source projects",
  "Learn GitHub workflow",
  "Enhance coding skills",
  "Network with global developers",
];

export default function About() {
  // Initialize particles engine
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0D0C1D] text-white overflow-x-hidden">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0D0C1D" },
          fpsLimit: 60,
          interactivity: { events: { onHover: { enable: true, mode: "repulse" } } },
          particles: {
            color: { value: "#a855f7" },
            links: { enable: true, color: "#a855f7", distance: 150, opacity: 0.3 },
            move: { enable: true, speed: 1, direction: "none", random: true, outModes: "bounce" },
            number: { value: 50, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-6xl pt-32 mx-auto px-6 py-20">
        {/* Title + Logo */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-mono font-bold text-purple-400 neon-text">
            Hacktoberfest 2025
          </h1>
        
          <a
            href="https://hacktoberfest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/assests/hactober-logo.jpg"
              alt="Hacktoberfest Logo"
              className="h-32 w-auto shadow-neon rounded-lg"
            />
          </a>
          
          
        </div>

        {/* Intro Section */}
        <section className="mb-16 flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-purple-300 mb-4">About Hacktoberfest</h2>
          <p className="text-purple-200 text-lg leading-relaxed">
            Hacktoberfest is a month-long celebration of open source software, encouraging developers to contribute, collaborate, and learn in a supportive community.
          </p>
        </section>

        {/* ACM Section */}
        <section className="mb-16 flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-purple-300 mb-4">PCCoE ACM Chapter</h2>
          <p className="text-purple-200 text-lg max-w-3xl">
            The PCCoE ACM Student Chapter fosters a culture of innovation, learning, and community engagement. We actively support students in exploring open source and modern technologies.
          </p>
          <a
            href="https://pccoe.acm.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 hover:scale-110 transition-transform duration-300"
          >
            <img
              src="/assests/ACM.png"
              alt="ACM Logo"
              className="h-24 w-auto shadow-neon rounded-lg"
            />
          </a>
        </section>

        {/* Goals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-300 mb-8 text-center">Goals</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className="bg-[#1a0d3b] shadow-neon p-6 rounded-xl w-72 flex-1 text-center transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-purple-100 mb-2">{goal}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why Participate Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center">Why Participate?</h2>
          <p className="text-purple-200 text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Participating in Hacktoberfest 2025 will give you hands-on experience with open source projects, improve your coding skills, build your portfolio, and connect you with a global developer community.
          </p>
        </section>
      </div>
    </div>
  );
}