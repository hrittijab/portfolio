import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";

import skilllinkImg from "../assets/skilllink.jpeg";
import socialImg from "../assets/socialdistribution.jpeg";
import taskmasterImg from "../assets/taskmaster.jpeg";
import eventImg from "../assets/event.png";

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p style={{ color: "var(--muted)", maxWidth: 750 }}>
        A selection of projects where I focused on system design, scalability,
        and real-world constraints beyond coursework.
      </p>

      <div className="projects-grid">
        <ProjectCard
          title="SkillLink — Mobile Skill-Exchange Platform"
          image={skilllinkImg}
          summary="A mobile-first platform designed to help people discover, connect, and exchange skills securely."
          highlights={[
            "Designed end-to-end authentication flow using JWT and BCrypt",
            "Built real-time messaging with WebSockets (STOMP) achieving low latency",
            "Optimized API responses by reducing payload size and request chaining",
          ]}
          tech={[
            "Java",
            "React Native",
            "Spring Boot",
            "AWS S3",
            "DynamoDB",
            "WebSocket",
            "JWT",
          ]}
          github="https://github.com/hrittijab/SkillLink-backend"
          demo="https://www.youtube.com/watch?v=l-zmKJVeKeo"
        />

        <ProjectCard
          title="SocialDistribution — Distributed Social Media System"
          image={socialImg}
          summary="A federated social media system where independent servers communicate and share content across network boundaries."
          highlights={[
            "Implemented inbox/outbox pattern for cross-node content delivery",
            "Handled remote-node authentication and trust management",
            "Designed REST-based federation to propagate posts, likes, and follows",
          ]}
          tech={[
            "Python",
            "Django",
            "Django REST Framework",
            "PostgreSQL",
            "REST APIs",
            "Heroku",
            "PyTest",
          ]}
          github="https://github.com/yourusername/socialdistribution"
        />

        <ProjectCard
          title="TaskMaster — Cloud-Based Task Manager"
          image={taskmasterImg}
          summary="A full-stack task management application built to explore secure authentication and serverless storage."
          highlights={[
            "Implemented email-verified authentication using SMTP",
            "Designed REST APIs for task CRUD operations",
            "Used DynamoDB for scalable, serverless persistence",
          ]}
          tech={[
            "React",
            "Spring Boot",
            "AWS DynamoDB",
            "REST APIs",
            "BCrypt",
          ]}
          github="https://github.com/hrittijab/TaskMaster"
          demo="https://www.youtube.com/watch?v=gwMeH-R-OxE"
        />

        <ProjectCard
          title="Event Lottery Application"
          image={eventImg}
          summary="An Android application built to manage lottery-based event registrations with multiple user roles."
          highlights={[
            "Led development of the Organizer module",
            "Implemented real-time participant notifications",
            "Achieved high test coverage using JUnit and Espresso",
          ]}
          tech={[
            "Java",
            "Android Studio",
            "Firebase",
            "MVC",
            "JUnit",
            "Espresso",
          ]}
          github="https://github.com/CMPUT301F24apiary/Hive"
        />
      </div>
    </>
  );
}
