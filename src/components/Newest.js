import React from "react";

import CardNav from "./CardNav";
import { Link } from "react-router-dom";

const Newest = ({ header, data, type, back }) => {
  return (
    <div className="newest">
      {data && data.length > 0 ? (
        <CardNav
          header={header}
          data={data.slice(0, 2)}
          type={type}
          back={back}
        />
      ) : (
        <p>Loading...</p>
      )}{" "}
      <Link className="newest all" to="/projects">
        All projects
      </Link>
    </div>
  );
};

export default Newest;
