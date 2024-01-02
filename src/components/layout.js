import * as React from "react";
import { Link } from "gatsby";
import * as Styles from "../components/styles";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Styles.Navigation>
        <h1>{Styles.siteName}</h1>
        <Styles.NavLinkSet>
          <Styles.NavLink>
            <Styles.MyLink to="/">Projects</Styles.MyLink>
          </Styles.NavLink>
          <Styles.NavLink>
            <Styles.MyLink to="/resume">Resume</Styles.MyLink>
          </Styles.NavLink>
        </Styles.NavLinkSet>
      </Styles.Navigation>
      <main>
        <h2>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
