/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `xhanalexander`,
    name: `Alexander Achmad Khan`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Alexander Achmad Khan's personal website`,
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
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
      background_color: `#4ade80`,
      theme_color: `#4ade80`,
      display: `standalone`,
      icon: `src/images/icon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-react-helmet`,
  },
]
};