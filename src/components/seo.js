// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ title, description, meta = [] }) => {
  const { site } = useStaticQuery(graphql`
      query WebInfo {
        site {
          siteMetadata {
            name
            description
            title
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      title={title || defaultTitle}
      titleTemplate={title ? `%s | ${defaultTitle}` : null}
      htmlAttributes={{ lang: 'en' }}
      defer={false}
      meta={[
        {
          charSet: 'utf-8',
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title || defaultTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        ...meta,
      ]}
    >
      <title>{title || defaultTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={metaDescription} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />

      <meta name="twitter:creator" content={site.siteMetadata?.name || ``} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

export default Seo;