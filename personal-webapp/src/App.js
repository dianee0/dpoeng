import "./App.css";
import Navbar from "./components/navbar";
import WelcomeText from "./components/welcomeText";
import RightImage from "./components/rightImg";
import Social from "./components/social";

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
    </div>
  );
}

export default App;
