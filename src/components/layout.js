import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useEffect } from 'react';

export default function Layout({ children }) {
  useEffect(() => {
    const preventDefault = (event) => {
      event.preventDefault();
    };

    document.body.ondragstart = preventDefault;
    document.body.oncontextmenu = preventDefault;
    document.body.onselectstart = preventDefault;
    document.body.onkeydown = preventDefault;
    document.body.onmousedown = preventDefault;

    return () => {
      document.body.ondragstart = null;
      document.body.oncontextmenu = null;
      document.body.onselectstart = null;
      document.body.onkeydown = null;
      document.body.onmousedown = null;
    };
  }, []);

  return (
    <article className='max-w-2xl mx-auto'>
      <Navbar />
      {children}
      <Footer />
    </article>
  )
}