import React, { useState, useEffect } from 'react';
import { events, getEventTypeColor } from '../data/events';
import EventCard from '../components/EventCard';
import MobileEventCard from '../components/MobileEventCard';

function Schedule() {
  const eventsList = events;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1180);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1180);
    };

    // Listen for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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
              isMobile ? (
                <MobileEventCard 
                  key={event.id}
                  event={event} 
                  index={index} 
                  getEventTypeColor={getEventTypeColor}
                  isLast={index === eventsList.length - 1}
                />
              ) : (
                <EventCard 
                  key={event.id}
                  event={event} 
                  index={index} 
                  getEventTypeColor={getEventTypeColor}
                />
              )
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
