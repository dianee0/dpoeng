import { useEffect } from "react";
import "./social.css";

function Social() {
  useEffect(() => {
    let t2 = gsap.timeline();
    t2.to(
      ".hide",
      {
        duration: 1.4,
        y: 0,
        stagger: 0.1,
        ease: "bounce.out",
      },
      "-=1"
    );
  });
  return (
    <div className="social">
      <div className="hide mask">
        <a
          href="https://github.com/dianee0"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src="/images/social-icons/Github.png"
            alt="GitHub"
            className="social-icon"
          />
        </a>
      </div>
      <div className="hide mask">
        <a
          href="https://www.linkedin.com/in/diane-poeng-048bb6272/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src="/images/social-icons/LinkedIn.png"
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
      </div>
      <div className="hide mask">
        <a
          href="mailto:dpoeng0@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img
            src="/images/social-icons/Mail.png"
            alt="Email"
            className="social-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Social;
