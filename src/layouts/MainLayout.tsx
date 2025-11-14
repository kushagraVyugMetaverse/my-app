import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

type Props = { children: React.ReactNode }

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 container mx-auto w-full px-4">{children}</main>
      <Footer />
    </div>
  )
}
