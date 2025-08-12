import "./contact.css";
import { useState } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

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
      <h1>Get In Touch</h1>
      <div className="contact-section">
        <div className="picture-side">
          <img src="/images/imgRectangle.png" alt="Contact" />
        </div>
        <form
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

          <h2>Send a message</h2>
          <div className="input-container">
            <label htmlFor="fname">Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="youremail@example.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              className="message"
              name="message"
              placeholder="Your message"
              required
            ></textarea>

            <button type="submit" id="send-message">
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
