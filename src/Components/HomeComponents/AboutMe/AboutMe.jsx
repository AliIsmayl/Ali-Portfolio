import React from "react";
import "./AboutMe.scss";
import cv from "../../../Image/Ali-Ismayil.Cv.pdf";
import { Link } from "react-router";

function AboutMe() {
  const handleFileOpen = () => {
    window.open(cv, "_blank"); // Opens in a new tab
  };
  return (
    <section id="aboutMe">
      <h1>MORE ABOUT ME ©</h1>
      <div className="downBox">
        <img src="https://res.cloudinary.com/ds42i5esb/image/upload/v1753182180/Ali-Portfolio/Image1_xk2but.jpg" alt="" />
        <div className="text">
          {" "}
          <h3>
            I’M ALI ISMAYIL, A FRONT-END DEVELOPER WHO TURNS IDEAS INTO ELEGANT,
            FUNCTIONAL WEBSITES.
          </h3>
          <p>
            I create simple, fast, and easy-to-use websites. It can be a company
            website, a digital menu, or a fashion brand page. I use HTML, CSS,
            JavaScript, React, and no-code tools to build my projects. I care
            about how people use websites and try to make everything work well
            on all devices. I have worked with different industries like
            healthcare, real estate, online shops and etc. My websites are not
            only beautiful — they also solve real problems. Let’s build
            something great together.
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
