module.exports = {
    siteMetadata: {
      title: `RadWEB`,
        siteUrl: `https://rad-web.vercel.app`,
    },
    plugins: [
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-mdx`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      // {
      //   resolve: "gatsby-plugin-page-creator",
      //   options: {
      //     path: `${__dirname}/src/posts`,
      //   },
      // },
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
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `assets`,
          path: `${__dirname}/src/assets/`,
        },
      },
      {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: "GTM-MPGDKSZ",
          includeInDevelopment: false
        },
      },
    ]
}