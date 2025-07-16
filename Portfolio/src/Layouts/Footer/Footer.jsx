import React from "react";
import { MdArrowOutward } from "react-icons/md";
import "./Footer.scss";
import { Link } from "react-router";

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
          <Link className="button" to={"/contact"}>
            <span></span>
            <p>CONTACT ME</p>
          </Link>
          <p>
            HI, I’M ALI — I BUILD INTUITIVE WEBSITES THAT LOOK GOOD, LOAD FAST,
            AND FEEL EFFORTLESS. FROM IDEA TO CODE, I CARE ABOUT EVERY DETAIL.
          </p>
        </div>
        <div className="mediumBox">
          <div className="socialMedia">
            <Link
              target="_blank"
              to={"https://www.instagram.com/ali.ismayil_"}
              className="box"
            >
              <p>INSTAGRAM</p>
              <span></span>
            </Link>
            <h6>
              <MdArrowOutward />
            </h6>
          </div>
          <div className="socialMedia">
            <Link
              to={`mailto:ali.ismayil.681@gmail.com`}
              target="_blank"
              className="box"
            >
              <p>GMAIL</p>
              <span></span>
            </Link>
            <h6>
              <MdArrowOutward />
            </h6>
          </div>
          <div className="socialMedia">
            <Link to={`tel:+994998982004`} target="_blank" className="box">
              <p>PHONE</p>
              <span></span>
            </Link>
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
