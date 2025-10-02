import React from "react"

export type ExperienceItem = {
  role: string
  company: string
  period: string
  details: string[]
}

export const Experience: React.FC<{ data: ExperienceItem[] }> = ({ data }) => {
  if (!data.length) return null

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <ol className="timeline">
          {data.map((item, idx) => (
            <li key={`${item.company}-${idx}`} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>
                    {item.role}
                    {item.company ? (
                      <span className="muted"> @ {item.company}</span>
                    ) : null}
                  </h3>
                  {item.period && <span className="period">{item.period}</span>}
                </div>
                {!!item.details.length && (
                  <ul className="bullets">
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
