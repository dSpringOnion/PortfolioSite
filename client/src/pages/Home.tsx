import { useEffect, useState } from 'react'
import type { Project } from '../types'
import Hero from '../components/Hero'

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(setProjects)
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Hero />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <li key={p.title} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">
                <a className="text-blue-600 hover:underline" href={p.url}>{p.title}</a>
              </h3>
              <p>{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
