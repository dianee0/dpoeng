import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Links Section */}
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a
              href="https://github.com/dianee0"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src="/images/social-icons/Github.png" alt="GitHub" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/diane-poeng-048bb6272/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <img src="/images/social-icons/LinkedIn.png" alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="footer-section">
          <h3>Built With</h3>
          <div className="tech-stack">
            <span className="tech-item">React</span>
            <span className="tech-item">Javascript</span>
            <span className="tech-item">Vite</span>
            <span className="tech-item">GSAP</span>
            <span className="tech-item">Motion</span>
            <span className="tech-item">Tailwind CSS</span>
          </div>
        </div>

        {/* Credits Section */}
        <div className="footer-section">
          <h3>Credits</h3>
          <div className="credits">
            <p className="credit-item">
              Icons from{" "}
              <a
                href="https://devicon.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Devicon
              </a>
            </p>
            <p className="credit-item">
              Animations powered by{" "}
              <a
                href="https://greensock.com/gsap/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GSAP
              </a>
            </p>
            <p className="credit-item">
              Sound effects from{" "}
              <a
                href="https://sfxr.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sfxr
              </a>
            </p>
            <p className="credit-item">
              Hosted on{" "}
              <a
                href="https://netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {currentYear} Diane Poeng. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
