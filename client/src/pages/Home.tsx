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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <li key={p.title} className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-2">
              <a className="text-blue-600 hover:underline" href={p.url}>{p.title}</a>
            </h2>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
