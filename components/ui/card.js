import classes from "./card.module.css";

export default function Card({ children, className }) {
  return <div className={classes.card + " " + className}>{children}</div>;
}
