/**
* Configure your Gatsby site with this file.
*
* See: https://www.gatsbyjs.org/docs/gatsby-config/
*/

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

module.exports = {
  siteMetadata: {
    title: 'Take That Design',
    description: 'Best of Ionic Themes and Plugins',
    author: 'Hieu Pham',
  },
  pathPrefix: '/gatsby',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: 'https://www.takethatdesign.com',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        // includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: 'gatsby-plugin-fullstory',
      options: {
        fs_org: process.env.FULLSTORY,
      },
    },
    {
      resolve: 'gatsby-plugin-facebook-customer-chat',
      options: {
        sdk: {
          status: true,
          xfbml: true,
          version: 'v3.2',
        },
        chat: {
          pageId: process.env.FB_PAGE_ID,
          loggedInGreeting: 'Hi! How can I help you?',
          loggedOutGreeting: 'Hi! How can I help you?',
        }
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TakeThatDesign',
        short_name: 'TakeThatDesign',
        start_url: '/',
        background_color: '#f8f8f8',
        theme_color: '#111',
        // Enables 'Add to Homescreen' prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'o607ve1z',
        dataset: 'leafdb',
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
}
