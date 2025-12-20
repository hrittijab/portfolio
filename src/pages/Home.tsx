import "../styles/home.css";
import profileImg from "../assets/profile.jpg";

export default function Home() {
  return (
    <section className="home-hero">
      {/* LEFT: Text content */}
      <div className="hero-content">
        <h1>
          Hi, I’m <span className="accent">Hrittija</span> 👋
        </h1>

        {/* Headline (IMPORTANT for CSS flex) */}
        <p className="hero-headline">
          I build reliable full-stack applications with clean APIs and modern
          interfaces.
        </p>

        <p className="hero-subtitle">
          Software Developer · Frontend · Backend · Full-Stack
        </p>

        <p className="hero-location">Edmonton, Alberta, Canada</p>

        <div className="hero-actions">
          <a href="/projects" className="primary-btn">
            View Projects
          </a>
          <a href="/contact" className="secondary-btn">
            Contact Me
          </a>
          <a
            href="/Hrittija_Resume.pdf"
            download
            className="secondary-btn resume-btn"
          >
            Download Resume
          </a>
        </div>

        {/* CSS flex badges */}
        <div className="hero-badges">
          <span>CSS Architecture</span>
          <span>Responsive Design</span>
          <span>UI Polish</span>
        </div>
      </div>

      {/* RIGHT: Image */}
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
