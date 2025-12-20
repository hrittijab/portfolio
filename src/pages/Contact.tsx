import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <p className="section-intro">
        Feel free to reach out for opportunities, collaborations, or a quick
        conversation.
      </p>

      <div className="contact-card">
        <div className="contact-item">
          <Mail size={18} />
          <a href="mailto:hrittija2001@gmail.com">
            hrittija2001@gmail.com
          </a>
        </div>

        <div className="contact-item">
          <Phone size={18} />
          <span>+1 (780) 563-2001</span>
        </div>

        <div className="contact-item">
          <MapPin size={18} />
          <span>Edmonton, Alberta, Canada</span>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/hrittijab"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hrittija/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );
}
