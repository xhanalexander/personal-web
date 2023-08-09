import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../../components/seo';

export default function index({ data }) {
  const works = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo
        title="Works"
        description="All of my works and projects."
        lang="en"
        meta={[
          {
            name: "robots",
            content: "noindex, nofollow",
          },
        ]}
      />
      <main className='text-white'>
        {
          works.map(work => (
            <article key={work.id} className='mb-12'>
              <Link to={`/works/${work.frontmatter.slug}`} className='a-title' title={work.frontmatter.title}>
                <figure className='bg-green-400 rounded-xl mb-2'>
                  <GatsbyImage
                    image={getImage(work.frontmatter.thumbnail)}
                    alt={work.frontmatter.title}
                    className='rounded-xl transform transition duration-200 hover:-translate-y-2 hover:-translate-x-2'
                  />
                </figure>
                <h3 className='text-3xl'>{work.frontmatter.title} - {work.frontmatter.date}</h3>
                <p className='text-gray-400 text-lg leading-normal'>{work.frontmatter.description}</p>
              </Link>
            </article>
          ))
        }
      </main>
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
          date(formatString: "YYYY")
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