import { useEffect, useState } from 'react'
import type { AboutData } from '../types'

export default function Contact() {
  const [about, setAbout] = useState<AboutData | null>(null)

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(setAbout)
      .catch(err => console.error(err))
  }, [])

  if (!about) return <p className="p-4">Loading...</p>

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-2">Email: <a className="text-blue-600 hover:underline" href={`mailto:${about.email}`}>{about.email}</a></p>
      <p>LinkedIn: <a className="text-blue-600 hover:underline" href={about.linkedin}>{about.linkedin}</a></p>
    </section>
  )
}
