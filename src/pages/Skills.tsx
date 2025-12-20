import "../styles/skills.css";

export default function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <p className="section-intro">
        Technologies, tools, and practices I’ve used across academic, personal,
        and professional projects.
      </p>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skill-tags">
            <span>Java</span>
            <span>Python</span>
            <span>C</span>
            <span>C++</span>
            <span>JavaScript</span>
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>React Native</span>
            <span>Angular</span>
            <span>Node.js</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-category">
          <h3>Backend & APIs</h3>
          <div className="skill-tags">
            <span>Spring Boot</span>
            <span>Django</span>
            <span>Django REST Framework</span>
            <span>REST APIs</span>
            <span>JWT</span>
            <span>BCrypt</span>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skill-tags">
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>DynamoDB</span>
            <span>Firebase</span>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className="skill-category">
          <h3>Cloud & DevOps</h3>
          <div className="skill-tags">
            <span>AWS EC2</span>
            <span>AWS S3</span>
            <span>AWS Lambda</span>
            <span>AWS IAM</span>
            <span>AWS RDS</span>
            <span>Docker</span>
            <span>Kubernetes</span>
            <span>CI/CD</span>
          </div>
        </div>

        {/* Testing & Practices */}
        <div className="skill-category">
          <h3>Testing & Software Practices</h3>
          <div className="skill-tags">
            <span>JUnit</span>
            <span>Mockito</span>
            <span>Selenium</span>
            <span>Espresso</span>
            <span>PyTest</span>
            <span>TDD</span>
            <span>MVC</span>
            <span>SDLC</span>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Linux (Ubuntu / WSL)</span>
            <span>IntelliJ</span>
            <span>VS Code</span>
            <span>Postman</span>
            <span>Heroku</span>
          </div>
        </div>

        {/* Design & Documentation */}
        <div className="skill-category">
          <h3>Design & Documentation</h3>
          <div className="skill-tags">
            <span>UML (Class Diagrams)</span>
            <span>UML (Sequence Diagrams)</span>
            <span>UML (Use Case Diagrams)</span>
          </div>
        </div>
      </div>
    </>
  );
}
