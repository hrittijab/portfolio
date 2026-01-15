import "../styles/work.css";
import sellsmart from "../assets/sellsmart.jpeg";

export default function Work() {
  return (
    <>
      <h1>Work Experience</h1>
      <p className="section-intro">
        Professional experience across internships, freelance work, and early
        technical training roles.
      </p>

      <div className="work-list">
        {/* Internship */}
        <div className="work-card">
          <div className="work-header">
            <h3>Software Development Intern</h3>
            <span>Spectrum Engineering Consortium Ltd.</span>
          </div>

          <p className="work-meta">
            June 2025 – August 2025 · Backend / Full-Stack Developer (e-Government ERP)
          </p>

          <ul className="work-points">
            <li>
              Enhanced the Inventory and Asset module of the Bangladesh
              e-Government ERP (GRP) system used by public-sector organizations.
            </li>
            <li>
              Worked within a microservices-based architecture using Spring Boot
              and Spring Cloud (Eureka, Config Server).
            </li>
            <li>
              Integrated REST APIs with PostgreSQL and optimized database queries
              to improve response times and system performance.
            </li>
            <li>
              Collaborated with a large cross-functional development team to
              ensure seamless integration with other ERP modules.
            </li>
          </ul>

          <div className="work-tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Spring Cloud</span>
            <span>PostgreSQL</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Freelance Software Developer – SellSmart */}
        <div className="work-card">
          <div className="work-header">
            <h3>Freelance Software Developer</h3>
            <span>SellSmart (Production Web Application)</span>
          </div>

          <p className="work-meta">
            February 2025 – Present · Backend / Full-Stack
          </p>

          <ul className="work-points">
            <li>
              Designed and delivered <strong>SellSmart</strong>, a production sales
              and inventory management system used by multiple small businesses
              to manage real inventory and daily transactions.
            </li>
            <li>
              Implemented secure backend services using <strong>Spring Boot</strong>{" "}
              and stateless <strong>JWT authentication</strong> to protect
              business data.
            </li>
            <li>
              Built inventory, sales, and damaged-goods workflows backed by{" "}
              <strong>Firebase Firestore</strong>, handling 500+ real inventory
              and sales transactions per month.
            </li>
            <li>
              Collaborated directly with business owners to translate real-world
              requirements into backend features and UI flows.
            </li>
          </ul>

          <div className="work-actions">
          <a
            href="https://www.youtube.com/watch?v=2F_hDw_A4zg"
            target="_blank"
            rel="noreferrer"
            className="work-link"
          >
             Demo
          </a>

          <a
            href="https://github.com/hrittijab/sellsmart-frontend"
            target="_blank"
            rel="noreferrer"
            className="work-link secondary"
          >
            Frontend Code
          </a>

          <a
            href="https://github.com/hrittijab/sellsmart-backend"
            target="_blank"
            rel="noreferrer"
            className="work-link secondary"
          >
            Backend Code
          </a>
        </div>


          <div className="work-image">
            <img src={sellsmart} alt="SellSmart demo screenshot" />
          </div>

          <div className="work-tech">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>Firebase Firestore</span>
            <span>JWT</span>
          </div>
        </div>

        {/* Freelance Web Developer */}
        <div className="work-card">
          <div className="work-header">
            <h3>Freelance Web Developer</h3>
            <span>Self-Employed</span>
          </div>

          <p className="work-meta">February 2025 – Present</p>

          <ul className="work-points">
            <li>
              Designed and developed responsive websites for small business
              clients to improve online presence and usability.
            </li>
            <li>
              Customized branding, layouts, and content based on client
              requirements and feedback.
            </li>
            <li>
              Deployed production-ready websites using Netlify with performance
              and mobile responsiveness in mind.
            </li>
          </ul>

          <div className="work-actions">
            <a
              href="https://www.shovonaenterprise.com/"
              target="_blank"
              rel="noreferrer"
              className="work-link"
            >
              🌐 View Website by Hrittija
            </a>
            <a
              href="https://onroadgarage.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="work-link secondary"
            >
              🌐 View Another Website
            </a>
          </div>

          <div className="work-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Bootstrap</span>
            <span>Netlify</span>
          </div>
        </div>

        {/* Trainee */}
        <div className="work-card">
          <div className="work-header">
            <h3>Project Management Trainee</h3>
            <span>Technical Training Program</span>
          </div>

          <p className="work-meta">June 2019</p>

          <ul className="work-points">
            <li>
              Built foundational web development skills by creating UI
              components using HTML, CSS, JavaScript, React, and Angular.
            </li>
            <li>
              Gained exposure to cross-browser testing and quality assurance
              using Selenium.
            </li>
          </ul>

          <div className="work-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Angular</span>
            <span>Selenium</span>
          </div>
        </div>
      </div>
    </>
  );
}
