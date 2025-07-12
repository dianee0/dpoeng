import { useEffect, useState } from "react";
import frame1 from "./matchaFrames/frame1.png";
import frame2 from "./matchaFrames/frame2.png";
import frame3 from "./matchaFrames/frame3.png";
import frame4 from "./matchaFrames/frame4.png";
import frame5 from "./matchaFrames/frame5.png";
import "./animatedLogo.css";

const frames = [frame1, frame2, frame3, frame4, frame5];

function AnimatedLogo() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 200); // 200ms per frame
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-logo">
      <img
        src={frames[frame]}
        alt="Animated Logo"
        className="static-frame"
        width={62}
        height={94}
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
}

export default AnimatedLogo;
