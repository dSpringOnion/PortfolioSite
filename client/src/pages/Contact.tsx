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

  if (!about) return <p>Loading...</p>

  return (
    <section>
      <h1>Contact</h1>
      <p>Email: <a href={`mailto:${about.email}`}>{about.email}</a></p>
      <p>LinkedIn: <a href={about.linkedin}>{about.linkedin}</a></p>
    </section>
  )
}
