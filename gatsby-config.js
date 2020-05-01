module.exports = {
  siteMetadata: {
    // edit below
    title: `amademort`,
    author: `amadeus de mortis`,
    description: 'amademort | design',
    siteUrl: `https://amademort.com`,
    social: {
      twitter: `amademort`,
    },
    menuMain:[
      // {
      //   name:'design',
      //   link:'/design'
      // },
      // {
      //   name:'code',
      //   link:'/code'
      // },
      // {
      //   name:'audio',
      //   link:'/audio'
      // },
      {
        name:'photo',
        link:'/photo'
      },
    ],
    menuSocial:[     
      {
        name:'ig',
        link:'https://instagram.com/amademort'
      },
    ],
    menuLegal:[
      {
        name:'tos',
        link:'/legal'
      }
    ],
  },
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          pages: require.resolve("./src/templates/project.js"),
          default: require.resolve("./src/templates/page.js"),
        },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-embedder`,
          },
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2000,
              linkImagesToOriginal: false,
              withWebp: true,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `amademort | design`,
        short_name: `amademort`,
        start_url: `/`,
        //background_color: `#222222`,
        //theme_color: `#EE6600`,
        //display: `standalone`,
        // edit below
        icon: `content/assets/logos/amademort_mac.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
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
  ],
}
