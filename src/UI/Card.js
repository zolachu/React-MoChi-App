import styles from "./Card.module.css";
import Card from "react-bootstrap/Card";

const ContainerCard = (props) => {
  return (
    <div
      className={`${styles.card} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

export default ContainerCard;
