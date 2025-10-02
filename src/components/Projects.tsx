import React from "react"
import styles from "../App.module.css"

export type Project = {
  name: string
  description: string
  tags: string[]
  links?: { label: string; href: string }[]
}

export const Projects: React.FC<{ data: Project[] }> = ({ data }) => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2>Projects</h2>
        <div className={styles.grid}>
          {data.map((p) => (
            <article key={p.name} className={`${styles.card} ${styles.project}`}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className={styles.projectTags}>
                {p.tags.map((t) => (
                  <span key={t} className={`${styles.chip} ${styles.chipSmall}`}>
                    {t}
                  </span>
                ))}
              </div>
              {!!p.links?.length && (
                <div className={styles.links}>
                  {p.links.map((l) => (
                    <a key={l.href} className={styles.link} href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
