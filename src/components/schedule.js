import React from 'react'
import events from '../data/events'

function Schedule() {
  // Sample event data
  const eventsList = events;

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'ceremony': return 'from-purple-500 to-pink-500';
      case 'workshop': return 'from-blue-500 to-purple-500';
      case 'session': return 'from-green-500 to-teal-500';
      case 'panel': return 'from-orange-500 to-red-500';
      case 'sprint': return 'from-yellow-500 to-orange-500';
      default: return 'from-purple-500 to-blue-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black pt-32 pb-16 px-4">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Event Schedule
          </h1>
          <p className="text-xl text-purple-200 font-mono">
            Join us for an amazing journey through Hacktoberfest 2025
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full shadow-lg shadow-purple-500/50"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}

          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 shadow-lg shadow-purple-500/50 rounded-full"></div>
          
          {/* Timeline Events */}
          <div className="space-y-12">
            {eventsList.map((event, index) => (
              <div key={event.id} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
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

                      {/* Connecting Line to Timeline */}
                      <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0 translate-x-8' : 'left-0 -translate-x-8'} w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 shadow-sm shadow-purple-500/50`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20">
          <div className="bg-black/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-4">
              Ready to Join?
            </h3>
            <p className="text-purple-200 mb-6 font-mono">
              Don't miss out on these amazing events. Mark your calendar!
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transform hover:scale-105 transition-all duration-300 font-mono">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
