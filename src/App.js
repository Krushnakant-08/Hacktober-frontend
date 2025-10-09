import "./App.css";
import HeroSection from "./pages/herosection";
import Navbar from "./components/navbar";
import Schedule from "./pages/schedule";
import ProjectsPage from "./pages/ProjectsPage";
import EventsPage from "./pages/Eventspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contacts";
import Footer from "./components/Footer";
import About from "./pages/About";
import Leaderboard from "./pages/Leaderboard";
import Gallery from "./components/Gallery";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";


function App() {
  // Register service worker for caching
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
            
            // Check for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, prompt user to refresh
                  if (window.confirm('New version available! Refresh to update?')) {
                    window.location.reload();
                  }
                }
              });
            });
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      });
    }
    
    // Preload critical assets
    const criticalAssets = [
      '/assets/ACM.png',
      '/assets/hactober-logo.jpg',
      '/assets/Escape_Room.png',
      '/assets/Hacktopia.jpg'
    ];
    
    criticalAssets.forEach(asset => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = asset;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="w-full">
            <div id="home">
            <HeroSection />
            </div>
            <div id="schedule">
              <Schedule />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="contact">
              <ContactPage />
            </div>
          </div>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
