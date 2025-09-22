import React from 'react';

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
          <div className={`absolute inset-0 bg-gradient-to-r ${getEventTypeColor(event.type)} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
          
          {/* Main Card */}
          <div className="relative bg-black/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-8 shadow-2xl">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <div className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getEventTypeColor(event.type)} text-white shadow-lg`}>
                {event.type.toUpperCase()}
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
