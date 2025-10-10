import "./contact.css";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formStatus, setFormStatus] = useState("");
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const formRef = useRef(null);
  const inputRefs = useRef([]);

  // GSAP scroll-triggered animations
  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate image (slide from left)
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate form container (slide from right)
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate form elements with stagger
    const formElements = inputRefs.current.filter((el) => el !== null);
    if (formElements.length > 0) {
      gsap.fromTo(
        formElements,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
