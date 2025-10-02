import React from 'react'

type Props = {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export const Navbar: React.FC<Props> = ({ theme, onToggle }) => {
  return (
    <header className="navbar">
      <a href="#top" className="brand" aria-label="Home">
        <span className="brand-mark">{`</>`}</span>
        <span className="brand-text">Portfolio</span>
      </a>
      <nav className="nav-links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </header>
  )
}

