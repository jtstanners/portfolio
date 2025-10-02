import React from "react"
import styles from "../App.module.css"

export type ExperienceItem = {
  role: string
  company: string
  period: string
  details: string[]
}

export const Experience: React.FC<{ data: ExperienceItem[] }> = ({ data }) => {
  if (!data.length) return null

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <h2>Experience</h2>
        <ol className={styles.timeline}>
          {data.map((item, idx) => (
            <li key={`${item.company}-${idx}`} className={styles.timelineItem}>
              <div className={styles.timelineMarker} aria-hidden="true" />
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>
                    {item.role}
                    {item.company ? <span className={styles.muted}> @ {item.company}</span> : null}
                  </h3>
                  {item.period && <span className={styles.period}>{item.period}</span>}
                </div>
                {!!item.details.length && (
                  <ul className={styles.bullets}>
                    {item.details.map((detail, detailIdx) => (
                      <li key={detailIdx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

