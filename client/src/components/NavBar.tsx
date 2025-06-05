import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <ul className="flex space-x-4">
          <li><Link className="hover:underline" to="/">Home</Link></li>
          <li><Link className="hover:underline" to="/projects">Projects</Link></li>
          <li><Link className="hover:underline" to="/about">About</Link></li>
          <li><Link className="hover:underline" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
