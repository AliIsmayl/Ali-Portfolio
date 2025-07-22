import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

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
      {/* Original Navbar - completely unchanged */}
      <nav>
        <div className="upBox">
          <Link to={"/"}>
            <img src="https://res.cloudinary.com/ds42i5esb/image/upload/v1753182191/Ali-Portfolio/signature_hsl56l.png" alt="" />
          </Link>
          <div className="navigate">
            <button onClick={toggleNavigate}>
              <span></span>
              <p>NAVIGATE HERE</p>
            </button>
          </div>
        </div>
      </nav>

      {/* Circle Overlay with content */}
      <div
        className={`circle-overlay ${isExpanded ? "expanded" : "collapsed"}`}
        style={{
          "--origin-x": `${buttonPosition.x}px`,
          "--origin-y": `${buttonPosition.y}px`,
        }}
      >
        <div className="overlay-content">
          <div></div>
          <div className="menu-items">
            <Link to="/" onClick={() => setIsExpanded(false)}>
              HOME
            </Link>
            <Link to="/project" onClick={() => setIsExpanded(false)}>
              PROJECT
            </Link>
            <Link to="/contact" onClick={() => setIsExpanded(false)}>
              CONTACT
            </Link>
          </div>

          <div className="footer">
            <div className="copyright">© {year} ALL RIGHTS RESERVED</div>
            <div className="social-links">
              <Link
                to={"https://www.instagram.com/ali.ismayil_"}
                target="_blank"
              >
                INSTAGRAM
              </Link>
              <Link to={`mailto:ali.ismayil.681@gmail.com`} target="_blank">
                GMAIL
              </Link>
              <Link to={`tel:+994998982004`} target="_blank">
                PHONE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
