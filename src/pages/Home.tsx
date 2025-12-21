import "../styles/home.css";
import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1>
          Hi, I’m <span className="accent">Hrittija</span> 👋
        </h1>

        <p className="hero-headline">
          I build reliable full-stack applications with clean APIs and modern
          interfaces.
        </p>

        <p className="hero-subtitle">
          Software Developer · Frontend · Backend · Full-Stack
        </p>

        <p className="hero-location">Edmonton, Alberta, Canada</p>

        <div className="hero-actions">
          {/* Absolute routes */}
          <Link to="/projects" className="primary-btn">
            View Projects
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>

          {/* GitHub Pages–safe resume download */}
          <a
            href={`${import.meta.env.BASE_URL}Hrittija_Resume.pdf`}
            download
            className="secondary-btn resume-btn"
          >
            Download Resume
          </a>
        </div>

        <div className="hero-badges">
          <span>CSS Architecture</span>
          <span>Responsive Design</span>
          <span>UI Polish</span>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="image-glow" />
        <img
          src={profileImg}
          alt="Hrittija Bhattacharjee"
          className="hero-image"
        />
      </div>
    </section>
  );
}
