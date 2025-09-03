import React from "react";
import "./HomeHead.scss";
import { useTranslation } from "react-i18next";

function HomeHead() {
  const { t: Home } = useTranslation("translation", { keyPrefix: "Home" });
  return (
    <header id="homeHead">
      <div className="middleBox">
        <div className="work">
          <div className="lamp"></div>
          <p>{Home("Head")}</p>
        </div>
        <h1 class="btn-shine" data-aos="fade-up" data-aos-duration="300">
         {Home("Name")}
        </h1>
      </div>
      <div className="downBox">
        <p>{Home("Location")}</p>

        <div className="text">
          <p>FRONT END DEVELOPER</p>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default HomeHead;
