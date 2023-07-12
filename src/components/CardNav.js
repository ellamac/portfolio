import React from "react";
import "../styles/cards.css";
import Card from "./Card.js";
import { createCardObjects } from "../helpers/CardHelpers";

const CardNav = ({ header, data, type, back }) => {
  return (
    <div className={`cardnav ${type ? type : "gen"}`}>
      <h2>{header}</h2>
      {data && data.length > 0 ? (
        <div className="cardnav container">
          {createCardObjects(data).map((i, key) => (
            <Card content={i} key={key} type={type} back={back} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardNav;
