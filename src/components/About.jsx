import './About.css'

function About() {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js',
    'HTML/CSS', 'Tailwind CSS', 'Git', 'Vite',
    'REST APIs', 'Responsive Design'
  ]

  return (
    <section id="about" className="section about">
      <div className="about-content">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a passionate web developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in modern web technologies, I transform
              ideas into elegant, performant applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
