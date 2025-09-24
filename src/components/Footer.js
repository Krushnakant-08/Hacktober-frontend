import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#0D0C1D] border-t border-purple-500/20 pt-16 pb-8 overflow-hidden">
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/assests/ACM.png"
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
                href="#"
                className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(180,0,255,0.5)]"
              >
                <span className="text-lg">📧</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(180,0,255,0.5)]"
              >
                <span className="text-lg">🐱</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(180,0,255,0.5)]"
              >
                <span className="text-lg">🔗</span>
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
                <a
                  href="#home"
                  className="text-purple-200 hover:text-purple-400 transition-colors duration-300 font-mono text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-purple-200 hover:text-purple-400 transition-colors duration-300 font-mono text-sm"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-purple-200 hover:text-purple-400 transition-colors duration-300 font-mono text-sm"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
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
              <li className="text-purple-200 font-mono text-sm">
                <span className="text-purple-400">📧</span> contact.hacktober@pccoepune.org
              </li>
              <li className="text-purple-200 font-mono text-sm">
                <span className="text-purple-400">📱</span> +91 98989-XXXXX
              </li>
              <li className="text-purple-200 font-mono text-sm">
                <span className="text-purple-400">🏫</span> PCCoE, Pune
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
              src="/assests/CESA_WHITE.png"
              alt="CESA Logo"
              className="h-8 w-auto opacity-80"
            />
            <span className="text-purple-200/60 font-mono text-sm">
              Powered by CESA
            </span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-purple-200/60 font-mono text-sm">
              © 2025 Hacktoberfest. Made with 💜 by SY WebMasters
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
