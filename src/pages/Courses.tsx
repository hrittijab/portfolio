import "../styles/courses.css";

export default function Courses() {
  return (
    <>
      <h1>Courses</h1>
      <p className="section-intro">
        Selected coursework completed as part of my Computer Science and
        Mathematics studies at the University of Alberta.
      </p>

      <div className="courses-grid">
        {/* Core CS / Systems */}
        <div className="course-category">
          <h3>Core Computer Science & Systems</h3>
          <ul>
            <li>CMPUT 201 — Practical Programming Methodology</li>
            <li>AUCSC 250 — Computer Organization and Architecture I</li>
            <li>AUCSC 211 — Data Structures and Algorithm</li>
            <li>CMPUT 204 — Algorithms I</li>
            <li>CMPUT 379 — Operating Systems</li>
            <li>CMPUT 301 — Software Engineering</li>
            <li>CMPUT 291 — File and Database Management</li>
          </ul>
        </div>

        {/* AI / ML / NLP */}
        <div className="course-category">
          <h3>Artificial Intelligence & Machine Learning</h3>
          <ul>
            <li>CMPUT 261 — Introduction to Artificial Intelligence</li>
            <li>CMPUT 267 — Machine Learning I</li>
            <li>CMPUT 461 — Natural Language Processing</li>
          </ul>
        </div>

        {/* Web / Distributed / Applied */}
        <div className="course-category">
          <h3>Web, Distributed Systems & Applications</h3>
          <ul>
            <li>CMPUT 404 — Web Applications and Architecture</li>
          </ul>
        </div>

        {/* Math / Theory */}
        <div className="course-category">
          <h3>Mathematics & Theory</h3>
          <ul>
            <li>CMPUT 272 — Formal Systems and Logic</li>
            <li>AUMAT 328 — Cryptography</li>
          </ul>
        </div>

        {/* Foundations & Science */}
        <div className="course-category">
          <h3>Foundations & Science</h3>
          <ul>
            <li>AUCSC 113 — Introduction to Computing Science</li>
            <li>AUSCI 250 — Introduction to Computational Methods</li>
          </ul>
        </div>
      </div>
    </>
  );
}
