import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Improved hook: uses gsap.utils.toArray, handles elements already in view,
// sets immediateRender:false for from animations to avoid leaving elements
// invisible if ScrollTrigger isn't immediately activated, and cleans up.
export default function useFadeIn() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray(".fade-in");

    // Set initial hidden state explicitly so elements won't rely on previous inline styles
    elements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 50 });
    });

    // If Locomotive is available on window and a scroller exists, set up scrollerProxy
    const scrollerEl = document.querySelector("[data-scroll-container]");
    const loco = window.loco || null; // use global if set by useLocomotive
    let usingScrollTrigger = false;

    if (loco && scrollerEl) {
      try {
        ScrollTrigger.scrollerProxy(scrollerEl, {
          scrollTop(value) {
            if (arguments.length) {
              loco.scrollTo(value, 0, 0);
            }
            return loco.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          // Locomotive uses transforms on modern browsers
          pinType: scrollerEl.style.transform ? "transform" : "fixed",
        });

        usingScrollTrigger = true;
      } catch (e) {
        // fallback to IntersectionObserver if scrollerProxy setup fails
        console.warn("useFadeIn: scrollerProxy setup failed", e);
        usingScrollTrigger = false;
      }
    }

    const observers = [];

    elements.forEach((el) => {
      if (usingScrollTrigger) {
        // Use ScrollTrigger tied to the locomotive scroller
        // make headings (H1..H6) animate quicker on non-home pages
        const isHeading = /^H[1-6]$/.test(el.tagName);
        const isHome = typeof window !== "undefined" && window.location && window.location.pathname === "/";
        const dur = isHeading && !isHome ? 0.45 : 0.8;

        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: dur,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              scroller: scrollerEl,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      } else {
        // IntersectionObserver fallback (works without ScrollTrigger/Locomotive)
        const observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const el = entry.target;
                const isHeading = /^H[1-6]$/.test(el.tagName);
                const isHome = typeof window !== "undefined" && window.location && window.location.pathname === "/";
                const dur = isHeading && !isHome ? 0.45 : 0.8;
                gsap.to(entry.target, { opacity: 1, y: 0, duration: dur, ease: "power3.out" });
                obs.unobserve(entry.target);
              }
            });
          },
          { root: null, rootMargin: "0px", threshold: 0.15 }
        );

        observer.observe(el);
        observers.push(observer);
      }
    });

    // Refresh ScrollTrigger if used
    if (usingScrollTrigger) ScrollTrigger.refresh();

    return () => {
      // cleanup observers
      observers.forEach((o) => o.disconnect());
      // Kill ScrollTriggers created by this hook
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
}
