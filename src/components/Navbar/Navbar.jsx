import { NavbarContainer, NavbarTitle, NavbarTabs } from "./styled/styled";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <NavbarContainer>
      <NavbarTitle>RCP data AI Decision</NavbarTitle>
      <NavbarTabs>
        <NavLink to="/">AI Analysis</NavLink>
        <NavLink to="/analysis">Result</NavLink>
        <NavLink to="/history">History</NavLink>
      </NavbarTabs>
    </NavbarContainer>
  );
}
