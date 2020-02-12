import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

export default function Card({
  handleClick,
  id,
  shape,
  cardsClicked,
  match,
  height,
  width,
  freezeClick
}) {
  return (
    <div
      className={`flip-container ${cardsClicked ? "cardsClicked" : ""}`}
      style={{
        width,
        height
      }}
      onClick={() => (freezeClick ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          style={{
            height,
            width
          }}
          className={cardsClicked ? "front" : "back"}
          src={
            cardsClicked || match ? `/images/${shape}.jpg` : "/images/back.png"
          }
          alt={shape}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  cardsClicked: PropTypes.bool.isRequired,
  match: PropTypes.bool.isRequired,
  shape: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  freezeClick: PropTypes.bool.isRequired
};
