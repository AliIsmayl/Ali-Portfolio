import React from "react";
import "./ProjectsSection.scss";
import info from "../../../project";
import { Link, useLocation } from "react-router-dom";
import Image1 from "../../../../public/BackPro.png";
import Image2 from "../../../../public/BackPro2.png";

function ProjectsSection() {
  const location = useLocation().pathname;
  const isProjectPage = location === "/project";
  const visibleProjects = isProjectPage ? info : info.slice(0, 6);

  return (
    <section
      id="projectsSection"
      style={{
        backgroundImage: `url(${isProjectPage ? Image2 : Image1})`,
      }}
    >
      <div className="upBox">
        <h1>{isProjectPage ? "ALL PROJECTS" : "FEATURED WORK"}</h1>
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
              style={{ "--moon-clr": item.color || "rgb(110, 17, 176)" }} // Dynamic color per card
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div className="textBox">
                  <div className="text">
                    <p>{item.name}</p>
                    <span>{item.detail}</span>
                  </div>
                  <div className="time">
                    <p>{item.time}</p>
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
