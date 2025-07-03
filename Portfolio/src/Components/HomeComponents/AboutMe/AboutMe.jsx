import React from "react";
import "./AboutMe.scss";
import image from "../../../Image/Image1.jpg";
import cv from "../../../Image/Ali-Ismayil.Cv.pdf";
import { Link } from "react-router";

function AboutMe() {
  const handleFileOpen = () => {
    window.open(cv, "_blank"); // Opens in a new tab
  };
  return (
    <section id="aboutMe">
      <h1>MORE ABOUT ALI ©</h1>
      <div className="downBox">
        <img src={image} alt="" />
        <div className="text">
          {" "}
          <h3>
            I’M ALI ISMAYIL, A FRONT-END DEVELOPER WHO TURNS IDEAS INTO ELEGANT,
            FUNCTIONAL WEBSITES.
          </h3>
          <p>
            Whether it’s a corporate platform, a digital menu, or a fashion
            brand’s showcase — I build digital experiences that are clean, fast,
            and intuitive. I specialize in HTML, CSS, JavaScript, React and
            no-code tools, blending <span>"technical precision"</span> with a
            deep respect for user needs. With experience across diverse
            industries — from healthcare to real estate and e-commerce — I focus
            on performance, responsive design, and a smooth user journey. My
            work doesn’t just look good; it solves real problems and feels
            right. Let’s build something meaningful.
          </p>
          <Link className="link" onClick={handleFileOpen}>
            <button target="_blank">
              <span></span>
              <p>Download Resume</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
