/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `xhanalexander`,
    name: `Alexander Achmad Khan`,
    siteUrl: `https://xhanalexander.vercel.app/`,
    description: `Alexander Achmad Khan's personal website`,
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "works",
      "path": `${__dirname}/content/blog`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1200,
          },
        },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [
        "G-LXQ5CQ9CFT",
      ],
      pluginConfig: {
        head: true,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: `xhanalexander`,
      short_name: `xhanalexander`,
      start_url: `/`,
      background_color: `#121212`,
      theme_color: `#34d399`,
      display: `minimal-ui`,
      icon: `src/images/icon.png`,
    },
  },
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      host: "https://xhanalexander.vercel.app/",
      sitemap: "https://xhanalexander.vercel.app/sitemap.xml",
      policy: [{ userAgent: "*", allow: "/" }],
    },
  },
]
};