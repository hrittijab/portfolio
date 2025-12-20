import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  summary: string;
  highlights: string[];
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  summary,
  highlights,
  tech,
  image,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      {/* Screenshot */}
      {image && (
        <div className="project-image-wrapper">
          <img src={image} alt={title} className="project-image" />
        </div>
      )}

      <h3 className="project-title">{title}</h3>

      <p className="project-summary">{summary}</p>

      <ul className="project-highlights">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="project-tech">
        {tech.map((t) => (
          <span key={t} className="tech-badge">
            {t}
          </span>
        ))}
      </div>

      <div className="project-actions">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="project-link secondary"
          >
            <ExternalLink size={16} />
            <span>Demo</span>
          </a>
        )}
      </div>
    </div>
  );
}
