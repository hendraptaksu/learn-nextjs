import Logo from "./logo";
import MenuLinks from "./menu-links";

import classes from "./navigation-bar.module.css";

export default function NavigationBar() {
  return (
    <div className={classes["navigation-bar"]}>
      <Logo />
      <MenuLinks />
    </div>
  );
}
