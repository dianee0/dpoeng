import "./social.css";

function Social() {
  return (
    <div className="social">
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
  );
}

export default Social;
