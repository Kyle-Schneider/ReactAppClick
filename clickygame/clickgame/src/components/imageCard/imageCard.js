import React from "react";
import "./imageCard.css";

const imageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    </div>
);

export default imageCard;
