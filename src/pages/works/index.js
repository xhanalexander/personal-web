import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function index({ data }) {
  const works = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className='text-white'>
        <h1 className='text-4xl font-bold text-center'>Portfolios</h1>
        <section>
          {
            works.map(work => (
              <article key={work.id} className='my-7'>
                <Link to={`/works/${work.frontmatter.slug}`} className='a-title' title={work.frontmatter.title}>
                  <GatsbyImage
                    image={getImage(work.frontmatter.thumbnail)}
                    alt={work.frontmatter.title}
                    className='rounded-xl my-2'
                  />
                  <h3>{work.frontmatter.title}</h3>
                  <p>{work.frontmatter.description}</p>
                </Link>
              </article>
            ))

          }
        </section>
      </div>
    </Layout>
  )
}

export const blogs = graphql`
  query blogPost {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          title
          description
          date(formatString: "DD MMMM YYYY")
          slug
          thumbnail {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`