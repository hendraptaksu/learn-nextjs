import Link from "next/link";
import classes from "./menu-links.module.css";

export default function MenuLinks() {
  return (
    <nav className={classes["menu-links"]}>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
