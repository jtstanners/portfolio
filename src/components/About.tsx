import React from "react"
import styles from "../App.module.css"

type AboutData = {
  blurb: string
  skills: string[]
}

export const About: React.FC<{ data: AboutData }> = ({ data }) => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2>About</h2>
        <p className={styles.blurb}>{data.blurb}</p>
        <div className={styles.skills}>
          {data.skills.map((s) => (
            <span key={s} className={styles.chip}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
