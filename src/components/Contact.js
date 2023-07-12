import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Contact = (props) => {
  return (
    <div>
      <h1>Contact information</h1>
      <h2>I am looking for work!</h2>
      <p>Please contact me via email or LinkedIn:</p>
      <p>
        email:{" "}
        <a href="mailto:ella@makela.co" target="_blank" rel="noreferrer">
          ella@makela.co <OpenInNewIcon className="newTab" />
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/ellamakela/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/ellamakela <OpenInNewIcon className="newTab" />
        </a>
      </p>
      <p>
        GitHub:
        <a
          href="https://github.com/stars/ellamac/lists/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          github.com/ellamac <OpenInNewIcon className="newTab" />
        </a>
      </p>
    </div>
  );
};

export default Contact;
