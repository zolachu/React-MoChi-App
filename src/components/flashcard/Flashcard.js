import { useState } from "react";
import styles from "./Flashcard.module.css";

import Card from "../../UI/Card";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";

const Flashcard = (props) => {
  const [flip, setFlip] = useState(false);

  const clickHandler = () => {
    console.log("clicked");
    setFlip((prev) => {
      return !prev;
    });
  };

  return (
    <Card className="something" onClick={clickHandler}>
      <div className={styles.content}>
        {flip ? props.card.mon : props.card.eng}
      </div>
      <div className={styles.actions}>
        <UndoIcon onClick={props.showPrevCard} />
        <RedoIcon onClick={props.showNextCard} />
      </div>
    </Card>
  );
};

export default Flashcard;
