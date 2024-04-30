import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
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
          <section className='flex flex-row' title={ date }>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
              <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
              <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
            </svg>
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
