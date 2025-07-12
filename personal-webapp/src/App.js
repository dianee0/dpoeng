import "./App.css";
import Navbar from "./components/navbar";
import WelcomeText from "./components/welcomeText";
import RightImage from "./components/rightImg";
import Social from "./components/social";
import ScrollIndicator from "./components/scrollIndicator";
import Copyright from "./components/copyright";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="left-container">
          <WelcomeText />
          <Social />
        </div>
        <div className="right-container">
          <RightImage />
        </div>
      </div>
      <ScrollIndicator />
      <Copyright />
    </div>
  );
}

export default App;
