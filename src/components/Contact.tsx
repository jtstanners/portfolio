import React from "react"
import styles from "../App.module.css"

type ContactData = {
  email: string
  location?: string
  socials?: { label: string; href: string }[]
}

export const Contact: React.FC<{ data: ContactData }> = ({ data }) => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <h2>Contact</h2>
        {data.location && <p className={styles.muted}>{data.location}</p>}
        <p>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href={`mailto:${data.email}`}>
            Email Me
          </a>
        </p>
        {!!data.socials?.length && (
          <div className={styles.links}>
            {data.socials.map((s) => (
              <a key={s.href} className={styles.link} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

