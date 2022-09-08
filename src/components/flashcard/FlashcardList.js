import React from "react";
import Flashcard from "./Flashcard";
const FlashcardList = (props) => {
  return (
    <Flashcard
      card={props.card}
      showNextCard={props.showNextCard}
      showPrevCard={props.showPrevCard}
    />
  );
};

export default FlashcardList;
