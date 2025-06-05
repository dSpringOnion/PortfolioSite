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
    return <p className="p-4">Loading...</p>
  }

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">{about.bio}</p>
      <h2 className="text-2xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc ml-6">
        {about.skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  )
}
