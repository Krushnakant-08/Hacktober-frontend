import "./App.css";
import HeroSection from "./pages/herosection";
import Navbar from "./components/navbar";
import Schedule from "./pages/schedule";
import ProjectsPage from "./pages/ProjectsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/contacts";
import Footer from "./components/Footer";

function App() {
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
            <div id="contact">
              <ContactPage />
            </div>
          </div>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
