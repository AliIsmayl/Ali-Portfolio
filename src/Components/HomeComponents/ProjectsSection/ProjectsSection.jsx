import React, { useEffect, useState } from "react";
import "./ProjectsSection.scss";
import info from "../../../project";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
  const location = useLocation().pathname;
  const isProjectPage = location === "/project";
  const visibleProjects = isProjectPage ? info : info.slice(0, 6);
  const { t: Project } = useTranslation("translation", {
    keyPrefix: "Project",
  });
  const { t: Feature } = useTranslation("translation", {
    keyPrefix: "Feature",
  });

  const lang = localStorage.getItem("i18nextLng");

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 597);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 597);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projectsSection"
      style={{
        backgroundImage: `url(${
          isProjectPage
            ? "https://res.cloudinary.com/ds42i5esb/image/upload/v1753180377/Ali-Portfolio/BackPro2_vltofu.png"
            : "https://res.cloudinary.com/ds42i5esb/image/upload/v1753180377/Ali-Portfolio/BackPro_hpllfg.png"
        })`,
      }}
    >
      <div className="upBox">
        <h1>{isProjectPage ? `${Project("Head")}` : `${Feature("Head")}`}</h1>
      </div>
      <div className="cards">
        {visibleProjects &&
          visibleProjects.map((item, index) => (
            <Link
              data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}
              data-aos-duration="1000"
              className="card"
              key={index}
              to={isProjectPage ? `${item.id}` : `project/${item.id}`}
              style={{ "--moon-clr": item.color || "rgb(110, 17, 176)" }}
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="textBox">
                  <div className="text">
                    <p>
                      {isSmallScreen
                        ? item?.littleName[lang]
                        : item?.name[lang]}
                    </p>
                    <span>{item?.detail[lang]}</span>
                  </div>
                  <div className="time">
                    <p>{item?.time}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
