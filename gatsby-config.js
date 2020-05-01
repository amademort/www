module.exports = {

  // metadata
  siteMetadata: {
    title: `amademort`,
    author: `amadeus de mortis`,
    description: `amademort | design`,
    siteUrl: `https://amademort.com`,
    social: {
      twitter: `amademort`,
    },

    // menus
    menuMain:[
      {
        name: `img`,
        title: `image gallery`,
        link: `/img`
      },
    ],
    menuSocial:[     
      {
        name: `iG`,
        title: `instagram`,
        link: `https://instagram.com/amademort`
      },
    ],
    menuLegal:[
      {
        name: `ToS`,
        title: `legal terms`,
        link: `/legal`
      }
    ],
  },

  // plugins
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    `gatsby-remark-images`,

    // use: filter: { sourceInstanceName: { eq: "NAME" } }
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/gallery`,
        name: `gallery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/gallery/img`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    // markdown
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          pages: require.resolve("./src/templates/page.js"),
          images: require.resolve("./src/templates/item.js"),
        },
        extensions: [".md"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-images-zoom`,
            options: {
              background: `rgba(0, 0, 0, 0.8)`,
            }
          },
        ],
      },
    },

    // google analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },


    // pwa
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `amademort design`,
        short_name: `amademort`,
        start_url: `/`,
        background_color: `#FEFEFE`,
        theme_color: `#48CC48`,
        display: `standalone`,
        icon: `content/assets/logos/amademort_logo.png`,
      },
    },

    // typography
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    
  ],
}
