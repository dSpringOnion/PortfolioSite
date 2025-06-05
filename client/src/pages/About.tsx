import { useEffect, useState } from 'react'
import type { AboutData } from '../types'

export default function About() {
  const [about, setAbout] = useState<AboutData | null>(null)

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(setAbout)
      .catch(err => console.error(err))
  }, [])

  if (!about) {
    return <p>Loading...</p>
  }

  return (
    <section>
      <h1>About Me</h1>
      <p>{about.bio}</p>
      <h2>Skills</h2>
      <ul className="skills">
        {about.skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}
