import React, { useEffect, useState } from "react";
import "./ProjectDetail.scss";
import projects from "../../project";
import { useParams } from "react-router";
import ReactHtmlParser from "html-react-parser";
import { useTranslation } from "react-i18next";

function ProjectDetail() {
  const [detail, setDetail] = useState(null);
  const { id } = useParams();
  const { t: Detail } = useTranslation("translation", { keyPrefix: "Detail" });

  useEffect(() => {
    const projectDetail = projects.find((item) => item.id === Number(id));
    setDetail(projectDetail);
    if (projectDetail?.color) {
      document.documentElement.style.setProperty(
        "--project-color",
        projectDetail.color
      );
    }
  }, [id]);

  const lang = localStorage.getItem("i18nextLng");

  if (!detail) return <div className="pd-loading">Loading…</div>;

  const gallery = [detail.image, detail.image1, detail.image2].filter(Boolean);

  return (
    <div
      id="projectDetail"
      style={{ "--project-color": detail.color || "var(--clr-base)" }}
    >
      <div className="pd-top">
        <div className="pd-head">
          <span className="pd-tag">
            <i />
            {detail?.detail?.[lang]}
          </span>
          <h1>{detail?.name?.[lang]}</h1>
          <p>{ReactHtmlParser(detail?.bigDescription?.[lang] || "")}</p>
        </div>

        <div className="pd-meta">
          <div className="pd-meta__row">
            <span>{Detail("Dev")}</span>
            <p>{detail?.process?.[lang]}</p>
          </div>
          <div className="pd-meta__row">
            <span>{Detail("Field")}</span>
            <p>{detail?.detail?.[lang]}</p>
          </div>
          <div className="pd-meta__row">
            <span>{Detail("Date")}</span>
            <p>{detail?.time}</p>
          </div>
          <div className="pd-meta__row">
            <span>{Detail("Project")}</span>
            <a href={detail.link} target="_blank" rel="noreferrer">
              {Detail("Click")} ↗
            </a>
          </div>
        </div>
      </div>

      {detail.job?.length > 0 && (
        <div className="pd-roles">
          {detail.job.map((item, index) => (
            <div className="pd-role" key={index}>
              <span>{item?.info?.[lang]}</span>
              <p>{detail.work?.[index]?.info?.[lang] || item?.work?.[lang]}</p>
            </div>
          ))}
        </div>
      )}

      {gallery.length > 0 ? (
        <div className="pd-gallery">
          {gallery.map((src, i) => (
            <div key={i} style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      ) : (
        <div className="pd-soon">Visuals & full case study coming soon.</div>
      )}
    </div>
  );
}

export default ProjectDetail;
