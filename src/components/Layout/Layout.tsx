import React, { ReactNode } from "react";
import Intro from "../Intro";
import NavBar from "../NavBar";
import "./Layout.css";
import "./../../globalStyle.css";

const Layout = ({
  isNavBar = true,
  children,
}: {
  isNavBar?: boolean;
  children: ReactNode;
}) => (
  <React.StrictMode>
    <div className="layout">
      <Intro />
      {isNavBar && <NavBar />}
      {children}
    </div>
  </React.StrictMode>
);

export default Layout;
