import "./navbar.css";
import logo from "../LogoD.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="nav-links">
        <div className="navbar-about">About</div>
        <div className="navbar-projects">Projects</div>
        <div className="navbar-skills">Skills</div>
        <div className="navbar-resume">Resume</div>
        <div className="navbar-contact">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
