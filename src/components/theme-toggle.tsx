"use client";

export default function ThemeToggle() {
  return <button type="button" className="theme-toggle" aria-label="Switch light or dark appearance" onClick={() => {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = dark ? "light" : "dark";
    root.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Appearance still works without storage. */ }
  }}><span className="show-in-light">Dark</span><span className="show-in-dark">Light</span></button>;
}
