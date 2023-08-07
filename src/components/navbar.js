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
                <Link to="/" className='text-4xl my-6' activeClassName='text-green-400'>home</Link>
                <Link to="/works" className='text-4xl my-6' activeClassName='text-green-400'>works</Link>
                <Link to="/about" className='text-4xl my-6' activeClassName='text-green-400'>about</Link>
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
        <Link to="/works" className='mr-6' activeClassName='text-green-400' title='works'>works</Link>
        <Link to="/about" activeClassName='text-green-400' title='about'>about</Link>
      </header>
    </nav>
  )
}
