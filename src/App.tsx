import styles from "./App.module.css"
import { useEffect, useMemo, useState } from "react"
import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Education } from "./components/Education"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { content as defaultContent } from "./data/content"

type Theme = "light" | "dark"

function App() {
  const prefersDark = useMemo(
    () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  )
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null
    return saved ?? (prefersDark ? "dark" : "light")
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const content = defaultContent

  return (
    <div className={styles.app}>
      <Navbar theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main className={styles.main}>
        <Profile data={content.profile} />
        <About data={content.about} />
        <Experience data={content.experience} />
        <Education data={content.education} />
        <Projects data={content.projects} />
        <Contact data={content.contact} />
      </main>
      <Footer />
    </div>
  )
}

export default App
