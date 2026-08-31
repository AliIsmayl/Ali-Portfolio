import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import "./InsydeCard.scss";

function InsydeCard() {
  const { pathname } = useLocation();
  const [atTop, setAtTop] = useState(window.scrollY <= 5);
  const [footerInView, setFooterInView] = useState(false);

  // hidden at the very top of the page, and once the footer shows up
  const hidden = atTop || footerInView;

  useEffect(() => {
    setAtTop(window.scrollY <= 5);
    setFooterInView(false);

    // show the card as soon as the page is scrolled just past the top
    const onScroll = () => setAtTop(window.scrollY <= 5);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observers = [];
    let t;
    if ("IntersectionObserver" in window) {
      // let the new route's DOM mount first
      t = setTimeout(() => {
        const footer = document.querySelector(".footerSection");
        if (footer) {
          const io = new IntersectionObserver(
            ([e]) => setFooterInView(e.isIntersecting),
            { rootMargin: "0px 0px 280px 0px" }
          );
          io.observe(footer);
          observers.push(io);
        }
      }, 60);
    }

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, [pathname]);

  return (
    <a
      href="https://insyde.info/personal/06upZzUpyAx4/"
      target="_blank"
      rel="noopener"
      className={`insyde-card${hidden ? " is-hidden" : ""}`}
      aria-label="Əli İsmayıl — rəqəmsal vizit kartı"
    >
      <img
        className="insyde-card__avatar"
        src="https://res.cloudinary.com/daat7cogb/image/upload/v1/media/profiles/1000314434_o8af71"
        width="40"
        height="40"
        alt=""
      />
      <span className="insyde-card__text">
        <strong>Əli İsmayıl</strong>
        <small>Rəqəmsal vizit kartıma buradan baxın</small>
      </span>
      <MdArrowForward className="insyde-card__arrow" />
    </a>
  );
}

export default InsydeCard;
