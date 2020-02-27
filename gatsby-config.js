/**
* Configure your Gatsby site with this file.
*
* See: https://www.gatsbyjs.org/docs/gatsby-config/
*/

module.exports = {
  siteMetadata: {
    title: 'Take That Design',
    description: 'Best of Ionic Themes and Plugins',
    author: 'Hieu Pham',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-emotion',
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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-W3WCQBW',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        // includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
  ],
}
