import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <article className='max-w-2xl mx-auto'>
      <Navbar />
      {children}
      <Footer />
    </article>
  )
}