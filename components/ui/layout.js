import Link from "next/link";
import classes from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={classes.layout}>
      <nav className={classes.nav}>
        <div>
          <Link href="/" className={classes.brand}>
            NextEvents
          </Link>
          <ul>
            <li>
              <Link href="/events" className={classes.linkItem}>
                Browse All Events
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
