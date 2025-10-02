import React from 'react'

export type Project = {
  name: string
  description: string
  tags: string[]
  links?: { label: string; href: string }[]
}

export const Projects: React.FC<{ data: Project[] }> = ({ data }) => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {data.map((p) => (
            <article key={p.name} className="card project">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="chip small">
                    {t}
                  </span>
                ))}
              </div>
              {!!p.links?.length && (
                <div className="links">
                  {p.links.map((l) => (
                    <a key={l.href} className="link" href={l.href} target="_blank" rel="noreferrer">
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

