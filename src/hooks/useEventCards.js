import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useEventCards() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray(".event-anim");
    if (!elements.length) return;

  const scrollerEl = document.querySelector("[data-scroll-container]");
  const loco = window.loco || null;
    const observers = [];

  // Scroll tracking variables (declared here so cleanup can reference them)
  let lastY = null;
  let lastT = null;
  let scrollSpeed = 0;
  let onScroll = null;
  let rafId = null;

  const reverseBottomRatio = 0.85; // bottom of element <= 85% viewport height => 15% from bottom (kept for compatibility)
  // start forward animation when the element first touches the bottom of the viewport
  const enterDownRatio = 0; // 0 -> start as soon as it begins entering from bottom
  const enterUpRatio = 0.25; // start reverse animation when 25% of the element is visible (scrolling up)

    // helper to read scrollY from either locomotive or window
    const getScrollY = () => {
      try {
        if (loco && loco.scroll && loco.scroll.instance && typeof loco.scroll.instance.scroll === "object") {
          return loco.scroll.instance.scroll.y || 0;
        }
      } catch (e) {
        // ignore and fallback
      }
      return window.scrollY || window.pageYOffset || 0;
    };

    // start an RAF-based tracker to compute scrollSpeed; keeps everything local to this hook
    let lastYFrame = getScrollY();
    let lastTFrame = performance.now();
    const startSpeedRAF = () => {
      const step = () => {
        const now = performance.now();
        const y = getScrollY();
        const dt = Math.max(1, now - lastTFrame);
        const dy = Math.abs(y - lastYFrame);
        const instantSpeed = (dy / dt) * 1000; // px/s
        scrollSpeed = scrollSpeed ? scrollSpeed * 0.8 + instantSpeed * 0.2 : instantSpeed;
        lastYFrame = y;
        lastTFrame = now;
        rafId = requestAnimationFrame(step);
      };
      rafId = requestAnimationFrame(step);
    };

    startSpeedRAF();

    if (loco && scrollerEl) {
      // Use ScrollTrigger but drive a paused tween's progress so we can bias reverse behavior
      elements.forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { opacity: 0, scale: 0.3, y: 50 },
          { opacity: 1, scale: 1, y: 0, ease: "power3.out", paused: true }
        );

        // store previous progress per element so we can smooth progress changes based on speed
        const prevProgress = new WeakMap();

        ScrollTrigger.create({
          trigger: el,
          scroller: scrollerEl,
          // start when the element's top reaches the bottom of the viewport
          start: "top bottom",
          end: "bottom 85%",
          onUpdate(self) {
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const visible = Math.max(0, Math.min(rect.height, vh - rect.top));
            const ratio = rect.height > 0 ? Math.max(0, Math.min(1, visible / rect.height)) : 0;

            // Asymmetric mapping:
            // - scrolling down: start when ratio >= enterDownRatio
            // - scrolling up: start when ratio >= enterUpRatio
            const dir = self.direction;
            let displayProgress = 0;
            if (dir >= 0) {
              // scrolling down: start as soon as it enters (enterDownRatio == 0)
              if (ratio <= enterDownRatio) displayProgress = 0;
              else displayProgress = (ratio - enterDownRatio) / (1 - enterDownRatio);
            } else {
              // scrolling up
              if (ratio < enterUpRatio) displayProgress = 0;
              else displayProgress = (ratio - enterUpRatio) / (1 - enterUpRatio);
            }

            // smooth mapping: if scrollSpeed is high, apply progress more immediately; if low, ease into it
            const prev = prevProgress.get(el) ?? 0;
            // map scrollSpeed into a smoothing factor between 0.15 (slow) and 0.95 (fast)
            const speedNorm = Math.min(1, scrollSpeed / 2000);
            const blend = 0.15 + 0.8 * speedNorm; // in [0.15,0.95]
            const smoothed = prev + (displayProgress - prev) * blend;
            prevProgress.set(el, smoothed);
            tween.progress(smoothed);
          },
          // no scrub here so updates follow actual scroll speed (immediate mapping)
          scrub: 0,
        });
      });

      ScrollTrigger.refresh();
    } else {
  // IntersectionObserver fallback: track previous ratio to detect direction
      const thresholds = Array.from({ length: 101 }, (_, i) => i / 100); // 0.00 .. 1.00
      const lastRatio = new WeakMap();

      // We use the RAF-based tracker started above (works with loco or native) so no extra scroll listener

      elements.forEach((el) => {
        // ensure initial state
        gsap.set(el, { opacity: 0, scale: 0.3, y: 50 });

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const r = Math.max(0, Math.min(1, entry.intersectionRatio));
              const prev = lastRatio.get(entry.target) ?? 0;
              const goingDown = r > prev; // ratio increasing => scrolling down
              lastRatio.set(entry.target, r);

                      // Asymmetric mapping for IntersectionObserver:
                      // - scrolling down: start at enterDownRatio
                      // - scrolling up: start at enterUpRatio
                      let displayRatio = 0;
                      if (goingDown) {
                        if (r < enterDownRatio) displayRatio = 0;
                        else displayRatio = (r - enterDownRatio) / (1 - enterDownRatio);
                      } else {
                        if (r < enterUpRatio) displayRatio = 0;
                        else displayRatio = (r - enterUpRatio) / (1 - enterUpRatio);
                      }

              const scale = 0.3 + 0.7 * displayRatio;
              const opacity = displayRatio;
              const y = 50 * (1 - displayRatio);

              // adjust duration based on scroll speed: faster scroll => shorter duration
              // cap duration between 0.04s and 0.25s
              const baseDur = 0.12;
              const speedFactor = Math.min(1, Math.max(0, 1 - scrollSpeed / 2000));
              const dur = Math.max(0.04, Math.min(0.25, baseDur * speedFactor));

              gsap.to(entry.target, { scale, opacity, y, duration: dur, ease: "power1.out", overwrite: true });

              // keep observing so reverse scrolling updates the mapping
            });
          },
          { root: null, rootMargin: "0px", threshold: thresholds }
        );

        observer.observe(el);
        observers.push(observer);
      });
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      try {
        if (rafId) cancelAnimationFrame(rafId);
      } catch (e) {
        // ignore
      }
      // cleanup scroll triggers
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
}
