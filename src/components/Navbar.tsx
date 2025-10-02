import React from "react"
import styles from "../App.module.css"

type Props = {
  theme: "light" | "dark"
  onToggle: () => void
}

export const Navbar: React.FC<Props> = ({ theme, onToggle }) => {
  return (
    <header className={styles.navbar}>
      <a href="#top" className={styles.brand} aria-label="Home">
        <span className={styles.brandMark}>{"</>"}</span>
        <span>Portfolio</span>
      </a>
      <nav className={styles.navLinks} aria-label="Primary">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className={styles.themeToggle} onClick={onToggle} aria-label="Toggle theme">
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </header>
  )
}
