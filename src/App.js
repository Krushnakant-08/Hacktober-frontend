import "./App.css";
import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import Schedule from "./pages/schedule";
import ProjectsPage from "./pages/ProjectsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
