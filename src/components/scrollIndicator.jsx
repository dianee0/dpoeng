import React, { useState, useEffect } from "react";
import "./scrollIndicator.css"; // or wherever your styles are

function ScrollIndicator() {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user is at the bottom (with a small threshold)
      const threshold = 10;
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - threshold;
      setAtBottom(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="scroll-arrow">
        <div className={atBottom ? "arrow-up" : "arrow-down"}></div>
      </div>
      <p className="scroll-text">{atBottom ? "Back to top" : "Scroll down"}</p>
    </div>
  );
}

export default ScrollIndicator;
