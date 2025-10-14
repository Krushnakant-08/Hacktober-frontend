import React, { useEffect } from 'react';

const Leaderboard = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0C1D] text-white pt-8 px-4 relative z-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C1D] via-[#22103a] to-[#0D0C1D]"></div>

      <div className="relative z-20 max-w-6xl mx-auto text-center px-4 sm:px-6 py-12 sm:py-20">
        {/* Main Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold text-purple-400 mb-8 sm:mb-12"
          style={{
            textShadow: "0 0 8px rgba(180,0,255,0.6), 0 0 15px rgba(180,0,255,0.4)"
          }}
        >
          Winners
        </h1>

        {/* Hacktopia Section */}
        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-6 sm:mb-8">Hacktopia</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center">
            {/* Left side - Poster */}
            <div className="bg-[#1a0d3b] rounded-2xl p-4 sm:p-6 shadow-lg shadow-purple-500/20">
              <img
                src="/assets/Hktp.png"
                alt="Hacktopia Event"
                className="w-full rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Right side - Winners */}
            <div className="space-y-4 sm:space-y-6">
              {/* First Prize */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl p-4 sm:p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🥇</div>
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-1">First Prize</h3>
                <p className="text-yellow-100 text-base font-semibold sm:text-lg">Team Outliers</p>

              </div>

              {/* Second Prize */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 sm:p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🏅</div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-1">Runner Up</h3>
                <p className="text-gray-100 text-base font-semibold sm:text-lg">Team Verse Vortex</p>

              </div>

              {/* Third Prize */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 sm:p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🏅</div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-1">Runner Up</h3>
                <p className="text-amber-100 text-base font-semibold sm:text-lg">Team Hackers</p>

              </div>
            </div>
          </div>
        </div>

        {/* Escape Room Section */}
        <div className="mt-12 sm:mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-300 mb-6 sm:mb-8">Escape Room</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center">
            {/* Left side - Poster */}
            <div className="bg-[#1a0d3b] rounded-2xl p-4 sm:p-6 shadow-lg shadow-purple-500/20">
              <img
                src="/assets/EscRm.png"
                alt="Escape Room Event"
                className="w-full rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Right side - Winners */}
            <div className="space-y-4 sm:space-y-6">
              {/* First Prize */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl p-4 sm:p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🥇</div>
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-1">First Prize</h3>
                <p className="text-purple-100 text-base font-semibold sm:text-lg">Team Trez</p>
              </div>

              {/* Runner Up */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 sm:p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🏅</div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-1">Runner Up</h3>
                <p className="text-purple-100 text-base font-semibold sm:text-lg">Team AXOR</p>
              </div>

              {/* Runner Up */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-4 sm:p-6 transform hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl sm:text-4xl mb-2">🏅</div>
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300 mb-1">Runner Up</h3>
                <p className="text-purple-100 text-base font-semibold sm:text-lg">Team Honoured Ones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;