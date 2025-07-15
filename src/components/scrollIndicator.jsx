import "./scrollIndicator.css";

function ScrollIndicator() {
  return (
    <div className="scroll-indicator">
      <div className="scroll-arrow">
        <div className="arrow-down"></div>
      </div>
      <p className="scroll-text">Scroll down</p>
    </div>
  );
}

export default ScrollIndicator;
