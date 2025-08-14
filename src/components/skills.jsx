import "./skills.css";
import { useRef, useEffect } from "react";

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
  const smallCardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find which card this is
            const cardIndex = cardsRef.current.findIndex(
              (card) => card === entry.target
            );
            if (cardIndex !== -1) {
              // Animate the main card
              entry.target.classList.add("animate");

              // Animate the small cards with staggered delay
              const startIndex =
                cardIndex * skillCategories[cardIndex].items.length;
              const endIndex =
                startIndex + skillCategories[cardIndex].items.length;

              for (let i = startIndex; i < endIndex; i++) {
                if (smallCardsRef.current[i]) {
                  setTimeout(() => {
                    smallCardsRef.current[i].classList.add("animate");
                  }, (i - startIndex) * 150); // 150ms delay between each small card
                }
              }
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h1>Skills & Technolgies</h1>
      <div className="Cards">
        {skillCategories.map((category, categoryIndex) => (
          <div
            className="card"
            key={category.title}
            ref={(el) => (cardsRef.current[categoryIndex] = el)}
            style={{ "--animation-order": categoryIndex }}
          >
            <div className="container">
              <h4>
                <b>{category.title}</b>
              </h4>
              <hr className="card-separator"></hr>
              {category.items.map((item, itemIndex) => {
                const globalIndex =
                  categoryIndex * skillCategories[categoryIndex].items.length +
                  itemIndex;
                return (
                  <div
                    className="smallCard"
                    key={item}
                    ref={(el) => (smallCardsRef.current[globalIndex] = el)}
                    style={{ "--animation-order": itemIndex }}
                  >
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
