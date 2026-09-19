function Services() {
  const services = [
    {
      number: '01',
      title: 'Business Websites',
      description:
        'Professional and responsive websites designed to give your business a strong and credible online presence.'
    },
    {
      number: '02',
      title: 'React Websites',
      description:
        'Modern React-based websites with smooth interactions, clean interfaces and responsive layouts.'
    },
    {
      number: '03',
      title: 'Website Redesign',
      description:
        'Transform an existing website with a cleaner design, better user experience and mobile responsiveness.'
    },
    {
      number: '04',
      title: 'Landing Pages',
      description:
        'Focused and visually engaging landing pages for businesses, services, campaigns and personal brands.'
    }
  ]

  return (
    <section className="services" id="services">

      <div className="section-heading">
        <p className="section-label">SERVICES</p>

        <h2>
          What I can
          <span> build for you.</span>
        </h2>
      </div>

      <div className="services-grid">

        {services.map((service) => (
          <article className="service-card" key={service.number}>

            <div className="service-top">
              <span className="service-number">
                {service.number}
              </span>

              <span className="service-arrow">↗</span>
            </div>

            <div className="service-content">

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>

          </article>
        ))}

      </div>

    </section>
  )
}

export default Services