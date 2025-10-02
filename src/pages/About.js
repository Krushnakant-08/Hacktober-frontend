import React from "react";

const goals = [
  "Contribute to open source projects",
  "Learn GitHub workflow",
  "Enhance coding skills",
  "Network with global developers",
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#0D0C1D] text-white overflow-x-hidden">
      {/* Background with consistent styling */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C1D] via-[#22103a] to-[#0D0C1D]"></div>
      
      <div className="relative z-20 max-w-6xl pt-32 mx-auto px-6 py-20">
       

        {/* Intro Section */}
        <section className="mb-16 flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-bold text-purple-300 mb-4">About Hacktoberfest</h2>
          <p className="text-purple-200 text-xl leading-relaxed">
            Hacktoberfest is a month-long celebration of open source software, encouraging developers to contribute, collaborate, and learn in a supportive community.
          </p>
        </section>

        {/* ACM Section */}
        <section className="mb-16 flex flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-bold text-purple-300 mb-4">PCCoE ACM Chapter</h2>
          <p className="text-purple-200 text-xl leading-relaxed">
            The PCCoE ACM Student Chapter fosters a culture of innovation, learning, and community engagement. We actively support students in exploring open source and modern technologies.
          </p>
        </section>

        {/* Goals Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-purple-300 mb-8 text-center">Goals</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {goals.map((goal, idx) => (
              <div
                key={idx}
                className="bg-[#1a0d3b] shadow-md p-6 rounded-xl w-72 flex-1 text-center transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-purple-100 mb-2">{goal}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Why Participate Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-purple-300 mb-4 text-center">Why Participate?</h2>
          <p className="text-purple-200 text-xl text-center mx-auto leading-relaxed">
            Participating in Hacktoberfest 2025 will give you hands-on experience with open source projects, improve your coding skills, build your portfolio, and connect you with a global developer community.
          </p>
        </section>
      </div>
    </div>
  );
}