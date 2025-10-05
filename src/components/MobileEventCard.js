import React from 'react';

const getClubColorClasses = (club) => {
  if (!club) return 'from-purple-500 to-pink-500';
  const key = club.toLowerCase();
  // ACM and ACM-W -> sky blue
  if (key.includes('acmw') || key.includes('acm-w')) return 'from-sky-500 to-sky-400';
  if (key.includes('acm')) return 'from-sky-500 to-sky-400';
  // GDGC -> green to orange
  if (key.includes('gdgc') || key.includes('gdg')) return 'from-green-500 to-orange-500';
  // All Clubs -> keep amber to orange
  if (key.includes('all')) return 'from-amber-500 to-orange-500';
  return 'from-purple-500 to-pink-500';
};

function MobileEventCard({ event, index, getEventTypeColor, isLast }) {
  return (
    <div className="relative w-3/4 mx-auto">
      {/* Event Card */}
      <div className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105">
        {/* Card Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${getEventTypeColor(event.type)} rounded-lg blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
        
        {/* Main Card */}
        <div className="relative bg-black/90 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 shadow-xl">
          {/* Card Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {event.club && (
                <div className={`relative inline-block rounded-lg p-[2px] bg-gradient-to-r ${getClubColorClasses(event.club)}`}>
                  <div className="rounded-[8px] bg-black/80 border border-white/10 px-2.5 py-0.5">
                    <div className="text-xl font-extrabold text-white">
                      {event.club}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="text-purple-300 font-mono text-sm">
              {event.date}
            </div>
          </div>

          {/* Time */}
          <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-3">
            {event.time}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
            {event.title}
          </h3>

          {/* Description */}
          <p className="text-purple-200 leading-relaxed text-base">
            {event.description}
          </p>
        </div>
      </div>

      {/* Connecting Line to Next Card - Hide for last card */}
      {!isLast && (
        <div className="flex justify-center mt-6 mb-6">
          <div className="relative">
            {/* Vertical Connecting Line */}
            <div className="w-1 h-12 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-600 shadow-sm shadow-purple-500/50 mx-auto relative">
              {/* Animated glow effect */}
              <div className="absolute inset-0 w-1 bg-gradient-to-b from-purple-400 to-pink-400 blur-sm opacity-70"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileEventCard;
