import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="relative bg-[#0D0C1D] border-t border-purple-500/20 pt-16 pb-8 overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assets/ACM.png"
                alt="ACM Logo"
                className="h-12 w-auto object-contain"
              />
              <span
                className="font-mono text-2xl font-bold text-purple-400"
                style={{
                  textShadow:
                    "0 0 8px rgba(180,0,255,0.6), 0 0 15px rgba(180,0,255,0.4)",
                }}
              >
                Hacktoberfest 2025
              </span>
            </div>
            <p className="text-purple-200 font-mono text-sm leading-relaxed mb-6 max-w-md">
              Join us in celebrating open source contributions during Hacktoberfest 2025. 
              Presented by PCCoE ACM - Your gateway to the world of open source development.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="mailto:contact.acm@pccoepune.org"
                className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(180,0,255,0.5)]"
                aria-label="Email us"
              >
                <FaEnvelope aria-hidden="true" />
              </a>
              <a
                href="https://github.com/pccoe-acm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(180,0,255,0.5)]"
                aria-label="Visit our GitHub"
              >
                <FaGithub aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/pccoe-acm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(180,0,255,0.5)]"
                aria-label="Visit our LinkedIn"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-mono text-lg font-bold text-purple-400 mb-4"
              style={{ textShadow: "0 0 6px rgba(180,0,255,0.4)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleHomeClick}
                  className="text-purple-200 hover:text-purple-400 transition-colors duration-300 font-mono text-sm cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <a
                  href="/#schedule"
                  className="text-purple-200 hover:text-purple-400 transition-colors duration-300 font-mono text-sm"
                >
                  Schedule
                </a>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-purple-200 hover:text-purple-400 transition-colors duration-300 font-mono text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-purple-200 hover:text-purple-400 transition-colors duration-300 font-mono text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-purple-200 hover:text-purple-400 transition-colors duration-300 font-mono text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-mono text-lg font-bold text-purple-400 mb-4"
              style={{ textShadow: "0 0 6px rgba(180,0,255,0.4)" }}
            >
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="text-purple-200 font-mono text-sm flex items-center gap-2">
                <FaEnvelope className="text-purple-400" aria-hidden="true" />
                <span>acm@pccoepune.org</span>
              </li>
              
              <li className="text-purple-200 font-mono text-sm flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-400" aria-hidden="true" />
                <span>PCCoE, Pune</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img
              src="/assets/CESA_WHITE.png"
              alt="CESA Logo"
              className="h-8 w-auto opacity-80"
            />
            <a href='https://pccoe.acm.org/'>
            <span className="text-purple-200/60 font-mono text-sm">
              Powered by CESA
            </span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-purple-200/60 font-mono text-sm flex items-center gap-2 justify-center md:justify-end">
              <span>© 2025 ACM. Made with</span>
              <FaHeart className="text-pink-400" aria-hidden="true" />
              <span>by SY WebMasters</span>
            </p>
            <p className="text-purple-200/40 font-mono text-xs mt-1">
              Open Source • Community Driven • Innovation Focused
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
