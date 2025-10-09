import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./welcomeText.css";

function WelcomeText() {
  useEffect(() => {
    let t1 = gsap.timeline();
    const textLines = document.querySelectorAll(
      ".text1, .text2, .text3, .text4, .text5, .text6"
    );

    textLines.forEach((textLine) => {
      const split = new SplitType(textLine, {
        types: "chars",
      });
    });

    gsap.from(".char", {
      yPercent: -100,
      stagger: 0.01,
    });

    t1.to(".imageRect", {
      clipPath: "circle(133.8% at 5% 5%)",
      scale: 1.1,
      duration: 1.4,
    }),
      t1.to(
        ".hide",
        {
          duration: 1.4,
          y: 0,
          stagger: 0.1,
          ease: "power2",
        },
        "-=1"
      );
  }, []);

  return (
    <div className="welcomeText">
      <div className="mask">
        <h1 id="mainText" className="hide">
          Welcome!
        </h1>
      </div>

      <div className="mask">
        <p id="sub-text" className="hide text1">
          Hi, I’m Diane Poeng.
        </p>
      </div>

      <div className="mask">
        <p id="sub-text" className="hide text2">
          I'm a full-stack software engineer and a
        </p>
      </div>

      <div className="mask">
        <p id="sub-text" className="hide text3">
          recent UC Santa Cruz graduate with
        </p>
      </div>

      <div className="mask">
        <p id="sub-text" className="hide text4">
          a B.S. in Computer Science. I’m passionate
        </p>
      </div>

      <div className="mask">
        <p id="sub-text" className="hide text5">
          about building clean, thoughtful web
        </p>
      </div>

      <div className="mask">
        <p id="sub-text" className="hide text6">
          applications that blend usability with creativity.
        </p>
      </div>
    </div>
  );
}

export default WelcomeText;
