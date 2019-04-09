module.exports = {
  siteMetadata: {
    title: "Anthony Fryer",
    description: "Computer geek, endurance freak",
    author: "Anthony Fryer",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "user",
        ],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-source-strava-activities",
      options: {
        // This is the "Access Token" from:
        // https://www.strava.com/settings/api
        authToken: "76b4ec0f6143822d5f5d33a42fc554daa5f9f82d",
        // [Optional] An epoch timestamp to use for filtering activities that have taken place after a certain time.
        after: "",
        // An epoch timestamp to use for filtering activities that have taken place before a certain time.
        before: "1522789834",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
  ],
}
