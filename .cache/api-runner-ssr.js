var plugins = [{
      plugin: require('/Users/hieu/Workspace/blog/takethatdesign-gatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"TakeThatDesign","short_name":"TakeThatDesign","start_url":"/","background_color":"#f8f8f8","theme_color":"#111","display":"standalone","icon":"src/images/icon.png"},
    },{
      plugin: require('/Users/hieu/Workspace/blog/takethatdesign-gatsby/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/hieu/Workspace/blog/takethatdesign-gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/hieu/Workspace/blog/takethatdesign-gatsby/node_modules/gatsby-plugin-google-tagmanager/gatsby-ssr'),
      options: {"plugins":[],"id":"GTM-W3WCQBW","defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}}},
    },{
      plugin: require('/Users/hieu/Workspace/blog/takethatdesign-gatsby/node_modules/gatsby-plugin-fullstory/gatsby-ssr'),
      options: {"plugins":[],"fs_org":"GQ0RN"},
    },{
      plugin: require('/Users/hieu/Workspace/blog/takethatdesign-gatsby/node_modules/gatsby-plugin-facebook-sdk/gatsby-ssr'),
      options: {"plugins":[],"appId":"272354566715786","status":true,"xfbml":true,"version":"v3.2"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
