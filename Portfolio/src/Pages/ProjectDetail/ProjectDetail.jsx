import React, { useEffect, useState } from "react";
import "./ProjectDetail.scss";
import projects from "../../project";
import { useParams } from "react-router";

function ProjectDetail() {
  const [detail, setDetail] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const projectDetail = projects.find((item) => item.id === Number(id));
    setDetail(projectDetail);
    
    // Set CSS variable based on project color
    if (projectDetail?.color) {
      document.documentElement.style.setProperty(
        '--project-color', 
        projectDetail.color
      );
    }
  }, [id]);

  if (!detail) return <div>Loading...</div>;

  return (
    <div id="projectDetail" style={{ "--project-color": detail.color || '#291730' }}>
      <div className="firstBox">
        <div className="left" data-aos="fade-right">
          <h1>{detail.name}</h1>
          <p>{detail.bigDescription}</p>
        </div>
        <div className="right" data-aos="fade-left">
          <div className="box">
            <span>CLIENT</span>
            <p>{detail.client}</p>
          </div>
          <div className="box">
            <span>TYPE</span>
            <p>{detail.detail}</p>
          </div>
          <div className="box">
            <span>DATE</span>
            <p>{detail.time}</p>
          </div>
          <div
            className="box project-link-box"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span>PROJECT</span>
            <div className="link-container">
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href={detail.link}
              >
                <p>CLICK</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="secondBox"
        style={{ backgroundImage: `url(${detail.image})` }}
      ></div>

      <div className="thirdBox">
        <div className="right2">
          {detail.job?.map((item, index) => (
            <div className="box" key={index}>
              <span data-aos="fade-left" className="signature-line">
                {item.info}
              </span>
              <p data-aos="fade-right">
                {detail.work?.[index]?.info || item.work}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="secondBox"
        data-aos="fade-up"
        style={{ backgroundImage: `url(${detail.image1})` }}
      ></div>
      <div
        data-aos="fade-up"
        className="secondBox"
        style={{ backgroundImage: `url(${detail.image2})` }}
      ></div>
    </div>
  );
}

export default ProjectDetail;