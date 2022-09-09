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
    { id: 1, mon: "ид", eng: "eat" },
    { id: 2, mon: "яв", eng: "go" },
    { id: 3, mon: "хий", eng: "do" },
    { id: 4, mon: "ажилла", eng: "work" },
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
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Flashcard
            onClick={clickHandler}
            card={cards[index]}
            showNextCard={showNextCardHandler}
            showPrevCard={showPrevCardHandler}
          />
          <button onClick={shuffleCardsHandler} className={styles.button}>
            Shuffle Cards
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
