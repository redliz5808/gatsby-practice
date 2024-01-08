import styled from "styled-components";
import { Link } from "gatsby";

// ---------------------------------------- ---------
// ---------------------------------------- CONSTANTS
// ---------------------------------------- ---------

export const siteName = "Elizabeth W. Franklin";
export const primaryColor = "#763ad5";
export const primaryHover = "#b596e8";
export const primaryContrast = "#FFF";
export const accentColor = "#8af3ff";
export const secondaryColor = "#18a999";
export const secondaryHover = "#109648";
export const secondaryContrast = "#FFF";
export const primaryFont = "#000";

// ---------------------------------------- ---------------
// ---------------------------------------- NAVIGATION MENU
// ---------------------------------------- ---------------

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 1rem;
  color: ${secondaryColor};
  font-size: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);
`;

export const PositionAbsolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const PositionAbsoluteRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

export const NavLinkSet = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

export const NavLinkSetStart = styled(NavLinkSet)`
  justify-content: flex-start;
`;

export const NavLinkSetCenter = styled(NavLinkSet)`
  justify-content: center;
`;

export const NavLinkSetEnd = styled(NavLinkSet)`
  justify-content: flex-end;
`;

export const NavLink = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 0 0.5rem;
`;

export const IconLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyLink = styled(Link)`
  color: ${primaryFont};
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    text-decoration: none;
    color: ${secondaryColor};
  }
`;

export const MyHyperlink = styled.a`
  color: ${primaryFont};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${primaryColor};
    height: 2.25rem;
    width: 2rem;

    &:hover {
      text-decoration: none;
      color: ${primaryHover};
    }
  }

  &:hover {
    text-decoration: none;
    color: ${primaryHover};
  }
`;

// ---------------------------------------- ------------
// ---------------------------------------- MAIN CONTENT
// ---------------------------------------- ------------

export const ProjectsH2 = styled.h2`
  text-align: center;
  font-family: "Arial, sans-serif";
  font-size: 6rem;
  color: ${primaryHover};
  text-transform: uppercase;
  margin: 2rem 0;
`;
