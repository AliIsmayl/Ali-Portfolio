import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Navbar() {
  const { t: Pages } = useTranslation("translation", { keyPrefix: "Pages" });
  const { t: Navbar } = useTranslation("translation", { keyPrefix: "Navbar" });

  const defaultLang = localStorage.getItem("language")
    ? JSON.parse(localStorage.getItem("language"))
    : "Az";
  const [selectedLang, setSelectedLang] = useState(defaultLang);

  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const storedLang = JSON.parse(localStorage.getItem("language")) || "En";
    i18n.changeLanguage(storedLang.toLowerCase());
  }, []);

  const handleLangChange = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.toLowerCase());
    localStorage.setItem("language", JSON.stringify(lang));
  };

  const toggleNavigate = (e) => {
    const buttonRect = e.currentTarget.getBoundingClientRect();
    setButtonPosition({
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2,
    });
    setIsExpanded(!isExpanded);
  };

  const year = new Date().getFullYear();

  return (
    <>
      <nav>
        <div className="upBox">
          <Link to={"/"}>
            <img
              src="https://res.cloudinary.com/ds42i5esb/image/upload/v1753182191/Ali-Portfolio/signature_hsl56l.png"
              alt=""
            />
          </Link>

          <div className="navigate">
            <button onClick={toggleNavigate}>
              <span></span>
              <p>{Navbar("Nav")}</p>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`circle-overlay ${isExpanded ? "expanded" : "collapsed"}`}
        style={{
          "--origin-x": `${buttonPosition.x}px`,
          "--origin-y": `${buttonPosition.y}px`,
        }}
      >
        <div className="overlay-content">
          <div></div>
          <div className="language">
            <div
              className={`lang ${selectedLang === "Az" ? "selected" : ""}`}
              onClick={() => {
                handleLangChange("Az");
                setIsExpanded(false);
              }}
            >
              Az
            </div>
            <div
              className={`lang ${selectedLang === "En" ? "selected" : ""}`}
              onClick={() => {
                handleLangChange("En");
                setIsExpanded(false);
              }}
            >
              En
            </div>
          </div>
          <div className="menu-items">
            <Link to="/" onClick={() => setIsExpanded(false)}>
              {Pages("Home")}
            </Link>
            <Link to="/project" onClick={() => setIsExpanded(false)}>
              {Pages("Project")}
            </Link>
            <Link to="/contact" onClick={() => setIsExpanded(false)}>
              {Pages("Contact")}
            </Link>
          </div>

          <div className="footer">
            <div className="copyright">
              © {year} {Pages("CopyRight")}
            </div>
            <div className="social-links">
              <Link
                to={"https://www.instagram.com/ali.ismayil_"}
                target="_blank"
              >
                {Pages("Instagram")}
              </Link>
              <Link to={`mailto:ali.ismayil.681@gmail.com`} target="_blank">
                {Pages("Gmail")}
              </Link>
              <Link to={`tel:+994998982004`} target="_blank">
                {Pages("Number")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
