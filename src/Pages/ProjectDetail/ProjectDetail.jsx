import React, { useEffect, useState } from "react";
import "./ProjectDetail.scss";
import projects from "../../project";
import { useParams } from "react-router";
import ReactHtmlParser from "html-react-parser";
import { useTranslation } from "react-i18next";

function ProjectDetail() {
  const [detail, setDetail] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const { id } = useParams();
  const { t: Detail } = useTranslation("translation", {
    keyPrefix: "Detail",
  });

  useEffect(() => {
    const projectDetail = projects.find((item) => item.id === Number(id));
    setDetail(projectDetail);

    // Set CSS variable based on project color
    if (projectDetail?.color) {
      document.documentElement.style.setProperty(
        "--project-color",
        projectDetail.color
      );
    }
  }, [id]);

  const lang = localStorage.getItem("i18nextLng");

  if (!detail) return <div>Loading...</div>;

  return (
    <div
      id="projectDetail"
      style={{ "--project-color": detail.color || "#291730" }}
    >
      <div className="firstBox">
        <div className="left" data-aos="fade-right">
          <h1>{detail?.name[lang]}</h1>
          <p>{ReactHtmlParser(detail?.bigDescription[lang])}</p>
        </div>
        <div className="right" data-aos="fade-left">
          <div className="box">
            <span>{Detail("Dev")}</span>
            <p>{detail?.process[lang]}</p>
          </div>
          <div className="box">
            <span>{Detail("Field")}</span>
            <p>{detail?.detail[lang]}</p>
          </div>
          <div className="box">
            <span>{Detail("Date")}</span>
            <p>{detail?.time}</p>
          </div>
          <div
            className="box project-link-box"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span>{Detail("Project")}</span>
            <div className="link-container">
              <a
                className="link"
                target="_blank"
                rel="noreferrer"
                href={detail.link}
              >
                <p style={{ color: `${detail.color}` }}>{Detail("Click")}</p>
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
                {item?.info[lang]}
              </span>
              <p data-aos="fade-right">
                {detail.work?.[index]?.info[lang] || item?.work[lang]}
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
