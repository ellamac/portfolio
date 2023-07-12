import React from "react";
import { Outlet } from "react-router-dom";

const Projects = ({ data }) => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Projects;
