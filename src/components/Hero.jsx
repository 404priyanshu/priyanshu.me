import './Hero.css'
import { useState } from 'react'

function Hero() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div 
          className="bird-icon"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className="bird-placeholder"></div>
          {showTooltip && <div className="bird-tooltip">Caw!</div>}
        </div>
        
        <div className="hero-text">
          <h1 className="hero-title">
            Priyanshu. <span className="hero-subtitle-elegant">Designer and Director</span>, focussed on brand, product & process at <span className="company-name">your company</span>.
          </h1>
          <p className="hero-description">
            Creating product solutions and brand direction for the tech industry, with a focus on design and development tools. Diving into the details, zooming out for the big picture.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
