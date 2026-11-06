import ThemeToggle from "@/components/theme-toggle";
import PixelCompanion from "@/components/pixel-companion";
import Workbench from "@/components/workbench";
import { profile } from "@/data/profile";
export default function Portfolio() {
  return <><a className="skip-link" href="#work">Skip to projects</a><main className="studio">
    <header className="studio-header"><a href="mailto:ayushwell100@gmail.com" className="header-contact">Let’s talk <span>↗</span></a><ThemeToggle /></header>
    <div className="studio-layout"><aside className="personal"><div className="identity"><div className="name-line"><h1>Ayush Yadav</h1><PixelCompanion /></div><p className="location">Delhi, India</p></div><p className="personal-intro">I like making things <br/>feel like <em>my own.</em></p><p className="personal-copy">Software, machine learning, and Linux desktops. Usually tinkering with one of the three.</p><nav className="profile-links" aria-label="Profile links"><a href={profile.github}>GitHub ↗</a><a href={profile.linkedin}>LinkedIn ↗</a></nav>
    <div className="personal-details"><details><summary>A little about me</summary><p>I’m studying computer science at Dronacharya College of Engineering (2024–2028). I like trying Linux distros, customizing Arch and Hyprland, and Formula 1.</p></details><details><summary>What I work with</summary><p>Python, JavaScript / TypeScript, React, Rust, PHP, Linux, and Git.</p><p>I’ve studied machine learning and used PyTorch and MediaPipe in projects.</p></details><details><summary>Previously</summary><p>Backend development intern at Digital India Corporation, Ministry of Textiles. Worked on product recommendations for IndiaHandmade.com with Magento, OpenSearch, and embeddings.</p></details></div></aside><div id="work"><Workbench /></div></div>
    <footer className="studio-footer"><span>A few things I’ve made, and a little of who I am.</span><a href={`mailto:${profile.email}`}>{profile.email}</a></footer>
  </main></>;
}
