import React from "react"
import styles from "../App.module.css"

type ProfileData = {
  name: string
  title: string
  summary: string
  actions: { label: string; href: string; variant?: "primary" | "secondary" }[]
  image?: string
  imageAlt?: string
}

export const Profile: React.FC<{ data: ProfileData }> = ({ data }) => {
  return (
    <section id="top" className={`${styles.section} ${styles.profile}`}>
      <div className={`${styles.container} ${styles.profileContainer}`}>
        <div className={styles.profileCopy}>
          <p className={styles.eyebrow}>{data.title}</p>
          <div className={styles.profileHeading}>
            <h1 className={styles.headline}>{data.name}</h1>
            {data.image ? (
              <img
                className={styles.profileAvatar}
                src={data.image}
                alt={data.imageAlt ?? `${data.name} portrait`}
              />
            ) : null}
          </div>
          <p className={styles.summary}>{data.summary}</p>
          <div className={styles.actions}>
            {data.actions.map((a) => {
              const variantClass = a.variant === "secondary" ? styles.btnSecondary : styles.btnPrimary
              return (
                <a key={a.label} className={`${styles.btn} ${variantClass}`} href={a.href}>
                  {a.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
