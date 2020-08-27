import React from "react";
//REACT ROUTER
import { Link } from "react-router-dom";
//STYLE
import "../assets/styles/components/LargeCard.scss";

const LargeCard = (props) => {
  return (
    <div className="LargeCard">
      <img src={props.urlImage} alt="" />
      {props.redirect ? (
        <Link to={`${props.redirect}`}>
          <button>VER MÁS</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default LargeCard;
