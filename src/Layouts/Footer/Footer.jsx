import React from "react";
import { MdArrowOutward } from "react-icons/md";
import "./Footer.scss";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll animation
    });
  };

  const { t: Home } = useTranslation("translation", {
    keyPrefix: "Home",
  });
  const { t: Pages } = useTranslation("translation", {
    keyPrefix: "Pages",
  });
  const { t: Footer } = useTranslation("translation", {
    keyPrefix: "Footer",
  });
  const { t: Connect } = useTranslation("translation", {
    keyPrefix: "Connect",
  });
  return (
    <div className="footerSection">
      <footer>
        <div className="upBox">
          <h2>{Connect("Head")}</h2>
          <Link className="button" to={"/contact"}>
            <span></span>
            <p>{Connect("Contact")}</p>
          </Link>
          <p>{Connect("Text")}</p>
        </div>
        <div className="mediumBox">
          <div className="socialMedia">
            <Link
              target="_blank"
              to={"https://www.instagram.com/ali.ismayil_"}
              className="box"
            >
              <p>{Pages("Instagram")}</p>
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
              <p>{Pages("Gmail")}</p>
              <span></span>
            </Link>
            <h6>
              <MdArrowOutward />
            </h6>
          </div>
          <div className="socialMedia">
            <Link to={`tel:+994998982004`} target="_blank" className="box">
              <p>{Pages("Number")}</p>
              <span></span>
            </Link>
            <h6>
              <MdArrowOutward />
            </h6>
          </div>
        </div>
      </footer>

      <section id="backToTop">
        <h1 data-aos="fade-down">{Home("Name")}</h1>
        <div className="down">
          <p>© {new Date().getFullYear()} {Pages("CopyRight")}</p>
          <div className="box">
            <h2 onClick={scrollToTop}>{Footer("ToTop")}</h2>
            <span></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
