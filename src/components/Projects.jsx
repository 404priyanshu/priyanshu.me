import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Vercel',
      role: 'Director',
      year: '2022-24',
      description: 'Crafted Vercel, Next.js, and conference sites. Enhanced the dashboard and docs, elevated the design system, and directed Design Engineering.',
      demo: '#'
    },
    {
      title: 'Sketch',
      role: 'Lead',
      year: '2019-22',
      description: 'Product ideas for macOS and web. Founded Prism, a reshaping of brand, platforms and internal ecosystems. Directed designers and product teams.',
      demo: '#'
    },
    {
      title: 'Fueled',
      role: 'Principal',
      year: '2011-19',
      description: 'Creativity for enterprise and startups of the app store goldrush. Built a design team and culture.',
      demo: '#'
    },
    {
      title: 'Personal',
      role: 'Misc',
      year: 'Misc',
      description: 'Playing around with photography, interaction, created a music app, and dabble with design tools.',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="section projects">
      <div className="projects-content">
        <h2 className="section-title">Past projects.</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}, {project.role}</h3>
                <p className="project-meta">{project.year}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-links">
                  <a href={project.demo} className="project-link" aria-label="View Project">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
