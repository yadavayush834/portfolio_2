import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <main className="paper">
        <header className="introduction">
          <div className="name-line">
            <h1>{profile.name}</h1>
            <span className="location">{profile.location}</span>
          </div>
          <p className="occupation">{profile.title} / backend &amp; applied AI</p>
          <p className="intro-copy">{profile.introduction}</p>
          <nav className="intro-links" aria-label="Profile links">
            <a href={`mailto:${profile.email}`}>Email <ArrowUpRight aria-hidden="true" /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
          </nav>
        </header>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.repository}>
                <h3>
                  <a href={project.repository} target="_blank" rel="noopener noreferrer">
                    <span>{project.name}</span>
                    <ArrowUpRight aria-hidden="true" />
                    <span className="visually-hidden"> — source on GitHub</span>
                  </a>
                </h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tools">{project.tools.join(" / ")}</p>
              </article>
            ))}
          </div>
          <a className="all-work" href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer">
            More on GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        </section>

        <section className="information-section" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience</h2>
          <div className="information-content">
            <h3>{profile.experience.role}</h3>
            <p className="organization">{profile.experience.organization}</p>
            <p>{profile.experience.description}</p>
          </div>
        </section>

        <section className="information-section" aria-labelledby="tools-title">
          <h2 id="tools-title">Tools I use</h2>
          <p className="information-content tools-copy">{profile.tools.join(", ")}.</p>
        </section>

        <section className="information-section" aria-labelledby="education-title">
          <h2 id="education-title">Education</h2>
          <div className="information-content">
            <h3>{profile.education.degree}</h3>
            <p>{profile.education.institution}<span className="education-period">{profile.education.period}</span></p>
          </div>
        </section>

        <footer className="footer">
          <p>Have something in mind?</p>
          <a className="contact-link" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight aria-hidden="true" />
          </a>
        </footer>
      </main>
    </>
  );
}
