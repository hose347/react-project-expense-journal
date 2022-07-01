import "./Card.css";
import { join } from "lodash";

function Card(props) {
  // console.log(props.children);
  // const classes = "card" + props.className;
  const classes = join(["card", props.className], " ");
  // console.log("classess", classes);
  return <div className={classes}>{props.children}</div>;
}

export default Card;
