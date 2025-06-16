import { NavbarContainer, NavbarTitle, NavbarTabs } from "./styled/styled";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <NavbarContainer>
      <NavbarTitle><NavLink to="/">RCP data AI Decision</NavLink></NavbarTitle>
      <NavbarTabs>
        <NavLink to="/">AI Analysis</NavLink>
        <NavLink to="/result">Result</NavLink>
        <NavLink to="/history">History</NavLink>
      </NavbarTabs>
    </NavbarContainer>
  );
}
