import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <Image
        src={"/images/site/hendra.jpeg"}
        width={300}
        height={300}
        alt="Picture of Hendra portrait"
      />
      <h2>Hi, I'm Hendra</h2>
      <p>I blog about backend development - especially Go</p>
    </div>
  );
}
