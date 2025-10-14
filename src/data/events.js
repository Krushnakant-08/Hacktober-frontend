const events = [
  {
    id: 1,
    time: "9:00 AM - 1:00 PM",
    date: "4th October 2025",
    title: "GitHub Workshop",
    description: "Hands-on GitHub workshop for contributors.",
    type: "workshop",
    club: "ACM"
  },
  {
    id: 2,
    time: "12:00 PM - 2:00 PM",
    date: "6th October 2025",
    title: "Inauguration / Website Launch",
    description: "Hacktober kickoff, launch of official ACM website.",
    type: "ceremony",
    club: "All Clubs"
  },
  {
    id: 3,
    time: "4:00 PM - 7:00 PM",
    date: "8th - 10th October 2025",
    title: "Cloud Workshop",
    description: "Practical cloud computing workshop.",
    type: "workshop",
    club: "GDGC"
  },
  {
    id: 5,
    time: "3:00 PM - 5:00 PM",
    date: "8th October 2025",
    title: "Profile Building on LinkedIn",
    description: "Build an outstanding LinkedIn profile for developers.",
    type: "session",
    club: "ACM"
  },
  {
    id: 4,
    time: "9:00 PM - 10:00 PM",
    date: "8th October 2025",
    title: "Open Source Contribution Awareness Session",
    description: "Learn how to contribute effectively to open source projects.",
    type: "session",
    club: "ACM"
  },


  {
    id: 7,
    time: "11:00 AM - 12:00 PM",
    date: "11th October 2025",
    title: "Resume Building",
    description: "Learn to create effective resumes for tech roles.",
    type: "session",
    club: "ACM"
  },
  {
    id: 8,
    time: "2:00 PM - 6:00 PM",
    date: "11th October 2025",
    title: "Escape Room",
    description: "Fun team-building activity.",
    type: "session",
    club: "ACM and ACMW"
  },
  {
    id: 9,
    time: "9:00 AM onwards",
    date: "12th October 2025",
    title: "Hacktopia",
    description: "Main Hacktober event with challenges and prizes.",
    type: "session",
    club: "ACM"
  },
  {
    id: 10,
    time: "All day",
    date: "13th October 2025",
    title: "Valedictory (Hacktober + Cyberkavach)",
    description: "Closing ceremony and awards.",
    type: "ceremony",
    club: "All Clubs"
  },
  // {
  //   id: 11,
  //   time: "4:00 PM - 6:00 PM",
  //   date: "14th or 15th October 2025",
  //   title: "Sponsor Session",
  //   description: "Meet our sponsors and learn about opportunities.",
  //   type: "session",
  //   club: "All Clubs"
  // }
];

const getEventTypeColor = (type) => {
  switch (type) {
    case "ceremony":
      return "from-purple-500 to-pink-500";
    case "workshop":
      return "from-blue-500 to-purple-500";
    case "session":
      return "from-green-500 to-teal-500";
    case "panel":
      return "from-orange-500 to-red-500";
    case "sprint":
      return "from-yellow-500 to-orange-500";
    default:
      return "from-purple-500 to-blue-500";
  }
};

export { events, getEventTypeColor };
