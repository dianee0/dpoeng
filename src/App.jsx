import "./App.css";
import Navbar from "./components/navbar";
import WelcomeText from "./components/welcomeText";
import RightImage from "./components/rightImg";
import Social from "./components/social";
import ScrollIndicator from "./components/scrollIndicator";
import Copyright from "./components/copyright";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Section 1 */}
      <div className="main-content">
        <div className="left-container">
          <WelcomeText />
          <Social />
        </div>
        <div className="right-container">
          <RightImage />
        </div>
      </div>
      {/* Section 2 */}
      <div id="skills">
        <Skills />
      </div>
      {/* Section 3 */}
      <div id="projects">
        <Projects />
      </div>
      {/* Section 4 */}
      <div id="contact">
        <Contact />
      </div>
      {/* Footer */}
      <ScrollIndicator />
      <Copyright />
    </div>
  );
}

export default App;
