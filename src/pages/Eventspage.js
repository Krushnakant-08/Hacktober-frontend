import React from "react";

const EventsPage = () => {
  const events = [
    {
      title: "Escape Room",
      description: "Solve puzzles, crack codes, and escape the room in time!",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc2jdVcymubGxIeWzMR9ezFE4WkXgJlBD-FcTaelDpvfPzigA/viewform?usp=sharing&ouid=105292136520880030529",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Hacktopia",
      description: "Show your coding skills and win exciting prizes!",
      formLink: "https://forms.gle/your-hacktopia-link",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0C1D] py-32 px-4 flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl font-mono font-bold text-purple-400 mb-12 text-center neon-text" 
          style={{ textShadow: "0 0 8px rgba(180,0,255,0.6), 0 0 15px rgba(180,0,255,0.4)" }}>
        Upcoming Events
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={`bg-[rgba(20,20,30,0.95)] rounded-2xl shadow-lg shadow-purple-500/20 border-[1.5px] border-purple-500/30 p-8 flex flex-col items-center max-w-sm text-center transform hover:scale-105 transition-all duration-300`}
          >
            <h2 className="text-3xl font-bold text-purple-200 mb-4">{event.title}</h2>
            <p className="text-gray-300 mb-6">{event.description}</p>
            <a
              href={event.formLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg bg-gradient-to-r ${event.gradient} text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300`}
            >
              Register Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
