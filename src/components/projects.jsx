import React, { useState, useEffect } from "react";
import "./projects.css";

function Projects() {
  // Array of images for the Trading Card Management App
  const tradingCardImages = [
    "./images/website-photos/website5.png",
    "./images/website-photos/website6.png",
    "./images/website-photos/website7.png",
    "./images/website-photos/website8.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Auto-cycle images every 8 seconds with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % tradingCardImages.length);
        setFade(false); // Fade in new image
      }, 700); // Match this to your CSS transition duration (700ms)
    }, 8000); // 8 seconds
    return () => clearInterval(interval);
  }, [tradingCardImages.length]);

  // Handler to go to the next image
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % tradingCardImages.length);
  };

  // Handler to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + tradingCardImages.length) % tradingCardImages.length
    );
  };

  return (
    <div>
      <h1>Projects</h1>
      <div className="project-cards">
        <div className="project-card">
          <h2>UCSC Economic Trading Using GenAI App</h2>
          <p>
            An application for UCSC researchers to study trader behavior when
            given access to generative AI and it’s effect on market dynamics.
            Users input custom trading strategies, which are interpreted by a
            large language model (LLM) and executed in a continuous double
            auction market. The LLM interacts with the market to generate and
            run executable code based on the user’s strategy. A core focus of
            the project has been ensure that the LLM reliably produces accurate
            code aligned with the user’s intent through prompt engineering.
          </p>
          <div className="image-carousel">
            <img src="./images/website-photos/website9.png"></img>
          </div>
        </div>
        <div className="project-card">
          <h2>Trading Card Management App</h2>
          <p>
            TCG Tracker is a full-stack web application that helps Pokémon card
            collectors evaluate card value, grading potential, and collection
            profitability. Users can search for cards, upload images for
            recognition using Google Cloud Vision, and view real-time price
            estimates via the eBay and Pokémon TCG APIs. Built with React,
            Node.js, and Firebase, the app also features collection management
            tools, visual analytics, and was developed using Scrum methodology
            with a focus on collaboration and iterative design.
          </p>
          <div className="image-carousel">
            <img
              src={tradingCardImages[currentIndex]}
              alt="Trading Card App"
              className={fade ? "fade" : ""}
            />
          </div>
        </div>
        <div className="project-card">
          <h2>Urban Rodent Rush</h2>
          <p>
            Urban Rodent Rush is a 2D side-scrolling platformer developed in
            GDevelop, where players control a rat navigating the chaotic streets
            of New York City. Players collect cheese and coins while dodging
            hazards like traps, cars, and cats. The game features pixel art
            visuals and rewards players with bonus points for completing levels
            with hearts remaining, adding a layer of strategy and replayability.
          </p>
          <div className="image-carousel">
            <img src="./images/website-photos/website4.png"></img>
          </div>
        </div>
        <div className="project-card">
          <h2>First-Person Exploration Application </h2>
          <p>
            An immersive 3D exploration app built with Three.js that allows
            users to navigate a fully furnished room. Users can pan around, zoom
            in and out, and toggle individual lights in different rooms through
            an interactive control panel. The app features animated objects,
            dynamic lighting, and textured models, with a day/night mode that
            changes the lighting atmosphere. Designed to showcase advanced
            interactive design using WebGL.
          </p>
          <div className="image-carousel">
            <img src="../images/website-photos/website0.png"></img>
          </div>
        </div>
        <div className="project-card">
          <h2>S.L.U.G. Project</h2>
          <p>
            {" "}
            The Spectacular Landmark Understanding and Guidance (S.L.U.G.)
            Project is an interactive web experience designed to highlight
            hidden and iconic landmarks around the UC Santa Cruz campus. Through
            a custom hand-illustrated map, users can explore various nature
            spots, student hangouts, and unofficial campus lore by clicking or
            hovering on illustrated markers. Each point links to a dedicated
            page with photos, location descriptions, coordinates, and stories
            behind the site. The goal is to encourage exploration, appreciation
            of campus culture, and fun outdoor engagement with UCSC’s unique
            environment.
          </p>
          <div className="image-carousel">
            <img src="./images/website-photos/website1.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
