import React from 'react'

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p className="muted">© {year} Jeramey Stanners. All rights reserved.</p>
      </div>
    </footer>
  )
}

