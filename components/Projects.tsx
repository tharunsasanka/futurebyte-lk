import Reveal from "@/components/Reveal";
import ProjectVisual from "@/components/ProjectVisual";

const projects = [
  {
    category: "Featured Project",
    title: "DFIR Investigation Assistant",
    description:
      "An AI-assisted digital forensics platform focused on evidence handling, investigation workflows, timeline reconstruction, and security analysis.",
    tags: ["DFIR", "AI", "FastAPI", "React"],
    variant: "dfir" as const,
  },
  {
    category: "Featured Project",
    title: "StockMate",
    description:
      "An inventory and sales management system designed around everyday business operations, stock management, and transactional workflows.",
    tags: ["Inventory", "Management", "Web App"],
    variant: "stockmate" as const,
  },
  {
    category: "Demonstration Project",
    title: "Cipher AI",
    description:
      "A desktop AI command center combining system telemetry, automation, utilities, and security-oriented functionality.",
    tags: ["AI", "Python", "Automation"],
    variant: "cipher" as const,
  },
  {
    category: "Demonstration Project",
    title: "CyberPortfolio",
    description:
      "A modern cybersecurity and software development portfolio platform combining projects, credentials, interactive experiences, and technical branding.",
    tags: ["Next.js", "TypeScript", "Cybersecurity"],
    variant: "portfolio" as const,
  },
];

export default function Projects() {
  return (
    <section className="section section-border" id="projects">
      <div className="site-shell">
        <Reveal>
          <div className="section-heading-copy">
            <span className="kicker">Selected Work</span>

            <h2 className="heading" style={{ marginTop: 22 }}>
              Projects That Show What We Build.
            </h2>

            <p
              className="lead"
              style={{ marginTop: 22, maxWidth: 760 }}
            >
              A selection of software, security, AI, and business-system
              projects that demonstrate the kinds of digital solutions
              FutureByte LK can create.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <article className="project-card project-card-enhanced">
                <ProjectVisual variant={project.variant} />

                <div className="project-content">
                  <span className="project-meta">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}