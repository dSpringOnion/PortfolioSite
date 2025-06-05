import { useEffect, useState } from 'react'
import type { Project } from '../types'

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(setProjects)
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>My Projects</h1>
      <ul className="project-list">
        {projects.map(p => (
          <li key={p.title}>
            <h2><a href={p.url}>{p.title}</a></h2>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
