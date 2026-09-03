import React from "react";
import { MdArrowOutward, MdArrowUpward, MdArrowForward } from "react-icons/md";
import "./Footer.scss";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { scrollToTop } from "../../lenis";

function Footer() {
  const { t: Home } = useTranslation("translation", { keyPrefix: "Home" });
  const { t: Pages } = useTranslation("translation", { keyPrefix: "Pages" });
  const { t: Footer } = useTranslation("translation", { keyPrefix: "Footer" });
  const { t: Connect } = useTranslation("translation", { keyPrefix: "Connect" });

  const year = new Date().getFullYear();

  const socials = [
    { label: Pages("Instagram"), href: "https://www.instagram.com/ali.ismayil_" },
    { label: Pages("Gmail"), href: "mailto:ali.ismayil.681@gmail.com" },
    { label: Pages("Number"), href: "tel:+994998982004" },
  ];

  return (
    <div className="footerSection">
      <footer>
        <div className="foot-grid">
          <div className="foot-lead">
            <span className="foot-kicker">— {Pages("Contact")}</span>
            <h2>{Connect("Head")}</h2>
            <p>{Connect("Text")}</p>
            <Link className="foot-cta" to={"/contact"}>
              <span>{Connect("Contact")}</span>
              <MdArrowForward />
            </Link>
          </div>

          <div className="foot-links">
            <span className="foot-kicker">— Elsewhere</span>

            <div className="foot-linklist">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  to={s.href}
                  target="_blank"
                  rel="noopener"
                  className="foot-link"
                >
                  <span>{s.label}</span>
                  <MdArrowOutward />
                </Link>
              ))}
              <a
                href="https://insyde.info/personal/06upZzUpyAx4/"
                target="_blank"
                rel="noopener"
                className="foot-link"
              >
                <span>Digital Card</span>
                <MdArrowOutward />
              </a>
              <a
                href="https://veb-sayt-qiymet.netlify.app/"
                target="_blank"
                rel="noopener"
                className="foot-link"
              >
                <span>{Pages("Pricing")}</span>
                <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <section id="backToTop">
        <h1 onClick={scrollToTop} title={Footer("ToTop")}>
          {Home("Name")}
        </h1>
        <div className="down">
          <p>
            © {year}
            {Pages("CopyRight")}
          </p>
          <button className="box" onClick={scrollToTop}>
            <span>{Footer("ToTop")}</span>
            <MdArrowUpward />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Footer;
