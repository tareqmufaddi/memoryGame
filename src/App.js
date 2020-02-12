import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import Deck from "./Components/Deck";
import bootDeck from "./Utilities";

export default function App() {
  const [cardSet, setCardSet] = useState([]);
  const [screenSize, setScreenSize] = useState(400);
  const [cardsClicked, setcardsClicked] = useState([]);
  const [match, setmatch] = useState([]);
  const [freezeClick, setFreezeClick] = useState(false);

  useEffect(() => {
    resizeScreen();
    setCardSet(bootDeck());
  }, []);

  useEffect(() => {
    loadImages();
  }, cardSet);

  useEffect(() => {
    const resizer = window.addEventListener("resize", resizeScreen);
    return () => window.removeEventListener("resize", resizer);
  });

  const resizeScreen = () => {
    setScreenSize(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  const loadImages = () =>
    cardSet.map(card => {
      const src = `/images/${card.shape}.jpg`;
      new Image().src = src;
    });

  const handleClick = id => {
    setFreezeClick(true);
    console.log(match.length);
    if (cardsClicked.length === 0) {
      setcardsClicked([id]);
      setFreezeClick(false);
    } else if (match.length > 10) {
      resetGame();
    } else {
      if (sameClicked(id)) return;
      setcardsClicked([cardsClicked[0], id]);
      if (ifMatch(id)) {
        setmatch([...match, cardsClicked[0], id]);
        resetCards();
      } else {
        unMatched();
      }
    }
  };

  const sameClicked = id => cardsClicked.includes(id);

  const ifMatch = id => {
    const clickedCard = cardSet.find(card => card.id === id);
    const flippedCard = cardSet.find(card => cardsClicked[0] === card.id);
    return flippedCard.shape === clickedCard.shape;
  };

  const resetGame = () => {
    setcardsClicked([]);
    setmatch([]);
    setCardSet(bootDeck());
  };

  const resetCards = () => {
    setcardsClicked([]);
    setFreezeClick(false);
  };

  const unMatched = () => {
    setTimeout(resetCards, 1800);
  };

  return (
    <Fragment>
      <h1>Card Memory Game</h1>
      <Deck
        cardSet={cardSet}
        handleClick={handleClick}
        screenSize={screenSize}
        cardsClicked={cardsClicked}
        match={match}
        freezeClick={freezeClick}
      />
    </Fragment>
  );
}
