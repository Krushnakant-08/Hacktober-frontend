import React from 'react';

const getClubColorClasses = (club) => {
  if (!club) return 'bg-purple-500';
  const key = club.toLowerCase();
  // ACM and ACMW -> sky blue to pink gradient
  if (key.includes('acm') && key.includes('acmw')) return 'bg-gradient-to-r from-sky-500 to-pink-500';
  // ACM-W -> pink
  if (key.includes('acmw') || key.includes('acm-w')) return 'bg-pink-500';
  // ACM -> sky blue
  if (key.includes('acm')) return 'bg-sky-500';
  // GDGC -> green
  if (key.includes('gdgc') || key.includes('gdg')) return 'bg-green-500';
  // All Clubs -> amber
  if (key.includes('all')) return 'bg-amber-500';
  return 'bg-purple-500';
};

const getClubShadowClasses = (club) => {
  if (!club) return 'shadow-purple-500/20';
  const key = club.toLowerCase();
  // All Clubs -> amber shadow (check first to avoid conflicts)
  if (key.includes('all')) return 'shadow-amber-500/20';
  // ACM and ACMW -> combined gradient shadow
  if (key.includes('acm') && key.includes('acmw')) return 'shadow-pink-500/15 shadow-sky-500/15';
  // ACM-W -> pink shadow
  if (key.includes('acmw') || key.includes('acm-w')) return 'shadow-pink-500/20';
  // ACM -> sky blue shadow
  if (key.includes('acm')) return 'shadow-sky-500/20';
  // GDGC -> green shadow
  if (key.includes('gdgc') || key.includes('gdg')) return 'shadow-green-500/20';
  return 'shadow-purple-500/20';
};

const getClubGlowClasses = (club) => {
  if (!club) return 'from-purple-500 to-blue-500';
  const key = club.toLowerCase();
  // All Clubs -> amber glow
  if (key.includes('all')) return 'from-amber-500 to-orange-500';
  // ACM and ACMW -> sky blue to pink gradient
  if (key.includes('acm') && key.includes('acmw')) return 'from-sky-500 to-pink-500';
  // ACM-W -> pink glow
  if (key.includes('acmw') || key.includes('acm-w')) return 'from-pink-500 to-purple-500';
  // ACM -> sky blue glow
  if (key.includes('acm')) return 'from-sky-500 to-blue-500';
  // GDGC -> green glow
  if (key.includes('gdgc') || key.includes('gdg')) return 'from-green-500 to-teal-500';
  return 'from-purple-500 to-blue-500';
};

function EventCard({ event, index, getEventTypeColor }) {
  return (
    <div className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50 border-4 border-black animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Event Card */}
      <div className={`w-full max-w-xl ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
        <div className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${index % 2 === 0 ? 'hover:translate-x-2' : 'hover:-translate-x-2'}`}>
          {/* Card Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${getClubGlowClasses(event.club)} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
          
          {/* Main Card */}
          <div className={`relative bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 shadow-2xl ${getClubShadowClasses(event.club)}`}>
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {event.club && (
                  <div className={`relative inline-block rounded-xl p-[2px] ${getClubColorClasses(event.club)}`}>
                    <div className="rounded-[10px] bg-black/80 border border-white/10 px-2 py-0.5">
                      <div className="text-lg md:text-lg font-extrabold text-white">
                        {event.club}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-purple-300 font-mono text-base">
                {event.date}
              </div>
            </div>

            {/* Time */}
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
              {event.time}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-purple-200 leading-relaxed text-base">
              {event.description}
            </p>

            {/* Connecting Line to Timeline - Only visible on desktop (md+) */}
            <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? 'right-0 translate-x-8' : 'left-0 -translate-x-8'} w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 shadow-sm shadow-purple-500/50`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
