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
import scrollToAnchor from './utils/anchorScroll';
import FadeInSection from "./components/FadeInSection";
import FadeInDemo from "./pages/FadeInDemo";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import Gallery from "./components/Gallery";


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
      // If a navbar-initiated navigation is in progress, defer snapping here.
      if (typeof window !== 'undefined' && window.__navInProgress) return;

      // If navigation passed a scroll target in state (e.g. clicking an anchor
      // from another route), perform the authoritative snap to that element.
      const requested = location && location.state && location.state.scrollTo;
      if (requested && location.pathname === '/') {
        const elementId = requested;
        let attempts = 0;
        const maxAttempts = 20;
        const trySnap = () => {
          attempts += 1;
          const el = document.getElementById(elementId);
          if (el) {
            try { if (typeof window !== 'undefined') window.__navInProgress = true; } catch (e) {}
            scrollToAnchor(el, { duration: 0 }).catch(() => {});
            try { window.history.replaceState({}, document.title); } catch (e) {}
            return;
          }
          if (attempts < maxAttempts) setTimeout(trySnap, 150);
          else try { window.history.replaceState({}, document.title); } catch (e) {}
        };
        trySnap();
        return;
      }

      try {
  // debug logging removed
        const path = location.pathname.replace(/\//, '') || 'home';
        const routeId = `route-${path}`;
        const el = document.getElementById(routeId);
        const navH = document.querySelector('nav')?.offsetHeight || 60;
          if (el) {
          const elH = el.offsetHeight || el.getBoundingClientRect().height || 0;
          const viewportH = window.innerHeight || document.documentElement.clientHeight || 0;
          const availableH = Math.max(0, viewportH - navH);
          let targetY;
          if (elH <= availableH) {
            const centerOffset = Math.floor((availableH - elH) / 2);
            targetY = Math.max(0, Math.floor(el.offsetTop - navH - centerOffset));
          } else {
            targetY = Math.max(0, Math.floor(el.offsetTop - navH));
          }
          
          // initial snap shortly after render
          setTimeout(() => {
            try {
              if (window && window.loco && typeof window.loco.scrollTo === 'function') {
                window.loco.scrollTo(targetY, { duration: 0 });
                setTimeout(() => { try { window.loco.update(); } catch (e) {} }, 30);
              } else {
                window.scrollTo({ top: targetY, behavior: 'auto' });
              }
            } catch (e) {}
          }, 80);

          // second snap in case layouts shift later (images/canvases/animations)
          setTimeout(() => {
            try {
              if (window && window.loco && typeof window.loco.scrollTo === 'function') {
                window.loco.scrollTo(targetY, { duration: 0 });
                setTimeout(() => { try { window.loco.update(); } catch (e) {} }, 30);
              } else {
                window.scrollTo({ top: targetY, behavior: 'auto' });
              }
            } catch (e) {}
          }, 330);
        }
      } catch (e) {}
    }, [location]);

    return null;
  }

  return (
    <Router>
      <RouteListener />
      <Navbar />
      {/* Locomotive requires a scroll container element with data-scroll-container */}
      <div data-scroll-container ref={scrollRef} className="page-with-footer">
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
                <div id="about" data-scroll-section className="anchor-offset">
                  <FadeInSection className="py-12">
                    <About />
                  </FadeInSection>
                </div>
                <div id="contact" data-scroll-section className="anchor-offset">
                  <FadeInSection className="py-12">
                    <ContactPage />
                  </FadeInSection>
                </div>
              </div>
            }
          />
          <Route path="/projects" element={<div data-scroll-section id="route-projects" className="w-full"><ProjectsPage /></div>} />
          <Route path="/fade-demo" element={<div data-scroll-section id="route-fade-demo" className="w-full"><FadeInDemo /></div>} />
          <Route path="/schedule" element={<div data-scroll-section id="route-schedule" className="w-full"><Schedule /></div>} />
          <Route path="/contact" element={<div data-scroll-section id="route-contact" className="w-full"><ContactPage /></div>} />
          <Route path="/about" element={<div data-scroll-section id="route-about" className="w-full"><About /></div>} />
          <Route path="/leaderboard" element={<div data-scroll-section id="route-leaderboard" className="w-full"><Leaderboard /></div>} />
          <Route path="/gallery" element={<div data-scroll-section id="route-gallery" className="w-full"><Gallery /></div>} />
        </Routes>
        {/* spacer to reserve visual space inside the scroll container so footer doesn't overlap content */}
        <div aria-hidden="true" className="w-full h-12 md:h-16 lg:h-20" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
