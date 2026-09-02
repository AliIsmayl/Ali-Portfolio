import React, { useEffect, useState } from "react";
import "./Intro.scss";
import { getLenis } from "../../lenis";

const NAME = "ALI ISMAYIL";

function Intro() {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState(reduce ? "done" : "in"); // in -> out -> done

  // lock scrolling while the intro covers the screen
  useEffect(() => {
    if (phase === "done") return undefined;
    const lenis = getLenis();
    lenis?.stop();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      lenis?.start();
      document.body.style.overflow = prev;
    };
  }, [phase]);

  // count 0 -> 100, then wipe away
  useEffect(() => {
    if (reduce) return undefined;
    let raf;
    let t1;
    let t2;
    const start = performance.now();
    const DURATION = 1500;

    const tick = (now) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        t1 = setTimeout(() => setPhase("out"), 350);
        t2 = setTimeout(() => setPhase("done"), 1300);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [reduce]);

  if (phase === "done") return null;

  return (
    <div className={`intro intro--${phase}`} aria-hidden="true">
      <div className="intro__inner">
        <h2 className="intro__name">
          {NAME.split("").map((ch, i) => (
            <span key={i} style={{ "--i": i }}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </h2>
        <span className="intro__line" />
      </div>

      <div className="intro__count">
        <span>{String(count).padStart(3, "0")}</span>
        <i>%</i>
      </div>
    </div>
  );
}

export default Intro;
