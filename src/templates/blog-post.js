import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import Seo from '../components/seo'

export default function BlogPost({ data }) {
  const { html } = data.markdownRemark
  const { title, date, description } = data.markdownRemark.frontmatter
  
  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        lang="en"
        meta={[
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      <article 
        className='blog-post'
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className='text-white mb-8'>
          <h1 className='title-content'> { title } </h1>
          <section className='flex flex-row'>
            <FontAwesomeIcon icon={faCalendarAlt} className='fa-xl' />
            <p className='date-content'> { date } </p>
          </section>
        </header>
        <article className='html-content leading-snug' dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query WorksPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
        description
      }
    }
  }
`
