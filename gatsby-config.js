module.exports = {
    siteMetadata: {
      title: `RadWEB`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `data`,
          path: `${__dirname}/src/data/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `templates`,
          path: `${__dirname}/src/templates/`,
        },
      },
      {
        resolve: `gatsby-source-datocms`,
        options: {
          apiToken: `ed1726e97d820bd336169cf7ac7ddb`,
        },
      },
    ]
}