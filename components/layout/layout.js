import { Fragment } from "react";
import NavigationBar from "./navigation-bar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <NavigationBar />
      <main>{children}</main>
    </Fragment>
  );
}
