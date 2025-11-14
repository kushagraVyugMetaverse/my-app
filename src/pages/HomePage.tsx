import React from 'react'
import Button from '../components/Button'

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-4">Ready for Figma → React</h1>
      <p className="text-gray-600 mb-8">
        This is a starter home page. When the Figma design arrives we will replace these
        components with pixel-perfect versions mapped to your design tokens.
      </p>

      <div className="flex gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  )
}
