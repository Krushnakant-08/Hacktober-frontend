// Promise-based helper to scroll an element into view accounting for a fixed navbar.
// Uses Locomotive when available (element target) and falls back to native scroll.
export default function scrollToAnchor(target, { offset = null, duration = 0 } = {}) {
  return new Promise((resolve) => {
    if (!target) return resolve();

    // resolve DOM node if an id string is passed
    let el = null;
    if (typeof target === 'string') el = document.getElementById(target);
    else el = target;
    if (!el) return resolve();

    const navEl = document.querySelector('nav');
    const navbarHeight = navEl ? navEl.offsetHeight : 60;
    const loco = typeof window !== 'undefined' && window.loco ? window.loco : null;

    const finalOffset = offset !== null ? offset : -navbarHeight;

    const performNativeScroll = (y, behavior) => {
      try { window.scrollTo({ top: y, behavior }); } catch (e) {}
    };

    const verifyAndSnapIfNeeded = (elem, expectedTop) => {
      try {
        const rect = elem.getBoundingClientRect();
        const navH = document.querySelector('nav')?.offsetHeight || navbarHeight;
        const top = Math.round(rect.top);
        // allow a 3px tolerance
        if (top < navH - 3 || top > navH + 3) {
          // still misaligned — perform a snap (duration 0)
          const snapY = Math.max(0, Math.floor(elem.offsetTop - navH));
          if (loco && typeof loco.scrollTo === 'function') {
            try { loco.scrollTo(snapY, { duration: 0 }); } catch (e) { performNativeScroll(snapY, 'auto'); }
            try { loco.update(); } catch (e) {}
          } else {
            performNativeScroll(snapY, 'auto');
          }
          try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') window.ScrollTrigger.refresh(); } catch (e) {}
        }
      } catch (e) {}
    };

    try {
      if (loco && typeof loco.scrollTo === 'function') {
        try {
          // Using element-based scrollTo preserves loco's transforms; offset is negative navbar height
          loco.scrollTo(el, { offset: finalOffset, duration });
        } catch (e) {
          const targetY = Math.max(0, Math.floor(el.offsetTop - navbarHeight));
          performNativeScroll(targetY, duration === 0 ? 'auto' : 'smooth');
        }

        const wait = Math.max(120, duration + 80);
        setTimeout(() => {
          try { if (window && window.loco && typeof window.loco.update === 'function') window.loco.update(); } catch (e) {}
          try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') window.ScrollTrigger.refresh(); } catch (e) {}
          try { window.dispatchEvent(new Event('scroll')); } catch (e) {}
          // verify alignment and snap if needed
          verifyAndSnapIfNeeded(el);
          try { window.__navInProgress = false; } catch (e) {}
          resolve();
        }, wait);
      } else {
        const targetY = Math.max(0, Math.floor(el.offsetTop - navbarHeight));
        performNativeScroll(targetY, duration === 0 ? 'auto' : 'smooth');
        setTimeout(() => {
          try { if (window && window.ScrollTrigger && typeof window.ScrollTrigger.refresh === 'function') window.ScrollTrigger.refresh(); } catch (e) {}
          try { window.dispatchEvent(new Event('scroll')); } catch (e) {}
          verifyAndSnapIfNeeded(el);
          try { window.__navInProgress = false; } catch (e) {}
          resolve();
        }, Math.max(120, duration + 80));
      }
    } catch (e) {
      try { window.__navInProgress = false; } catch (e2) {}
      resolve();
    }
  });
}
