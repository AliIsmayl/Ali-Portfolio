import React, { useEffect, useRef, useState } from "react";
import "./ImageSection.scss";

function ImageSection() {
  const sectionRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(
    "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182180/Ali-Portfolio/BackImg1_rhnyhs.png"
  );

  useEffect(() => {
    // Handle background image based on screen size
    const handleResize = () => {
      if (window.innerWidth < 597) {
        setBackgroundImage(
          "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182180/Ali-Portfolio/BackImg1_rhnyhs.png"
        );
      } else {
        setBackgroundImage(
          "https://res.cloudinary.com/ds42i5esb/image/upload/v1753182181/Ali-Portfolio/BackImg_vnzf7h.png"
        );
      }
    };

    // Set initial image
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Scroll effect for iOS
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollPosition = window.pageYOffset;
        const sectionPosition = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;

        if (
          scrollPosition > sectionPosition - window.innerHeight &&
          scrollPosition < sectionPosition + sectionHeight
        ) {
          const offset = (scrollPosition - sectionPosition) * 0.3;
          sectionRef.current.style.backgroundPositionY = `${offset}px`;
        }
      }
    };

    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    if (isIOS) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (isIOS) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section
      id="imageSection"
      ref={sectionRef}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></section>
  );
}

export default ImageSection;

// import image1 from "../../../Image/Image1.jpg";
// import image2 from "../../../Image/Image2.jpg";
import { RxInstagramLogo } from "react-icons/rx";
import { PiFacebookLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { PiTiktokLogo } from "react-icons/pi";
import { LiaTelegramPlane } from "react-icons/lia";
import { PiYoutubeLogo } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router";

{
  /* <div className="imgBox" id="img1" data-aos="fade-down">
        <img src={image1} alt="" />
        <div className="socialMedia">
          <div className="text">
            <Link
              className="link"
              target="_blank"
              to={"https://www.instagram.com/ali.ismayil_"}
            >
              <RxInstagramLogo />
            </Link>
            <Link className="link" target="_blank">
              <PiFacebookLogo />
            </Link>
            <Link
              className="link"
              target="_blank"
              to={"https://www.linkedin.com/in/ali-ismayilzade/"}
            >
              <PiLinkedinLogo />
            </Link>
            <Link className="link" target="_blank">
              <PiYoutubeLogo />
            </Link>
            <Link className="link" target="_blank">
              <PiTiktokLogo />
            </Link>
            <Link className="link" target="_blank">
              <LiaTelegramPlane />
            </Link>
            <Link
              className="link"
              to={`mailto:ali.ismayil.681@gmail.com`}
              target="_blank"
            >
              <IoMailOutline />
            </Link>
          </div>
        </div>
      </div> */
}

{
  /* <div className="imgBox" id="img2" data-aos="fade-up">
        <img src={image2} alt="" />
        <div className="socialMedia">
          <div className="text">
            <Link
              className="link"
              target="_blank"
              to={"https://www.instagram.com/ali.ismayil_"}
            >
              <RxInstagramLogo />
            </Link>
            <Link className="link" target="_blank">
              <PiFacebookLogo />
            </Link>
            <Link
              className="link"
              target="_blank"
              to={"https://www.linkedin.com/in/ali-ismayilzade/"}
            >
              <PiLinkedinLogo />
            </Link>
            <Link className="link" target="_blank">
              <PiYoutubeLogo />
            </Link>
            <Link className="link" target="_blank">
              <PiTiktokLogo />
            </Link>
            <Link className="link" target="_blank">
              <LiaTelegramPlane />
            </Link>
            <Link
              className="link"
              to={`mailto:ali.ismayil.681@gmail.com`}
              target="_blank"
            >
              <IoMailOutline />
            </Link>
          </div>
        </div>
      </div> */
}
