import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
// import usePreventDefault from './prevent'
import Dividers from './divider'

export default function Layout({ children }) {
  // usePreventDefault()
  return (
    <article className='max-w-2xl mx-auto p-8'>
      <Navbar />
      <Dividers />
      {children}
      <Footer />
    </article>
  )
}