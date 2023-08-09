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
      <html lang="en"/>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <title>{title || defaultTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default Seo;