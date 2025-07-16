import React from "react";
import "./HomeHead.scss";
function HomeHead() {
  return (
    <header id="homeHead">
      <div className="middleBox">
        <div className="work">
          <div className="lamp"></div>
          <p>OPEN FOR COLLABORATION</p>
        </div>
        <h1 class="btn-shine" data-aos="fade-up" data-aos-duration="300">
          ALI ISMAYIL
        </h1>
      </div>
      <div className="downBox">
        <p>BAKU, AZERBAIJAN</p>

        <div className="text">
          <p>FRONT END DEVELOPER</p>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default HomeHead;
