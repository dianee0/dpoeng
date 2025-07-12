import "./App.css";
import Navbar from "./components/navbar";
import WelcomeText from "./components/welcomeText";
import RightImage from "./components/rightImg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="left-container">
          <WelcomeText />
        </div>
        <div className="right-container">
          <RightImage />
        </div>
      </div>
    </div>
  );
}

export default App;
