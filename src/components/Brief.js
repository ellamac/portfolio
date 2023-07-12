import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Brief = (props) => {
  useEffect(() => {
    //Runs on every render if ends with });
    //Runs only on the first render if ends with }, []);
    //Runs ion the first render and any time any dependency value changes if ends with }, [prop, state]);
  });
  return (
    <>
      <div className="brief">
        <div className="pic">
          <img
            src="https://res.cloudinary.com/dvvizrtil/image/upload/v1687773619/portfolio/ella.jpg"
            alt="My headshot"
          />
        </div>

        <div className="info">
          <h1>Welcome to my portfolio!</h1>
          <p>
            This porfolio is for others to check out my previous work and for me
            to follow my progress as I transition from a graduate student to a
            professional designer–developer.
          </p>
          <p>
            Currently working on:{" "}
            <Link to="/projects/portfolio">This website</Link> 😁
          </p>
        </div>
      </div>
    </>
  );
};

export default Brief;
