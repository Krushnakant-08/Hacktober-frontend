import "./App.css";
import HeroSection from "./pages/herosection";
import Navbar from "./components/navbar";
import Schedule from "./pages/schedule";
import ProjectsPage from "./pages/ProjectsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contacts";
import Footer from "./components/Footer";
import About from "./pages/About";
import Leaderboard from "./pages/Leaderboard";
import useLocomotive from "./hooks/useLocomotive";
import useFadeIn from "./hooks/useFadeIn";
import FadeInSection from "./components/FadeInSection";
import FadeInDemo from "./pages/FadeInDemo";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";


function App() {
  const { containerRef: scrollRef } = useLocomotive({ smooth: true });
  useFadeIn();
  // RouteListener is rendered inside the Router so it can safely use useLocation
  function RouteListener() {
    const location = useLocation();

    useEffect(() => {
      try {
        if (window && window.loco && typeof window.loco.update === "function") {
          window.loco.update();
        }
      } catch (e) {
        // ignore
      }

      try {
        ScrollTrigger.refresh();
      } catch (e) {
        // ignore
      }
    }, [location]);

    return null;
  }

  return (
    <Router>
      <RouteListener />
      <Navbar />
      {/* Locomotive requires a scroll container element with data-scroll-container */}
  <div data-scroll-container ref={scrollRef}>
        <Routes>
          <Route
            path="/"
            element={
              <div className="w-full">
                <div id="home" data-scroll-section>
                  <FadeInSection className="py-12">
                    <HeroSection />
                  </FadeInSection>
                </div>
                <div id="schedule" data-scroll-section>
                  <FadeInSection className="py-12">
                    <Schedule />
                  </FadeInSection>
                </div>
                <div id="about" data-scroll-section>
                  <FadeInSection className="py-12">
                    <About />
                  </FadeInSection>
                </div>
                <div id="contact" data-scroll-section>
                  <FadeInSection className="py-12">
                    <ContactPage />
                  </FadeInSection>
                </div>
                <Footer />
              </div>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/fade-demo" element={<FadeInDemo />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
