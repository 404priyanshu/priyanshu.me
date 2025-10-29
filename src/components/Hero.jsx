import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Priyanshu</span>
          </h1>
          <p className="hero-subtitle">
            Web Developer & Creative Technologist
          </p>
          <p className="hero-description">
            I build digital experiences that are both beautiful and functional.
            Specialized in modern web technologies and user-centric design.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  )
}

export default Hero
