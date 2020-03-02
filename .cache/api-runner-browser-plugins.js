module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"TakeThatDesign","short_name":"TakeThatDesign","start_url":"/","background_color":"#f8f8f8","theme_color":"#111","display":"standalone","icon":"src/images/icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"GTM-W3WCQBW","defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
