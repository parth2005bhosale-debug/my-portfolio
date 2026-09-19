function Projects() {
  const projects = [
    {
      number: '01',
      title: 'Hotel Desai Wada',
      description:
        'A responsive hotel website designed to showcase rooms, experiences, gallery and booking information.',
      tech: 'React • JavaScript • CSS',
      link: 'https://hotel-desai-wada.vercel.app/'
    },
    {
      number: '02',
      title: 'Restaurant Website',
      description:
        'A modern restaurant website with an interactive menu, food categories and responsive user interface.',
      tech: 'React • JavaScript • CSS',
      link: 'https://restaurant-react-website-one.vercel.app/'
    },
    {
      number: '03',
      title: 'Diabetes Prediction',
      description:
        'A machine learning application that predicts diabetes using a trained classification model and an interactive interface.',
      tech: 'Python • Machine Learning • Streamlit',
      link: 'https://diabetes-predection-gedxrlqobplfhsu3vnfmph.streamlit.app/'
    }
  ]

  return (
    <section className="projects" id="projects">

      <div className="section-heading">
        <p className="section-label">SELECTED WORK</p>

        <h2>
          Projects I’ve
          <span> worked on.</span>
        </h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-arrow">↗</span>
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-tech">
                {project.tech}
              </span>

            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live Project
              <span>→</span>
            </a>

          </article>
        ))}

      </div>

    </section>
  )
}

export default Projects