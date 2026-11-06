import ThemeToggle from "@/components/theme-toggle";
import PixelCompanion from "@/components/pixel-companion";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to projects</a>
      <main className="paper">
        <header className="introduction">
          <ThemeToggle />
          <div className="name-line"><h1>{profile.name}</h1><PixelCompanion /></div>
          <p className="location">Computer science student in Delhi, India.</p>
          <p className="intro-copy">I build software, study machine learning, and spend a lot of time making Linux feel like my own.</p>
          <nav className="profile-links" aria-label="Contact and profiles">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </header>

        <section className="section" id="work" aria-labelledby="work-title">
          <h2 id="work-title">A few things I’ve built</h2>
          <div className="projects">{projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-heading">
                <h3>{project.repository ? <a href={project.repository} target="_blank" rel="noopener noreferrer">{project.name}</a> : project.name}</h3>
                {!project.repository && <span className="project-note">Private project</span>}
              </div>
              <p>{project.description}</p>
            </article>
          ))}</div>
        </section>

        <section className="section" aria-labelledby="experience-title">
          <h2 id="experience-title">Previously</h2>
          <p><strong>Backend development intern</strong> at Digital India Corporation, Ministry of Textiles. Worked on product recommendations for IndiaHandmade.com with Magento, OpenSearch, and embeddings.</p>
        </section>

        <section className="section" aria-labelledby="skills-title">
          <h2 id="skills-title">What I work with</h2>
          <p>Python, JavaScript / TypeScript, React, Rust, PHP, Linux, and Git.</p>
          <p className="secondary">I’ve studied machine learning and used PyTorch and MediaPipe in my projects.</p>
        </section>

        <section className="section" aria-labelledby="interests-title">
          <h2 id="interests-title">Outside the project</h2>
          <p>I like trying Linux distros and customizing desktop setups, especially Arch and Hyprland. I’m also into Formula 1.</p>
        </section>

        <footer>
          <p>B.Tech in Computer Science &amp; Engineering, {profile.education.period}</p>
          <p>{profile.education.institution}</p>
        </footer>
      </main>
    </>
  );
}
