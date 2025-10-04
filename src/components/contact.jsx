import "./contact.css";
import { useState, useEffect, useRef } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered delays for form elements
            if (entry.target.classList.contains("form-heading")) {
              setTimeout(() => entry.target.classList.add("animate"), 600);
            } else if (entry.target.tagName === "LABEL") {
              const index = inputRefs.current.findIndex(
                (ref) => ref === entry.target
              );
              setTimeout(
                () => entry.target.classList.add("animate"),
                800 + index * 100
              );
            } else if (
              entry.target.tagName === "INPUT" ||
              entry.target.tagName === "TEXTAREA"
            ) {
              const index = inputRefs.current.findIndex(
                (ref) => ref === entry.target
              );
              setTimeout(
                () => entry.target.classList.add("animate"),
                900 + index * 100
              );
            } else if (entry.target.id === "send-message") {
              setTimeout(() => entry.target.classList.add("animate"), 800);
            } else {
              entry.target.classList.add("animate");
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all elements
    const elements = [
      headingRef.current,
      imageRef.current,
      formRef.current,
      ...inputRefs.current,
    ];
    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };
  return (
    <div>
      <h1 ref={headingRef} className="contact-heading">
        Get In Touch
      </h1>
      <div className="contact-section">
        <div className="picture-side" ref={imageRef}>
          <img src="/images/imgRectangle.png" alt="Contact" />
        </div>
        <form
          ref={formRef}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="message-container"
          onSubmit={handleSubmit}
        >
          {/* hidden input for netlify */}
          <input type="hidden" name="form-name" value="contact" />
          {/* honeypot field to prevent spam */}
          <div style={{ display: "none" }}>
            <input name="bot-field" />
          </div>

          <h2
            ref={(el) => (inputRefs.current[0] = el)}
            className="form-heading"
          >
            Send a message
          </h2>
          <div className="input-container">
            <label htmlFor="fname" ref={(el) => (inputRefs.current[1] = el)}>
              Name
            </label>
            <input
              ref={(el) => (inputRefs.current[2] = el)}
              type="text"
              name="firstname"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email" ref={(el) => (inputRefs.current[3] = el)}>
              Email
            </label>
            <input
              ref={(el) => (inputRefs.current[4] = el)}
              className="email"
              type="email"
              name="email"
              placeholder="youremail@example.com"
              required
            />

            <label htmlFor="message" ref={(el) => (inputRefs.current[5] = el)}>
              Message
            </label>
            <textarea
              ref={(el) => (inputRefs.current[6] = el)}
              className="message"
              name="message"
              placeholder="Your message"
              required
            ></textarea>

            <button
              ref={(el) => (inputRefs.current[7] = el)}
              type="submit"
              id="send-message"
            >
              Submit Message
            </button>

            {formStatus === "sending" && (
              <p style={{ color: "#718856", marginTop: "10px" }}>
                Sending message...
              </p>
            )}
            {formStatus === "success" && (
              <p style={{ color: "#718856", marginTop: "10px" }}>
                Message sent successfully!
              </p>
            )}
            {formStatus === "error" && (
              <p style={{ color: "#d32f2f", marginTop: "10px" }}>
                Failed to send message. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
