import "../styles/volunteering.css";

export default function Volunteering() {
  return (
    <>
      <h1>Volunteering</h1>
      <p className="section-intro">
        Community involvement and volunteer roles focused on education,
        inclusion, and student engagement.
      </p>

      <div className="volunteer-list">
        {/* Jaago Foundation */}
        <div className="volunteer-card">
          <h3>Jaago Foundation — Bangladesh</h3>
          <p className="volunteer-role">Volunteer English Tutor</p>
          <p className="volunteer-description">
            Tutored underprivileged children in spoken English by designing
            interactive lesson plans and building confidence in communication.
            Also provided emotional support to help students overcome learning
            barriers.
          </p>
        </div>

        {/* EDAUA */}
        <div className="volunteer-card">
          <h3>Eating Disorder Awareness University of Alberta (EDAUA)</h3>
          <p className="volunteer-role">Volunteer</p>
          <p className="volunteer-description">
            Supported awareness events by assisting with outreach, organizing
            activities, and promoting mental health education on campus.
          </p>
        </div>

        {/* C3 STEAM */}
        <div className="volunteer-card">
          <h3>Canada CyberSTEAM Challenge (C3 STEAM)</h3>
          <p className="volunteer-role">
            Recruitment Committee Member · January 2025 – Present
          </p>
          <p className="volunteer-description">
            Help promote youth engagement in interdisciplinary STEM education
            across Canada by supporting recruitment initiatives and outreach
            efforts.
          </p>
        </div>

        {/* natHACK */}
        <div className="volunteer-card">
          <h3>NeurAlbertaTech (natHACK)</h3>
          <p className="volunteer-role">Volunteer · 2023</p>
          <p className="volunteer-description">
            Volunteered in the food and beverages department during the
            hackathon, supporting logistics and hospitality for participants
            and organizers.
          </p>
        </div>

        {/* BIPOC & Allies */}
        <div className="volunteer-card">
          <h3>BIPOC and Allies Student Association — University of Alberta</h3>
          <p className="volunteer-role">Student Mentor</p>
          <p className="volunteer-description">
            Actively mentor BIPOC students by promoting community engagement,
            academic success, and inclusivity within the university community.
          </p>
        </div>
      </div>
    </>
  );
}
