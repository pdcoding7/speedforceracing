import logo from "../images/sftlogo-2white.png";
import { pageLinks, socialLinks } from "../data";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--clr-black);
  box-shadow: var(--dark-shadow);
  z-index: 2;
  height: 4rem;
  display: flex;
  align-items: center;
  border-bottom: 0.2rem solid var(--clr-white);
  border-top: 0.2rem solid var(--clr-white);
  max-height: 4rem;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Router>
        <Sidebar />
      </Router>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Speed Force Racing" />
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledNav>
  );
};
export default Navbar;
