import React from "react";
import "./ImageSection.scss";
import image1 from "../../../Image/Image1.jpg";
import image2 from "../../../Image/Image2.jpg";
import { RxInstagramLogo } from "react-icons/rx";
import { PiFacebookLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { PiTiktokLogo } from "react-icons/pi";
import { LiaTelegramPlane } from "react-icons/lia";
import { PiYoutubeLogo } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";

function ImageSection() {
  return (
    <section id="imageSection">
      <div className="imgBox" id="img1" data-aos="fade-down">
        <img src={image1} alt="" />
        <div className="socialMedia">
          <div className="text">
            <p>
              <RxInstagramLogo />
            </p>
            <p>
              <PiFacebookLogo />
            </p>
            <p>
              <PiLinkedinLogo />
            </p>
            <p>
              <PiYoutubeLogo />
            </p>
            <p>
              <PiTiktokLogo />
            </p>
            <p>
              <LiaTelegramPlane />
            </p>
            <p>
              <IoMailOutline />
            </p>
          </div>
        </div>
      </div>

      <div className="imgBox" id="img2" data-aos="fade-up">
        <img src={image2} alt="" />
        <div className="socialMedia">
          <div className="text">
            <p>
              <RxInstagramLogo />
            </p>
            <p>
              <PiFacebookLogo />
            </p>
            <p>
              <PiLinkedinLogo />
            </p>
            <p>
              <PiYoutubeLogo />
            </p>
            <p>
              <PiTiktokLogo />
            </p>
            <p>
              <LiaTelegramPlane />
            </p>
            <p>
              <IoMailOutline />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageSection;
