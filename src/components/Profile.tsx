import React from "react"

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
    <section id="top" className="section profile">
      <div className="container profile-container">
        <div className="profile-copy">
          <p className="eyebrow">{data.title}</p>
          <div className="profile-heading">
            <h1 className="headline">{data.name}</h1>
            {data.image ? (
              <img className="profile-avatar" src={data.image} alt={data.imageAlt ?? `${data.name} portrait`} />
            ) : null}
          </div>
          <p className="summary">{data.summary}</p>
          <div className="actions">
            {data.actions.map((a) => (
              <a key={a.label} className={`btn ${a.variant ?? "primary"}`} href={a.href}>
                {a.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
