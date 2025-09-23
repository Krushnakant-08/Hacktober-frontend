import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation links array - used for both desktop and mobile menus
  const navigationLinks = [
    { name: "Home", href: "#hero", type: "scroll" },
    { name: "Schedule", href: "#schedule", type: "scroll" },
    { name: "Leaderboard", href: "/leaderboard", type: "route" },
    { name: "About", href: "/about", type: "route" },
    { name: "Contact", href: "/contact", type: "route" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (link) => {
    if (link.type === "scroll") {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const elementId = link.href.substring(1); // Remove the # from href
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // We're already on home page, just scroll
        const elementId = link.href.substring(1); // Remove the # from href
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Regular route navigation
      navigate(link.href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full h-auto md:h-[110px] z-50 backdrop-blur-md bg-white/4 border-b border-purple-600/60 flex items-center justify-between px-4 sm:px-6 sm:h-30 md:px-12 lg:px-20 py-6"
        style={{
          boxShadow: "0 4px 6px -1px rgba(180, 0, 255, 0.1), 0 2px 4px -1px rgba(180, 0, 255, 0.06)"
        }}
      >
        {/* Left Side: Logo + Title */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => handleNavigation({ href: "#hero", type: "scroll" })}>
          <img
            src="/assests/ACM.png"
            alt="ACM Logo"
            className="h-12 sm:h-16 md:h-20 w-auto object-contain"
          />
          <span
            className="font-mono text-xl sm:text-3xl md:text-4xl font-bold text-purple-400 text-shadow"
          >
            Hacktoberfest
          </span>
        </div>

        {/* Right Side: Navigation Links (Desktop) */}
        <ul className="hidden lg:flex items-center gap-4 lg:gap-8 font-mono font-semibold text-purple-200">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavigation(link)}
                className="hover:text-purple-400 transition-colors text-lg lg:text-2xl duration-300 bg-transparent border-none cursor-pointer"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile & Tablet Menu Button */}
        <button 
          className="lg:hidden text-3xl text-purple-300 hover:text-purple-400 transition relative z-[60]
                    flex items-center justify-center w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm
                    border border-purple-500/20 hover:bg-purple-500/10"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile & Tablet Menu Overlay */}
      <div 
        className={`fixed top-0 right-0 h-full w-3/4 md:w-2/5 bg-gradient-to-br from-purple-900/15 to-blue-900/10 backdrop-blur-sm
                   border-l border-white/5 shadow-xl z-[55] 
                   transition-transform duration-300 ease-in-out pt-20 px-6
                   ${mobileMenuOpen ? 'mobile-menu-open' : 'mobile-menu-closed'}`}
      >
        {/* Close button inside mobile menu */}
        <button 
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full 
                    bg-white/5 backdrop-blur-[2px] text-4xl font-bold text-purple-300 hover:text-purple-400 
                    hover:bg-white/10 hover:scale-110 transition-all duration-300"
          onClick={toggleMobileMenu}
          aria-label="Close mobile menu"
        >
          ×
        </button>
        
        <ul className="flex flex-col items-start gap-1 font-mono font-semibold text-white/90 pt-4">
          {navigationLinks.map((link) => (
            <li key={link.name} className="w-full mb-5 border-b border-white/10 py-4 pb-1">
              <button
                onClick={() => handleNavigation(link)}
                className="text-xl tracking-wide hover:text-purple-300 
                          transition-all duration-300 hover:translate-x-1 pl-2 block bg-transparent border-none cursor-pointer text-left w-full"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[50]"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
