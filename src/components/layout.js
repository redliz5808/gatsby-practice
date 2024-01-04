import * as React from "react";
// import { Link } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styles from "../components/styles";

library.add(faSquareGithub, faLinkedin);

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
        <Styles.NavLinkSet>
          <Styles.IconLink>
            <Styles.MyHyperlink href="https://github.com/redliz5808">
              {/* <FontAwesomeIcon icon={faGithub} /> */}
              <FontAwesomeIcon icon={faSquareGithub} />
            </Styles.MyHyperlink>
          </Styles.IconLink>
          <Styles.IconLink>
            <Styles.MyHyperlink href="https://www.linkedin.com/in/elizabethwfranklin/">
            {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
            <FontAwesomeIcon icon={faLinkedin} />
            </Styles.MyHyperlink>
          </Styles.IconLink>
        </Styles.NavLinkSet>
      </Styles.Navigation>
      <main>
        <Styles.ProjectsH2>{pageTitle}</Styles.ProjectsH2>
        {children}
        <i class="fa-brands fa-github"></i>
      </main>
    </div>
  );
};

export default Layout;
