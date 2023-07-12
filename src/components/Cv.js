import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "../styles/cv.css";

const Cv = ({ data }) => {
  const switchhHtmlElements = (object, index) => {
    switch (object.type) {
      case "header":
        return (
          <h1 className="cv header" key={`cv-header-${index}`}>
            {object.content}
          </h1>
        );
      case "specs":
        return (
          <p className="cv specs" key={`cv-intro-${index}`}>
            {object.content}
          </p>
        );
      case "h2":
        return (
          <h2 className="cv subhead" key={`cv-subhead-${index}`}>
            {object.content}
          </h2>
        );
      case "h3":
        return (
          <h3 className="cv subhead" key={`cv-subhead-${index}`}>
            {object.content}
          </h3>
        );
      case "h4":
        return (
          <h4 className="cv subhead" key={`cv-subhead-${index}`}>
            {object.content}
          </h4>
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
        console.log(split);
        return <p className="cv para">{split.map((s) => s)}</p>;

      default:
        break;
    }
  };

  return (
    <div className="cv">
      {data && data.length > 0 ? (
        data[0].map((d, i) => switchhHtmlElements(d, i))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default Cv;
