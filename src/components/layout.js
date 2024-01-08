import * as React from "react";
// import { Link } from "gatsby";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styles from "../components/styles";
import 'bootstrap/dist/css/bootstrap.css';


library.add(faSquareGithub, faLinkedin);

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Styles.Navigation>
        <Styles.PositionAbsolute>
          <h1 class="m-0">{Styles.siteName}</h1>
        </Styles.PositionAbsolute>
        <Styles.NavLinkSetCenter>
          <Styles.NavLink>
            <Styles.MyLink to="/">Projects</Styles.MyLink>
          </Styles.NavLink>
          <Styles.NavLink>
            <Styles.MyLink to="/resume">Resume</Styles.MyLink>
          </Styles.NavLink>
        </Styles.NavLinkSetCenter>
        <Styles.PositionAbsoluteRight>
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
        </Styles.PositionAbsoluteRight>
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
