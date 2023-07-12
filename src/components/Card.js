import React from "react";
import { Link } from "react-router-dom";
const Card = ({ content, type, back }) => {
  //const navigate = useNavigate();
  //const handleClick = (route) => navigate(`/${type}/${route}`);
  return (
    <Link
      className="card container"
      to={type === back ? `${content.name}` : `${type}/${content.name}`}
    >
      <img
        className="card bg"
        src={`https://res.cloudinary.com/dvvizrtil/image/upload/v1687773619/portfolio/${content.mainimg}`}
        alt="bg img"
      />
      <div className="card content">
        <h3>{content.header}</h3>
        <p>{content.intro}</p>
      </div>
    </Link>
  );
};

export default Card;
