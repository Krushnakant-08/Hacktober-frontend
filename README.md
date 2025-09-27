# Hacktoberfest 2025 Frontend

A modern, responsive React.js single-page application for PCCoE ACM's Hacktoberfest 2025 event. This project showcases advanced web development practices, interactive UI components, and a cohesive purple-themed design.

## Features
- **Single-Page Application**: Seamless navigation between Hero, Schedule, About, Contact, Projects, and Leaderboard sections using React Router.
- **Responsive Design**: Mobile-first layouts with Tailwind CSS for optimal viewing on all devices.
- **Custom Animations**: Canvas-based particle systems, typewriter effects, and gradient backgrounds for engaging visuals.
- **Reusable Components**: Modular architecture with event cards, contact forms, navbar, and footer.
- **Form Validation & Styling**: Custom autofill styling and validation for contact forms.
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content.

## Technologies Used
- React.js
- React Router DOM
- Tailwind CSS
- JavaScript (ES6+)
- Canvas API
- Framer Motion
- React Simple Typewriter
- React Icons

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Krushnakant-08/Hacktober-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Hacktober-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Build for Production
```bash
npm run build
```

## Project Structure
```
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── assests/
│       ├── ACM.png
│       ├── CESA_WHITE.png
│       └── hactober-logo.jpg
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   ├── navbar.js
│   │   ├── Footer.js
│   │   ├── EventCard.js
│   │   ├── ProjectCard.js
│   ├── pages/
│   │   ├── herosection.js
│   │   ├── schedule.js
│   │   ├── About.js
│   │   ├── contacts.js
│   │   ├── Leaderboard.js
│   │   ├── ProjectsPage.js
│   ├── data/
│   │   ├── events.js
│   │   ├── projects.js
│   ├── hooks/
│   │   ├── useTilt.js
│   ├── App.css
│   ├── index.css
├── package.json
├── README.md
└── ...
```

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License
This project is licensed under the MIT License.

## Acknowledgements
- [Hacktoberfest](https://hacktoberfest.com/)
- [PCCoE ACM Student Chapter](https://pccoe.acm.org/)
- All open source contributors
