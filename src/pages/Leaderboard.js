import React from 'react';

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-[#0D0C1D] text-white pt-32 px-4 relative z-10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C1D] via-[#22103a] to-[#0D0C1D]"></div>
      
      <div className="relative z-20 max-w-6xl mx-auto text-center py-20">
        {/* Main Title */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl font-mono font-bold text-purple-400 mb-8"
          style={{
            textShadow: "0 0 8px rgba(180,0,255,0.6), 0 0 15px rgba(180,0,255,0.4)"
          }}
        >
          Leaderboard
        </h1>

        {/* Coming Soon Message */}
        <div className="bg-[#1a0d3b] rounded-2xl shadow-md p-12 max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-bold text-purple-300 mb-6">
            🚀 Coming Soon!
          </h2>
          <p className="text-xl text-purple-200 mb-6 leading-relaxed">
            We're working hard to bring you an exciting leaderboard that will showcase 
            the top contributors during Hacktoberfest 2025.
          </p>
          <p className="text-md text-purple-300 font-mono">
            Stay tuned for updates! 📊✨
          </p>
        </div>

        {/* Feature Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-[#1a0d3b] rounded-xl shadow-sm p-6 border border-purple-500/20">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Top Contributors</h3>
            <p className="text-purple-200 text-xl">Track the most active participants</p>
          </div>
          
          <div className="bg-[#1a0d3b] rounded-xl shadow-sm p-6 border border-purple-500/20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Achievements</h3>
            <p className="text-purple-200 text-xl">Unlock badges and milestones</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;