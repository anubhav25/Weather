import React from "react";
function Card({ name, temp }) {
  return (
    <div className="mycard">
      <div className="card-body">
        <p className="mycard-head">{name}</p>
        <p>
          {temp}°C
          <span className="mockImg"></span>
        </p>
      </div>
    </div>
  );
}

export default Card;
