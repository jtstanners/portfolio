import React from "react"
import styles from "../App.module.css"

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.muted}>© {year} Jeramey Stanners. All rights reserved.</p>
      </div>
    </footer>
  )
}

