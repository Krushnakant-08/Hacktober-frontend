 const events = [
    {
      id: 1,
      time: "9:00 AM",
      date: "Oct 1, 2025",
      title: "Opening Ceremony",
      description: "Welcome to Hacktoberfest! Join us for the kickoff event and meet fellow contributors.",
      type: "ceremony"
    },
    {
      id: 2,
      time: "10:30 AM",
      date: "Oct 1, 2025",
      title: "Git & GitHub Workshop",
      description: "Learn the basics of Git and GitHub for open source contribution.",
      type: "workshop"
    },
    {
      id: 3,
      time: "2:00 PM",
      date: "Oct 5, 2025",
      title: "React.js Contribution Session",
      description: "Hands-on session for contributing to React.js projects.",
      type: "session"
    },
    {
      id: 4,
      time: "4:00 PM",
      date: "Oct 10, 2025",
      title: "Code Review Session",
      description: "Learn best practices for code review and get your PRs reviewed.",
      type: "session"
    },
    {
      id: 5,
      time: "6:00 PM",
      date: "Oct 15, 2025",
      title: "Open Source Panel",
      description: "Panel discussion with maintainers of popular open source projects.",
      type: "panel"
    },
    {
      id: 6,
      time: "11:00 AM",
      date: "Oct 20, 2025",
      title: "Documentation Sprint",
      description: "Help improve documentation for various open source projects.",
      type: "sprint"
    },
    {
      id: 7,
      time: "7:00 PM",
      date: "Oct 31, 2025",
      title: "Closing Ceremony",
      description: "Celebrate your achievements and connect with the community!",
      type: "ceremony"
    }
  ];

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

  export { events, getEventTypeColor };