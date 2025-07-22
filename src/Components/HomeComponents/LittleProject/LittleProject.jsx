import React from "react";
import "./LittleProject.scss";

function LittleProject() {
  const logos = [
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182181/Ali-Portfolio/1_bd2v0d.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182183/Ali-Portfolio/2_ojvsq8.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182183/Ali-Portfolio/3_r6rndp.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182184/Ali-Portfolio/5_jmwuzy.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182186/Ali-Portfolio/8_hrhnt7.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182177/Ali-Portfolio/16_alvumf.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182186/Ali-Portfolio/7_xmmpd6.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182186/Ali-Portfolio/9_wropbw.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182187/Ali-Portfolio/10_qpgwwe.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182184/Ali-Portfolio/4_scki0p.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182185/Ali-Portfolio/6_mmx8nt.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182178/Ali-Portfolio/21_xmgm4u.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182177/Ali-Portfolio/18_icge8u.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182177/Ali-Portfolio/17_exyv8p.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182178/Ali-Portfolio/19_xlnoij.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182178/Ali-Portfolio/20_btqdie.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182177/Ali-Portfolio/15_fnprq8.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182188/Ali-Portfolio/11_elwgbn.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182189/Ali-Portfolio/12_nmmlk9.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182189/Ali-Portfolio/13_mtupka.png",
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182190/Ali-Portfolio/14_f6pstm.png"
  ];

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
        <div className="carousel-track">{carouselItems}</div>
      </div>
      <div className="gradient-overlay left"></div>
      <div className="gradient-overlay right"></div>
    </section>
  );
}

export default LittleProject;
