import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Flashcard from "./components/flashcard/Flashcard";

function shuffleCard(array) {
  const arrCopy = [...array];
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arrCopy[currentIndex], arrCopy[randomIndex]] = [
      arrCopy[randomIndex],
      arrCopy[currentIndex],
    ];
  }
  return arrCopy;
}

const App = () => {
  const DUMMY_ALPHABET = [
    { id: 1, mon: "а", eng: "a" },
    { id: 2, mon: "б", eng: "b" },
    { id: 3, mon: "в", eng: "v" },
    { id: 4, mon: "ge", eng: "ge.eng" },
  ];
  const [cards, setCards] = useState(DUMMY_ALPHABET);
  const [index, setIndex] = useState(0);

  const shuffleCardsHandler = () => {
    setCards((prev) => {
      console.log(shuffleCard(prev));
      return shuffleCard(prev);
    });
  };

  const showNextCardHandler = () => {
    setIndex((prevIndex) => {
      if (prevIndex === cards.length - 1) return 0;
      return prevIndex + 1;
    });
    console.log("clicked next");
  };

  const showPrevCardHandler = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) return cards.length - 1;
      return prevIndex - 1;
    });
    console.log("clicked prev");
  };

  const clickHandler = () => {
    console.log("hi");
  };

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <Flashcard
          onClick={clickHandler}
          card={cards[index]}
          showNextCard={showNextCardHandler}
          showPrevCard={showPrevCardHandler}
        />
        <button onClick={shuffleCardsHandler}>Shuffle Cards</button>
      </main>
    </div>
  );
};

export default App;
