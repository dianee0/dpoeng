import "./navbar.css";
import AnimatedLogo from "./animatedLogo";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="animated-logo" onClick={() => scrollToSection("home")}>
        <AnimatedLogo />
      </div>
      <div className="nav-links">
        <div
          className="navbar-skills"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </div>
        <div
          className="navbar-projects"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </div>
        <div className="navbar-resume">Resume</div>
        <div
          className="navbar-contact"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </div>
      </div>
    </div>
  );
}

export default Navbar;
