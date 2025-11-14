import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Your Company — Built with React + Vite + Tailwind
      </div>
    </footer>
  )
}
