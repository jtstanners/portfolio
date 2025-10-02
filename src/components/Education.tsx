import React from "react"
import styles from "../App.module.css"

export type EducationItem = {
  degree: string
  school: string
  period: string
  details: string[]
}

export const Education: React.FC<{ data: EducationItem[] }> = ({ data }) => {
  if (!data.length) return null

  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <h2>Education</h2>
        <ol className={styles.timeline}>
          {data.map((item, idx) => (
            <li key={`${item.school}-${idx}`} className={styles.timelineItem}>
              <div className={styles.timelineMarker} aria-hidden="true" />
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>
                    {item.degree}
                    {item.school ? <span className={styles.muted}> @ {item.school}</span> : null}
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

