import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  

  // Navigation links array - used for both desktop and mobile menus
  const navigationLinks = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "Schedule", href: "#schedule", type: "scroll" },
    { name: "Leaderboard", href: "/leaderboard", type: "route" },
    { name: "About", href: "#about", type: "scroll" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (link) => {
    if (link.type === "scroll") {
      const scrollToSection = (elementId) => {
        const navEl = document.querySelector('nav');
        const navbarHeight = navEl ? navEl.offsetHeight : 60;
        const element = document.getElementById(elementId);
        if (!element) return;

  const loco = window && window.loco ? window.loco : null;
  
        // Compute an absolute Y target that's compatible with locomotive's internal scroll
        // and try to make the whole element visible when possible.
        const elementHeight = element.offsetHeight || element.getBoundingClientRect().height || 0;
        const viewportH = window.innerHeight || document.documentElement.clientHeight || 0;

        // Space available for the element below navbar
        const availableH = Math.max(0, viewportH - navbarHeight);

        let targetY;
        if (elementHeight <= availableH) {
          // If the whole element fits, center it vertically within the available space
          const centerOffset = Math.floor((availableH - elementHeight) / 2);
          targetY = Math.max(0, Math.floor(element.offsetTop - navbarHeight - centerOffset));
        } else {
          // Otherwise align its top just under the navbar
          targetY = Math.max(0, Math.floor(element.offsetTop - navbarHeight));
        }

        // For anchor scrolls, snap immediately (no long smooth) to avoid lag and interference
        const isAnchor = true;
        const smoothDuration = isAnchor ? 0 : 380;

        // Special-case Home: scroll to document top (0) to avoid offset rounding/centering issues
        if (elementId === 'home') {
          const locoInst = window && window.loco ? window.loco : null;
          try {
            if (locoInst && typeof locoInst.scrollTo === 'function') {
              locoInst.scrollTo(0, { duration: 0 });
              setTimeout(() => { try { locoInst.update(); } catch (e) {} }, 30);
            } else {
              window.scrollTo({ top: 0, behavior: 'auto' });
            }
          } catch (e) {
            try { window.scrollTo({ top: 0, behavior: 'auto' }); } catch (e2) {}
          }

          // dispatch scroll and refresh triggers
          setTimeout(() => {
            try { window.dispatchEvent(new Event('scroll')); } catch (e) {}
            try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') window.ScrollTrigger.refresh(); } catch (e) {}
            try { if (window && window.loco && typeof window.loco.update === 'function') window.loco.update(); } catch (e) {}
          }, 50);
          return;
        }
        if (loco && typeof loco.scrollTo === 'function') {
          try {
            loco.scrollTo(targetY, { duration: smoothDuration, easing: [0.25, 0, 0.35, 1] });
          } catch (e) {
            try { window.scrollTo({ top: targetY, behavior: smoothDuration === 0 ? 'auto' : 'smooth' }); } catch (e2) {}
          }
        } else {
          try { window.scrollTo({ top: targetY, behavior: smoothDuration === 0 ? 'auto' : 'smooth' }); } catch (e) {}
        }

        // After the scroll completes (or immediately for snap), verify alignment and snap if needed
        const snapDelay = smoothDuration === 0 ? 40 : smoothDuration + 60;
        setTimeout(() => {
          try {
            const rectNow = element.getBoundingClientRect();
            const navH = document.querySelector('nav')?.offsetHeight || 60;
            const isAligned = rectNow.top >= navH - 2 && rectNow.top <= navH + 6;
            if (!isAligned) {
              // perform a snap (duration: 0) to ensure precise placement
              try {
                if (loco && typeof loco.scrollTo === 'function') {
                  loco.scrollTo(targetY, { duration: 0 });
                  // give locomotive a tick to apply
                  setTimeout(() => { try { loco.update(); } catch (e) {} }, 40);
                } else {
                  window.scrollTo({ top: targetY, behavior: 'auto' });
                }
              } catch (e) {
                try { window.scrollTo({ top: targetY, behavior: 'auto' }); } catch (e2) {}
              }
              try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') window.ScrollTrigger.refresh(); } catch (e) {}
            }
          } catch (e) {}
        }, snapDelay);

  // Give the browser/locomotive a moment, then dispatch a scroll event and refresh ScrollTrigger
  setTimeout(() => {
          try { window.dispatchEvent(new Event('scroll')); } catch (e) {}
          try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.update === 'function') window.ScrollTrigger.update(); } catch (e) {}
          try { if (window && window.loco && typeof window.loco.update === 'function') window.loco.update(); } catch (e) {}
          // tiny nudge to ensure ScrollTrigger detects scroll direction changes (1px down then back)
          try {
            const locoInst = window && window.loco ? window.loco : null;
              if (locoInst && locoInst.scroll && locoInst.scroll.instance && typeof locoInst.scrollTo === 'function') {
                const current = locoInst.scroll.instance.scroll.y || window.scrollY || 0;
                locoInst.scrollTo(current + 1, { duration: 30 });
                setTimeout(() => locoInst.scrollTo(current, { duration: 30 }), 60);
              } else {
                window.scrollBy(0, 1);
                setTimeout(() => window.scrollBy(0, -1), 60);
              }
          } catch (e) {}
  }, 240);

        // after a short delay, ensure first event card is fully visible (avoid being hidden under navbar)
        if (elementId === 'schedule') {
          setTimeout(() => {
            const firstCard = element.querySelector('.event-anim');
            if (!firstCard) return;

            const rect = firstCard.getBoundingClientRect();
            const safeTop = navbarHeight + 8; // small padding
            const safeBottom = window.innerHeight - 8;

            const firstTop = Math.floor(firstCard.offsetTop - navbarHeight - 8);

            // If top is hidden under navbar, scroll so it's visible
            if (rect.top < safeTop) {
              try {
                if (loco && typeof loco.scrollTo === 'function') {
                  loco.scrollTo(firstTop, { duration: 320 });
                } else {
                  const delta = rect.top - safeTop;
                  window.scrollBy({ top: delta, behavior: 'smooth' });
                }
              } catch (e) {
                const delta = rect.top - safeTop;
                window.scrollBy({ top: delta, behavior: 'smooth' });
              }
            }

            // If bottom is below viewport, scroll up to reveal it
            if (rect.bottom > safeBottom) {
              try {
                if (loco && typeof loco.scrollTo === 'function') {
                  loco.scrollTo(firstTop, { duration: 320 });
                } else {
                  const delta = rect.bottom - safeBottom;
                  window.scrollBy({ top: delta, behavior: 'smooth' });
                }
              } catch (e) {
                const delta = rect.bottom - safeBottom;
                window.scrollBy({ top: delta, behavior: 'smooth' });
              }
            }

            // Sync locomotive and ScrollTrigger if present and dispatch scroll to update direction/state
            setTimeout(() => {
              try { if (window && window.loco && typeof window.loco.update === 'function') window.loco.update(); } catch(e) {}
              try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') window.ScrollTrigger.refresh(); } catch(e) {}
              try { window.dispatchEvent(new Event('scroll')); } catch (e) {}
              // small nudge to force direction detection
              try {
                const locoInst2 = window && window.loco ? window.loco : null;
                if (locoInst2 && locoInst2.scroll && locoInst2.scroll.instance && typeof locoInst2.scrollTo === 'function') {
                  const cur = locoInst2.scroll.instance.scroll.y || window.scrollY || 0;
                  locoInst2.scrollTo(cur + 1, { duration: 30 });
                  setTimeout(() => locoInst2.scrollTo(cur, { duration: 30 }), 60);
                } else {
                  window.scrollBy(0, 1);
                  setTimeout(() => window.scrollBy(0, -1), 60);
                }
              } catch (e) {}
            }, 220);
          }, 260);
        }
      };

      const elementId = link.href.substring(1);

      // If user clicked Contact anchor but we're not on the home page,
      // prefer navigating to the dedicated /contact route so the contact page loads reliably.
      if (elementId === 'contact' && location.pathname !== '/') {
        navigate('/contact');
        setMobileMenuOpen(false);
        return;
      }

      // If the target element already exists on the page, scroll immediately (handles being on '/')
      if (document.getElementById(elementId)) {
        scrollToSection(elementId);
        return;
      }

      if (location.pathname !== '/') {
        navigate('/');
        // After navigation, wait for the target element to appear and for locomotive if needed.
        let attempts = 0;
        const maxAttempts = 20; // increased retries
        const retryInterval = 150;
        const tryScroll = () => {
          attempts += 1;
          const elExists = !!document.getElementById(elementId);
          if (elExists) {
            // element is present — perform the scroll
            scrollToSection(elementId);
          } else if (attempts < maxAttempts) {
            // retry until element exists or attempts exhausted
            setTimeout(tryScroll, retryInterval);
          } else {
            // final fallback — attempt one last time
            scrollToSection(elementId);
          }
        };
        // initial attempt after a short delay to allow DOM updates
        setTimeout(tryScroll, 180);
      } else {
        scrollToSection(elementId);
      }
    } else {
      // Regular route navigation
      navigate(link.href);

      // Ensure we arrive at the top of the new route and that Locomotive/ScrollTrigger are synced.
      setTimeout(() => {
        try {
          const loco = window && window.loco ? window.loco : null;
          // compute route id from link.href
          const routeId = `route-${link.href.replace(/^\//, '') || 'home'}`;
          const targetEl = document.getElementById(routeId);

          if (targetEl) {
            // scroll to the numeric route wrapper top (document-relative) so page content (not spacer/footer) is shown
            const navH = document.querySelector('nav')?.offsetHeight || 60;
            const routeTargetY = Math.max(0, Math.floor(targetEl.offsetTop - navH));
            const routeDuration = 320;
            if (loco && typeof loco.scrollTo === 'function') {
              try { loco.scrollTo(routeTargetY, { duration: routeDuration }); } catch (e) { /* ignore */ }
            } else {
              try { window.scrollTo({ top: routeTargetY, behavior: 'smooth' }); } catch (e) {}
            }
            

            // verify after route scroll and snap if needed
            setTimeout(() => {
              try {
                const rectNow = targetEl.getBoundingClientRect();
                const navH2 = document.querySelector('nav')?.offsetHeight || 60;
                const aligned = rectNow.top >= navH2 - 2 && rectNow.top <= navH2 + 6;
                if (!aligned) {
                  try {
                    if (loco && typeof loco.scrollTo === 'function') {
                      loco.scrollTo(routeTargetY, { duration: 0 });
                      setTimeout(() => { try { loco.update(); } catch (e) {} }, 30);
                    } else {
                      window.scrollTo({ top: routeTargetY, behavior: 'auto' });
                    }
                  } catch (e) {}
                  try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') window.ScrollTrigger.refresh(); } catch (e) {}
                }
              } catch (e) {}
            }, routeDuration + 40);
          } else {
            // fallback: scroll to top
            if (loco && typeof loco.scrollTo === 'function') {
              try { loco.scrollTo(0, { duration: 400, easing: [0.25, 0, 0.35, 1] }); } catch (e) { /* ignore */ }
            } else {
              try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { /* ignore */ }
            }
          }
        } catch (e) {}

        // Refresh and nudge to ensure ScrollTrigger detects the new state
        setTimeout(() => {
          try { if (window && window.loco && typeof window.loco.update === 'function') window.loco.update(); } catch(e) {}
          try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') window.ScrollTrigger.refresh(); } catch(e) {}
          try { window.dispatchEvent(new Event('scroll')); } catch (e) {}
          try {
            const locoInst = window && window.loco ? window.loco : null;
            if (locoInst && locoInst.scroll && locoInst.scroll.instance && typeof locoInst.scrollTo === 'function') {
              const cur = locoInst.scroll.instance.scroll.y || window.scrollY || 0;
              locoInst.scrollTo(cur + 1, { duration: 60 });
              setTimeout(() => locoInst.scrollTo(cur, { duration: 60 }), 120);
            } else {
              window.scrollBy(0, 1);
              setTimeout(() => window.scrollBy(0, -1), 120);
            }
          } catch (e) {}
        }, 140);
      }, 80);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full h-auto md:h-[100px] z-50 backdrop-blur-md bg-white/4 border-b border-purple-600/60 flex items-center justify-between px-4 sm:px-6 sm:h-30 md:px-12 lg:px-20 py-6"
        style={{
          boxShadow: "0 4px 6px -1px rgba(180, 0, 255, 0.1), 0 2px 4px -1px rgba(180, 0, 255, 0.06)"
        }}
      >
        {/* Left Side: Logo + Title */}
  <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => handleNavigation({ href: "#home", type: "scroll" })}>
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
