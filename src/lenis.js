import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis;

// one shared Lenis instance for the whole app
export function initLenis() {
  if (lenis) return lenis;

  lenis = new Lenis({
    lerp: 0.075,
    smoothWheel: true,
  });

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  return lenis;
}

export function getLenis() {
  return lenis;
}

// smooth scroll to the very top, with a native fallback
export function scrollToTop(opts = {}) {
  if (lenis) lenis.scrollTo(0, { duration: 1.1, ...opts });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
