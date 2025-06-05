import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="bg-black bg-opacity-80 backdrop-blur text-white fixed top-0 w-full z-10">
      <nav className="container mx-auto flex justify-center space-x-8 py-3 text-sm">
        <Link className="hover:text-gray-300" to="/">Home</Link>
        <Link className="hover:text-gray-300" to="/projects">Projects</Link>
        <Link className="hover:text-gray-300" to="/about">About</Link>
        <Link className="hover:text-gray-300" to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
