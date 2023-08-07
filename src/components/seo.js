import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, meta, title }) => {
   const { site } = useStaticQuery(
      graphql`
      query MyQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
   )

   const metaDescription = description || site.siteMetadata.description
   const defaultTitle = site.siteMetadata?.title

   return (
      <Helmet
         title={title}
         titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
         meta={[
            {
               name: `description`,
               content: metaDescription,
            },
            {
               property: `og:title`,
               content: title,
            },
            {
               property: `og:description`,
               content: metaDescription,
            }
         ].concat(meta)}
      />
   )
}
export default Seo