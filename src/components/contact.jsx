import "./contact.css";

function Contact() {
  return (
    <div>
      <h1>Get In Touch</h1>
      <div className="contact-section">
        <div className="picture-side">
          <img src="./images/imgRectangle.png" alt="Contact" />
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="message-container"
        >
          {/* hidden input for netlify */}
          <input type="hidden" name="form-name" value="contact" />

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
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
