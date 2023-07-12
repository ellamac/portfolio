import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/projects.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Project = ({ data }) => {
  const { name } = useParams();

  const [proj, setProj] = useState([{ type: "subehead", content: "loading" }]);

  useEffect(() => {
    if (data && data.length > 0) {
      setProj(
        data.find((d) => d.find((p) => p.type === "name" && p.content === name))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchhHtmlElements = (object, index) => {
    switch (object.type) {
      case "header":
        return (
          <h1 className="project header" key={`project-header-${index}`}>
            {object.content}
          </h1>
        );
      case "intro":
        return (
          <p className="project intro" key={`project-intro-${index}`}>
            {object.content}
          </p>
        );
      case "h2":
        return (
          <h2 className="project subhead two" key={`project-subhead-${index}`}>
            {object.content}
          </h2>
        );
      case "h3":
        return (
          <h3
            className="project subhead three"
            key={`project-subhead-${index}`}
          >
            {object.content}
          </h3>
        );
      case "p":
        const split = object.content.split("*").map((s) =>
          s.includes("http") ? (
            <a
              href={s.substring(s.indexOf("[") + 1, s.indexOf("]"))}
              target="_blank"
              rel="noreferrer"
            >
              {s.substring(0, s.indexOf("["))}
              <OpenInNewIcon className="newTab" />
            </a>
          ) : (
            s
          )
        );

        return <p className="project para">{split.map((s) => s)}</p>;
      case "img":
      case "mainimg":
        return (
          <div className={`project picncap ${object.type} ${object.style}`}>
            <div
              className={`project piccont`}
              key={`project-${object.type}-${index}`}
            >
              <img
                src={`https://res.cloudinary.com/dvvizrtil/image/upload/v1687773619/portfolio/${object.content}`}
                alt="project"
              />
            </div>
            <p className="caption">{object.extra}</p>
          </div>
        );
      default:
        break;
    }
  };
  const backButton = () => {
    return (
      <div className="project back">
        <Link to={-1} className="project backLink">
          <ArrowBackIcon className="project backArrow" />
          Back
        </Link>
      </div>
    );
  };

  return (
    <>
      {backButton()}
      <div className="project actualContent">
        {proj.map((d, i) => switchhHtmlElements(d, i))}
      </div>
      {backButton()}
    </>
  );
};

export default Project;
