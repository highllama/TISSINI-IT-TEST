import React from "react";
//REACT ROUTER
import { Link } from "react-router-dom";
//STYLE
import "../assets/styles/components/LineCard.scss";

const LineCard = ({ imageUrl, redirect }) => {
  return (
    <div className="LineCard">
      <img src={imageUrl} alt={redirect} />
      {redirect ? (
        <Link to={`${redirect}`}>
          <button>VER MÁS</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default LineCard;
