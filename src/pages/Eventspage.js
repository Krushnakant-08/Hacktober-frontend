import { img } from "framer-motion/client";
import React from "react";

const EventsPage = () => {
  const events = [
    {
      title: "Escape Room",
      img: "/assets/Haunted.png",
      description: "Solve puzzles, crack codes, and escape the room in time!",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc2jdVcymubGxIeWzMR9ezFE4WkXgJlBD-FcTaelDpvfPzigA/viewform?usp=sharing&ouid=105292136520880030529",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Hacktopia",
      img: "/assets/PURVA.png",
      description: "Show your coding skills and win exciting prizes!",
      formLink: "",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] py-28 px-4 flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-mono font-bold text-purple-400 mb-12 text-center neon-text" 
          style={{ textShadow: "0 0 8px rgba(180,0,255,0.6), 0 0 15px rgba(180,0,255,0.4)" }}>
        Upcoming Events
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`bg-[rgba(20,20,30,0.95)] rounded-2xl shadow-lg shadow-purple-500/20 border-[1.5px] border-purple-500/30 overflow-hidden w-full max-w-sm md:w-80 text-center transform hover:scale-105 transition-all duration-300 h-[500px] md:h-[600px] flex flex-col`}
          >
            {/* Image Section - Upper Half */}
            <div className="h-4/5 w-full relative rounded-t-2xl">
              <img 
                src={event.img} 
                alt={event.title} 
                className="w-full h-full object-cover rounded-t-2xl" 
              />
            </div>
            
            {/* Content Section - Lower Half */}
            <div className="h-1/2 p-6 flex flex-col justify-between min-w-0">
              <div>
                <h2 className="text-2xl font-bold text-purple-200 mb-3 whitespace-nowrap">{event.title}</h2>
                <p className="text-gray-300 mb-3 text-sm">{event.description}</p>
              </div>
              {event.formLink ? (
                <a
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 rounded-lg bg-gradient-to-r ${event.gradient} text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300`}
                >
                  Register Now
                </a>
              ) : (
                <div className="px-5 py-3 rounded-lg text-sm bg-purple-500/40 border border-purple-400/50 text-purple-200 font-semibold cursor-not-allowed">
                  Registration Starting Soon!
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
