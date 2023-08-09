import React from 'react';
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout'
import Seo from '../../components/seo';

export default function index({ data }) {
  const works = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <Seo 
        title='Works' 
        description='This is my works page, where I showcase my works as a Software Engineer and a Motion Graphic Artist.'
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
                <h1 className='text-3xl'>{work.frontmatter.title} - {work.frontmatter.date}</h1>
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