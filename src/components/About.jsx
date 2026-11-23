const skills = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'APIs', 'Git']

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About me</h2>
      <p>
        Write 2 or 3 sentences here about why you chose informatics and what
        you enjoy building.
      </p>
      <p>
        Write 1 or 2 sentences here about the kind of role you want and what you
        bring to a team.
      </p>

      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill} className="skill">{skill}</li>
        ))}
      </ul>
    </section>
  )
}