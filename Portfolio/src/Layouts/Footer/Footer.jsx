import React from "react";
import { MdArrowOutward } from "react-icons/md";
import "./Footer.scss";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };
  return (
    <div className="footerSection">
      <footer>
        <div className="upBox">
          <h2>LET'S WORK TOGETHER</h2>
          <button>
            <span></span>
            <p>CONTACT ME</p>
          </button>
          <p>
            HI, I’M ALI — I BUILD INTUITIVE WEBSITES THAT LOOK GOOD, LOAD FAST,
            AND FEEL EFFORTLESS. FROM IDEA TO CODE, I CARE ABOUT EVERY DETAIL.
          </p>
        </div>
        <div className="mediumBox">
          <div className="socialMedia">
            <div className="box">
              <p>INSTAGRAM</p>
              <span></span>
            </div>
            <h6>
              <MdArrowOutward />
            </h6>
          </div>
          <div className="socialMedia">
            <div className="box">
              <p>GMAIL</p>
              <span></span>
            </div>
            <h6>
              <MdArrowOutward />
            </h6>
          </div>
          <div className="socialMedia">
            <div className="box">
              <p>PHONE</p>
              <span></span>
            </div>
            <h6>
              <MdArrowOutward />
            </h6>
          </div>
        </div>
      </footer>

      <section id="backToTop">
        <h1 data-aos="fade-down">FRONT END</h1>
        <div className="down">
          <p>© 2024 ALL RIGHTS RESERVED</p>
          <div className="box">
            <h2 onClick={scrollToTop}>GO BACK TO TOP</h2>
            <span></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
