import React from "react";
import "./AboutMe.scss";
import cv from "../../../Image/Ali-Ismayil.Cv - IT Project Manager.pdf";
import { Link } from "react-router";
import ReactHtmlParser from "html-react-parser";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const handleFileOpen = () => {
    window.open(cv, "_blank"); // Opens in a new tab
  };
  const { t: About } = useTranslation("translation", {
      keyPrefix: "About",
    });
  return (
    <section id="aboutMe">
      <h1>{About("Head")}</h1>
      <div className="downBox">
        <img src="https://res.cloudinary.com/ds42i5esb/image/upload/v1788183192/Ali_pwvxja.jpg" alt="Ali Ismayil" />
        <div className="text">
          {" "}
          <p>{ReactHtmlParser(About("Text1"))}</p>
          <h3>{ReactHtmlParser(About("Text2"))}</h3>
          <Link className="link" onClick={handleFileOpen}>
            <button target="_blank">
              <span></span>
              <h4>{About("Button")}</h4>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
