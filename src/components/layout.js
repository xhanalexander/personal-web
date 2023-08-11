import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import usePreventDefault from './prevent'

export default function Layout({ children }) {
  usePreventDefault()
  return (
    <article className='max-w-2xl mx-auto'>
      <Navbar />
      {children}
      <Footer />
    </article>
  )
}