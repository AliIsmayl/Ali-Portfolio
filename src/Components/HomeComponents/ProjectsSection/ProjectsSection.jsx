import React, { useEffect, useState } from "react";
import "./ProjectsSection.scss";
import info from "../../../project";
import { Link, useLocation } from "react-router";
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
        backgroundImage: `url(${location === "/project" ? Image2 : Image1})`,
      }}
    >
      <div className="upBox">
        <h1>{location === "/project" ? "ALL PROJECT" : "FEATURED WORK"}</h1>
      </div>
      <div className="downBox">
        {visibleProjects &&
          visibleProjects.map((item, index) => (
            <Link
              data-aos={`fade-${index % 2 === 0 ? "right" : "left"}`}
              data-aos-duration="1000"
              className="projectCard"
              key={index}
              to={location === "/project" ? `${item.id}` : `project/${item.id}`}
            >
              <div className="imgBox">
                <img src={item.image} alt="" />
              </div>
              <div className="textBox">
                <div className="text">
                  <p>{item.name}</p>
                  <span>{item.detail}</span>
                </div>
                <div className="time">
                  <p>{item.time}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
