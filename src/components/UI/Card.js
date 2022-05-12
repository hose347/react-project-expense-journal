import "./Card.css";
import _, { join } from "lodash";

function Card(props) {
  // const classes = "card" + props.className;
  const classes = join(["card", props.className], " ");
  console.log("classess", classes);
  return <div className={classes}>{props.children}</div>;
}
export default Card;
