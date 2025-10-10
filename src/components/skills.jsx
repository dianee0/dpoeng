import "./skills.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages",
    items: ["Javascript", "Python", "HTML", "CSS", "C", "C++"],
  },
  { title: "Frontend", items: ["React", "Three.js", "Bootstrap", "Figma"] },
  {
    title: "Backend",
    items: ["Node.js", "Firebase", "SQLite", "Valkey/Redis"],
  },
  {
    title: "Tools",
    items: ["Git", "Linux", "Docker", "Google Cloud Vision API"],
  },
];

function Skills() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate each card and its small cards when it comes into view
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const smallCards = card.querySelectorAll(".smallCard");

      // Create a timeline for this card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate the main card
      tl.fromTo(
        card,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Animate small cards with stagger
      tl.fromTo(
        smallCards,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4" // Start 0.4s before the card animation ends
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="skills-container">
      <div className="flex justify-center items-center w-full mb-8">
        <h1
          className="relative"
          style={{
            display: "inline-block",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          Skills & Technologies
          <svg
            viewBox="0 0 627 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 pointer-events-none"
            style={{
              top: "95%",
              right: "15%",
              // transform: "translateY(-50%)",
              width: "100%",
              height: "auto",
              opacity: "1",
              zIndex: -1,
            }}
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M1.2494 50.9878C39.7494 27.2911 120.477 56.6504 159 72.5C175 79.0829 198.467 86.7534 222.249 90.0787C254.067 94.5274 301 67.0986 309.136 59.9223C311.694 57.6653 307.999 55.629 304.43 54.5588C296.874 52.2933 289.523 52.9509 284.397 55.3634C282.019 56.4831 281.03 59.0001 281.793 61.2252C285.789 72.8792 300.882 75.581 319.923 79.0829C339.122 82.6139 359.489 72.2435 373.887 65.6331C395.458 55.7296 426.532 43.3894 454.272 39.7947C464.115 38.5192 476.206 41.4825 487.805 44.5119C492.305 45.6874 493 46.9999 494.5 49.4999C497.052 53.7534 490.518 60.8923 486.98 65.3091C483.762 69.3264 479.102 71.7848 473.554 73.252C470.512 74.0567 466.668 73.1761 464.758 71.5285C462.848 69.8809 462.9 67.0311 463.892 64.6403C464.885 62.2494 466.816 60.404 469.596 59.3808C483.274 54.3456 498.234 59.9442 526.978 64.176C550.111 64.9612 558.128 62.1203 567.03 56.6724C572.815 52.803 589.709 40.0351 598.627 28.3311C615.5 11 623.5 0.999993 603.5 8.49997C597.5 1.99999 595 -1.50007 593 4.49993C591.28 9.66132 604.881 31.7573 611.5 40.5C614.668 42.7335 621.017 43.3255 625.691 42.0968"
              stroke="#E1A0A0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          </svg>
        </h1>
      </div>
      <div className="Cards">
        {skillCategories.map((category, categoryIndex) => (
          <div
            className="card"
            key={category.title}
            ref={(el) => (cardsRef.current[categoryIndex] = el)}
          >
            <div className="container">
              <h4>
                <b>{category.title}</b>
              </h4>
              <hr className="card-separator"></hr>
              {category.items.map((item) => (
                <div className="smallCard" key={item}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
