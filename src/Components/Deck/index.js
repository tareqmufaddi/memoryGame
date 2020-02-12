/* eslint-disable jsx-quotes */
import React from "react";
import PropTypes from "prop-types";

import Card from "../Card";

import "./styles.css";

export default function Deck({
  freezeClick,
  screenSize,
  cardSet,
  cardsClicked,
  match,
  handleClick
}) {
  return (
    <div
      className="board"
      style={{
        width: screenSize,
        height: screenSize
      }}
    >
      {cardSet.map(card => (
        <Card
          key={card.id}
          id={card.id}
          shape={card.shape}
          width={screenSize / 5.5}
          height={screenSize / 5.5}
          cardsClicked={cardsClicked.includes(card.id)}
          match={match.includes(card.id)}
          handleClick={handleClick}
          freezeClick={freezeClick || match.includes(card.id)}
          {...card}
        />
      ))}
    </div>
  );
}

Deck.propTypes = {
  freezeClick: PropTypes.bool.isRequired,
  screenSize: PropTypes.number.isRequired,
  cardSet: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cardsClicked: PropTypes.arrayOf(PropTypes.number).isRequired,
  match: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired
};
