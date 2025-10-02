import React from "react"

type AboutData = {
  blurb: string
  skills: string[]
}

export const About: React.FC<{ data: AboutData }> = ({ data }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p className="blurb">{data.blurb}</p>
        <div className="skills">
          {data.skills.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
