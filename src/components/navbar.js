import { Link, graphql, useStaticQuery } from 'gatsby'
import { Squash as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Navbar() {

  const [isActived, setIsActived] = useState(false)
  const toggleMenu = () => { setIsActived(prevState => !prevState) }

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

      <AnimatePresence>
        {
          isActived && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              className="mobile-nav"
            >
              <div className="flex flex-col justify-center items-center h-full">
                <Link to="/" className='nav-link' activeClassName='active' title='home'>home</Link>
                <Link to="/works" className='nav-link' activeClassName='active' title='works'>works</Link>
                <Link to="/about" className='nav-link' activeClassName='active' title='about'>about</Link>
              </div>
            </motion.section>
          )
        }
      </AnimatePresence>

      <div className="md:hidden z-20">
        <Hamburger
          toggled={isActived}
          toggle={toggleMenu}
          size={30}
          color='#fff'
        />
      </div>

      <header className="md:flex hidden">
        <Link to="/works" className='a-link mr-6' activeClassName='active' title='works'>works</Link>
        <Link to="/about" className='a-link' activeClassName='active' title='about'>about</Link>
      </header>
    </nav>
  )
}
