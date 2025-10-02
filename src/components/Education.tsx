import React from "react"

export type EducationItem = {
  degree: string
  school: string
  period: string
}

export const Education: React.FC<{ data: EducationItem[] }> = ({ data }) => {
  if (!data.length) return null

  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <ol className="timeline">
          {data.map((item, idx) => (
            <li key={`${item.school}-${idx}`} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>
                    {item.degree}
                    {item.school ? (
                      <span className="muted"> @ {item.school}</span>
                    ) : null}
                  </h3>
                  {item.period && <span className="period">{item.period}</span>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
