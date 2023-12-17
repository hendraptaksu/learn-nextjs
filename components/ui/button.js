import Link from "next/link";

import classes from "./button.module.css";

export default function Button({ children, className, onClick, link }) {
  if (link) {
    return (
      <Link
        href={link}
        className={`${classes.button} ${classes.link} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes.button + " " + className}>
      {children}
    </button>
  );
}
