import React, { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
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
      <svg viewBox="0 0 557 435" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{
            duration: 1.95,
            ease: "easeInOut",
          }}
          d="M506.083 4.24341C454.485 4.2434 215.439 12.3726 76.11 27.8794C24.8829 52.4197 654.185 -8.40822 464.236 36.0085C358.118 60.8228 253.399 46.5579 144.033 46.4422C100.242 46.3959 43.5001 40.5 66.5001 53C170.77 102.412 377.787 49.6595 486.489 46.4422C547.688 44.6309 508.11 75.5253 472.888 80.3142C405.317 89.5016 45.2776 74.1928 51.9089 91.3326C69.5329 136.885 507.414 68.7043 506.083 100.735C504.321 143.143 85.708 101.234 51.9089 145.06C35.5774 166.237 499.394 110.009 536.981 133.993C543.874 138.391 1.01557 167.741 22.7064 209.533C27.98 219.694 166.677 192.067 186.452 189C248.494 179.377 507.857 150.577 551.959 182C560.328 187.963 97.4369 223.793 36.0406 231.142C2.9535 244.481 -17.335 251.894 144.033 247.5C345.743 242.008 528.41 200.608 536.981 226.108C543.837 246.509 191.444 281.637 17.1626 285.037C-7.54366 285.519 -8.30822 306.973 116.633 305.404C241.575 303.835 419.881 287.522 500.019 285.037C539.177 283.823 587.897 316 500.019 316C404.698 316 143.715 336.924 22.7064 332.87C10.0001 332.87 -5.92863 341.8 22.7064 355C51.3413 368.2 489.5 340.5 500.019 347C530 362 509.47 366.5 486.489 371.5L22.7064 392C11.0001 392 -0.655712 396.7 22.7063 401.5C46.0684 406.3 350.649 429.333 500.019 430.5"
          stroke="#829072"
          strokeWidth="30"
          strokeLinecap="round"
        />
      </svg>

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
