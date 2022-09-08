import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardContainer = (props) => {
  return (
    <Card onClick={props.onClick}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        {props.children}
      </Card.Body>
    </Card>
  );
};

export default CardContainer;
