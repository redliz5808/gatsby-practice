import styled from "styled-components";
import { Link } from "gatsby";

export const siteName = "Elizabeth W. Franklin";
export const primaryColor = "#763ad5";
export const primaryHover = "#b596e8";
export const primaryContrast = "#FFF";
export const accentColor = "#8af3ff";
export const secondaryColor = "#18a999";
export const secondaryHover = "#109648";
export const secondaryContrast = "#FFF";
export const primaryFont = "#000";

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: secondaryColor;
  font-size: 1rem;
`;

export const NavLinkSet = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

export const NavLink = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 0 0.5rem;
`;

export const MyLink = styled(Link)`
  color: primaryFont;

  &:hover {
    text-decoration: none;
    color: secondaryHover;
  }
`;

export const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

export const headingAccentStyles = {
  color: primaryContrast,
  backgroundColor: primaryColor,
};
