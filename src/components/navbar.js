import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Navbar() {

  const [isActived, setIsActived] = useState(false)
  const toggleMenu = () => { setIsActived(prevState => !prevState)}

  useEffect(() => {
    const body = document.querySelector('body')
    if (isActived) {
      body.classList.add('overflow-hidden')
    } else {
      body.classList.remove('overflow-hidden')
    }
  }, [isActived])
  
  const data = useStaticQuery(graphql`
    query nickname {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const nickNames = data.site.siteMetadata.title

  return (
    <nav className='flex flex-row justify-between mb-20 mt-16 relative'>
      <Link to="/" className='a-title md:text-2xl text-3xl' title='home'>{nickNames}</Link>

      {
        isActived && (
          <section className={`mobile-nav ${isActived ? 'active' : ''}`}>
            <div className="flex flex-col justify-center items-center h-full">
              <Link to="/" className='text-4xl my-6' activeClassName='text-green-400'>home</Link> 
              <Link to="/works" className='text-4xl my-6' activeClassName='text-green-400'>works</Link>
              <Link to="/about" className='text-4xl my-6' activeClassName='text-green-400'>about</Link>
            </div>
          </section>
        )
      }

      <button 
        className={`hamburger-btn md:hidden z-20 ${isActived ? 'active' : ''}`}
        type='button' 
        title='menu'
        onClick={toggleMenu}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <header className="md:flex hidden">
        <Link to="/works" className='mr-6' activeClassName='text-green-400' title='works'>works</Link>
        <Link to="/about" activeClassName='text-green-400' title='about'>about</Link>
      </header>
    </nav>
  )
}
