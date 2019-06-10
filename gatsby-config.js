module.exports = {
  siteMetadata: {
    title: `Anthony Fryer`,
    description: `Computer geek, endurance freak.`,
    author: `@ajf`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',

    {
      resolve: `gatsby-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultLayout: require.resolve('./src/components/blog-post-layout.js')
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anthony-fryer`,
        short_name: `ajf`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
}
