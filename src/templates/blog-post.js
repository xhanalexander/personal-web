import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

export default function BlogPost({ data }) {
  const { html } = data.markdownRemark
  const { title, date } = data.markdownRemark.frontmatter
  
  return (
    <Layout>
      <header className='text-white mb-8'>
        <h1 className='title-content'> { title } </h1>
        <section className='flex flex-row'>
          <FontAwesomeIcon icon={faCalendarAlt} className='fa-2xl' />
          <p className='date-content'> { date } </p>
        </section>
      </header>
      <article className='html-content' dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query WorksPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }`
