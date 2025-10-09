import "./skills.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div>
      <h1>
        {" "}
        <span className="relative">
          <svg
            viewBox="0 0 503 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // Going in install tailwind
            className="absolute bottom-0 left-0 right-0 top-0"
          >
            <path
              d="M1 84.6448C23.9518 84.6448 69.0323 85.8388 106.351 104.347C121.989 112.103 143.555 112.958 167.557 112.221C199.669 111.235 221.687 81.4467 228.494 73.0002C230.635 70.3437 226.649 68.9604 222.95 68.508C215.12 67.5504 207.986 69.4392 203.341 72.6823C201.186 74.1873 200.636 76.8351 201.764 78.8995C207.669 89.7118 223.002 89.8273 242.361 90.0651C261.881 90.3049 280.204 76.6458 293.28 67.6999C312.871 54.2975 341.416 36.8895 368.151 28.6642C377.637 25.7456 390.055 26.6257 401.999 27.6539C406.633 28.0528 407.976 30.7386 408.601 33.0931C409.874 37.8874 407.437 43.3414 404.696 48.2919C402.203 52.7947 398.024 56.0045 392.803 58.387C389.941 59.6936 386.004 59.4744 383.843 58.1729C381.681 56.8714 381.252 54.0536 381.827 51.5296C382.401 49.0056 383.993 46.8606 386.56 45.3829C399.193 38.1113 414.883 41.1045 443.929 40.4239C466.862 37.2934 474.285 33.1401 482.14 26.2678C487.189 21.4774 494.398 14.0412 501.212 1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
          </svg>
        </span>
        Skills & Technolgies{" "}
      </h1>
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
