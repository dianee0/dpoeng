import "./navbar.css";
import AnimatedLogo from "./animatedLogo";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
    // opens resume in new tab
    window.open("/resume.pdf", "_blank");
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
        <div className="navbar-resume" onClick={openResume}>
          Resume
        </div>
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
