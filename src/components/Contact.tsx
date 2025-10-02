import React from 'react'

type ContactData = {
  email: string
  location?: string
  socials?: { label: string; href: string }[]
}

export const Contact: React.FC<{ data: ContactData }> = ({ data }) => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        {data.location && <p className="muted">{data.location}</p>}
        <p>
          <a className="btn primary" href={`mailto:${data.email}`}>
            Email Me
          </a>
        </p>
        {!!data.socials?.length && (
          <div className="links">
            {data.socials.map((s) => (
              <a key={s.href} className="link" href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

