import React, { useState, useEffect } from "react";
import Papa from "papaparse";

import { chunkDatas, sortDatas } from "./helpers/DataHelpers";
import ScrollToTop from "./helpers/scrollToTop";
import NavbarTop from "./components/NavbarTop";
import NavbarBottom from "./components/NavbarBottom";
import Content from "./components/Content";

const dataFiles = [
  "https://docs.google.com/spreadsheets/d/1ZvsFzxtHgEVvCQRLecKeQe5MjBqMgs3VQkoxqgsMW3E/pub?output=csv",
  "https://docs.google.com/spreadsheets/d/1l0V_iJj2vXHyf_MUvBJcrE9EPcTmQAA1eOxBXfJiv1s/pub?output=csv",
];

const Main = (props) => {
  const [data, setData] = useState([]);

  /* Gets data from Google sheets */
  useEffect(() => {
    let datas = [];
    Promise.all(
      [...dataFiles].map(
        (file) =>
          new Promise((resolve, reject) =>
            Papa.parse(file, {
              download: true,
              header: true,
              complete: resolve, // Resolve each promise
              error: reject,
            })
          )
      )
    )
      .then((results) => {
        results.forEach((result, index) => {
          datas.push(result);
        });
        setData(sortDatas(chunkDatas(datas))); // now since .then() excutes after all promises are resolved, filesData contains all the parsed files.
      })
      .catch((err) => console.log("Something went wrong:", err));
  }, []);

  return (
    <>
      <ScrollToTop />
      <NavbarTop />
      <Content data={data} />
      <NavbarBottom />
    </>
  );
};

export default Main;
