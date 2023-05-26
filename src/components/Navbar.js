import logo from "../images/sftlogo-2white.png";
import { pageLinks, socialLinks } from "../data";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
// import { Hero } from "./Hero.js";

const Navbar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};
export default Navbar;
