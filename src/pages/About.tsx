import "../styles/about.css";

export default function About() {
  return (
    <>
      <h1>About</h1>

      {/* Friendly intro */}
      <p className="about-intro">
        Hey! Welcome to my portfolio 👋  
        I’m a recent Computer Science graduate from the University of Alberta,
        and this space is a snapshot of the projects I’ve built, the skills I’ve
        developed, and the kind of work I enjoy doing.
      </p>

      <p className="about-intro">
        I graduated in December 2025 with a major in Computer Science and a minor
        in Mathematics, and I’m currently looking for opportunities where I can
        learn, grow, and contribute as a software developer.
      </p>

      {/* Roles */}
      <section className="about-section">
        <h3>What I’m Looking For</h3>
        <div className="role-chips">
          <span>Software Developer</span>
          <span>Frontend Developer</span>
          <span>Backend Engineer</span>
          <span>Full-Stack Developer</span>
        </div>
      </section>

      {/* Why me */}
      <section className="about-section">
        <h3>A Bit About How I Work</h3>
        <div className="strength-grid">
          <div className="strength-card">
            <h4>I Learn Fast</h4>
            <p>
              I adapt quickly to new tools and codebases, which helps me become
              productive early and keep onboarding time low.
            </p>
          </div>

          <div className="strength-card">
            <h4>I Like Seeing the Big Picture</h4>
            <p>
              I’ve worked across frontend, backend, and cloud systems, so I
              enjoy understanding how different pieces fit together.
            </p>
          </div>

          <div className="strength-card">
            <h4>I Care About Clean Code</h4>
            <p>
              I value readable, maintainable code and enjoy working in teams
              that prioritize code reviews and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Tech focus */}
      <section className="about-section">
        <h3>What I’ve Been Building</h3>
        <p className="about-focus">
          Recently, I’ve been building full-stack and cloud-based applications
          using technologies like <strong>React</strong>,{" "}
          <strong>Java</strong>, <strong>Spring Boot</strong>, and{" "}
          <strong>AWS</strong>. I’m especially interested in working on systems
          that solve real problems and scale beyond toy examples.
        </p>
      </section>
    </>
  );
}
