import React from "react";
import "./LittleProject.scss";
import img1 from "../../../Image/1.png";
import img2 from "../../../Image/2.png";
import img3 from "../../../Image/3.png";
import img4 from "../../../Image/4.png";
import img5 from "../../../Image/5.png";
import img6 from "../../../Image/6.png";
import img7 from "../../../Image/7.png";
import img8 from "../../../Image/8.png";
import img9 from "../../../Image/9.png";
import img10 from "../../../Image/10.png";
import img11 from "../../../Image/11.png";
import img12 from "../../../Image/12.png";
import img13 from "../../../Image/13.png";
import img14 from "../../../Image/14.png";
import img15 from "../../../Image/15.png";
import img16 from "../../../Image/16.png";
import img17 from "../../../Image/17.png";
import img18 from "../../../Image/18.png";
import img19 from "../../../Image/19.png";
import img20 from "../../../Image/20.png";
import img21 from "../../../Image/21.png";

function LittleProject() {
  const logos = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13,
    img14, img15, img16, img17, img18, img19,
    img20, img21,
  ];

  // Create two sets of logos for seamless infinite scroll
  const carouselItems = [...logos, ...logos].map((item, index) => (
    <div key={index} className="carousel-item">
      <div className="logo-container">
        <img src={item} alt={`logo-${index}`} className="logo-img" />
      </div>
    </div>
  ));

  return (
    <section className="logo-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {carouselItems}
        </div>
      </div>
      <div className="gradient-overlay left"></div>
      <div className="gradient-overlay right"></div>
    </section>
  );
}

export default LittleProject;