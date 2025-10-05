import React from "react";
import { FaGithub, FaUsers, FaCodeBranch, FaCheckCircle } from "react-icons/fa";

const goals = [
  "Contribute to open source projects",
  "Learn GitHub workflow",
  "Enhance coding skills",
  "Network with global developers",
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#0D0C1D] text-white overflow-x-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C1D] via-[#1a0f2c] to-[#0D0C1D]" />

      <div className="relative z-20 max-w-6xl pt-32 mx-auto px-6 py-20">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-mono font-extrabold text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text mb-4"
              style={{ textShadow: "0 0 8px rgba(180,0,255,0.3)" }}>
            About Hacktoberfest
          </h1>
          <p className="text-purple-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            A month-long celebration of open source: contribute, collaborate, and grow with a welcoming community.
          </p>
          <div className="w-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full shadow-lg shadow-purple-500/50" />
        </section>

        {/* Stats */}
        <section className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 flex items-center gap-4 justify-center">
            <FaGithub className="text-3xl text-purple-300" aria-hidden="true" />
            <div>
              <div className="text-2xl font-bold text-purple-200">100+ PRs</div>
              <div className="text-purple-300/80 text-sm">Across community repos</div>
            </div>
          </div>
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 flex items-center gap-4 justify-center">
            <FaUsers className="text-3xl text-pink-300" aria-hidden="true" />
            <div>
              <div className="text-2xl font-bold text-purple-200">300+ Participants</div>
              <div className="text-purple-300/80 text-sm">From multiple clubs</div>
            </div>
          </div>
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 flex items-center gap-4 justify-center">
            <FaCodeBranch className="text-3xl text-indigo-300" aria-hidden="true" />
            <div>
              <div className="text-2xl font-bold text-purple-200">10+ Events</div>
              <div className="text-purple-300/80 text-sm">Workshops, sessions, more</div>
            </div>
          </div>
        </section>

        {/* ACM Section */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-4">PCCoE ACM Chapter</h2>
            <p className="text-purple-200 text-lg leading-relaxed">
              The PCCoE ACM Student Chapter fosters a culture of innovation, learning, and community engagement. We support students in exploring open source and modern technologies with meetups, workshops, and mentorship.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl bg-black/60 backdrop-blur-sm border border-purple-500/30 p-6 flex items-center justify-center">
              <img
                src="/assets/ACM.png"
                alt="PCCoE ACM Chapter logo"
                className="w-40 md:w-56 h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-8 text-center">Goals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-black/60 backdrop-blur-sm border border-purple-500/30 p-6 transition-transform hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex items-start gap-3">
                  <FaCheckCircle className="text-2xl text-purple-300 mt-1 shrink-0" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-purple-100 leading-snug">{goal}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Participate */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-6 text-center">Why Participate?</h2>
          <div className="max-w-3xl mx-auto text-purple-200 text-lg leading-relaxed space-y-3">
            <div className="flex items-start gap-3"><FaCheckCircle className="mt-1 text-pink-300" aria-hidden="true" /><span>Hands-on experience contributing to real projects.</span></div>
            <div className="flex items-start gap-3"><FaCheckCircle className="mt-1 text-pink-300" aria-hidden="true" /><span>Improve your Git/GitHub workflow and teamwork.</span></div>
            <div className="flex items-start gap-3"><FaCheckCircle className="mt-1 text-pink-300" aria-hidden="true" /><span>Build a stronger portfolio with meaningful PRs.</span></div>
            <div className="flex items-start gap-3"><FaCheckCircle className="mt-1 text-pink-300" aria-hidden="true" /><span>Network with mentors and peers across clubs.</span></div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">Ready to get involved?</h3>
            <p className="text-purple-200 mb-6 font-mono">Start by making your first PR this October.</p>
            <a href="https://hacktoberfest.com" target="_blank" rel="noreferrer"
               className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transform hover:scale-105 transition-all duration-300">
              Learn More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}