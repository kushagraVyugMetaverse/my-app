import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
            KD
          </div>
          <span className="text-lg font-semibold">Project</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-4">
          <Link to="/" className="text-sm text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <button className="text-sm text-gray-700 hover:text-gray-900">Sign in</button>
        </nav>
      </div>
    </header>
  )
}
