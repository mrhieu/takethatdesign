const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/hieu/Workspace/blog/takethatdesign-gatsby/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-product-detail-js": hot(preferDefault(require("/Users/hieu/Workspace/blog/takethatdesign-gatsby/src/templates/ProductDetail.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hieu/Workspace/blog/takethatdesign-gatsby/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/hieu/Workspace/blog/takethatdesign-gatsby/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/hieu/Workspace/blog/takethatdesign-gatsby/src/pages/index.js")))
}

