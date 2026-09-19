function Skills() {
  const skills = [
    {
      number: '01',
      name: 'React',
      description: 'Building modern and interactive web interfaces.'
    },
    {
      number: '02',
      name: 'JavaScript',
      description: 'Creating dynamic and functional web experiences.'
    },
    {
      number: '03',
      name: 'HTML & CSS',
      description: 'Crafting clean layouts and polished interfaces.'
    },
    {
      number: '04',
      name: 'Responsive Design',
      description: 'Designing websites that work across all devices.'
    },
    {
      number: '05',
      name: 'UI/UX Design',
      description: 'Focusing on usability, clarity and visual balance.'
    },
    {
      number: '06',
      name: 'AI Tools & Prompting',
      description: 'Using AI tools to improve development, problem-solving and workflow efficiency.'
    }
  ]

  return (
    <section className="skills" id="skills">

      <div className="section-heading">
        <p className="section-label">SKILLS</p>

        <h2>Tools I use to bring ideas to life.</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill.number}>

            <span className="skill-number">
              {skill.number}
            </span>

            <div className="skill-info">
              <h3>{skill.name}</h3>

              <p>{skill.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills