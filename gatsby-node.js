const path = require('path');
const webpack = require('webpack');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allSanityProduct(filter: { isHidden: { eq: false } }) {
        edges {
          node {
            id
            slug {
              current
            }
            category {
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allSanityProduct.edges.forEach(({ node }) => {
    const category = node.category.title.toLowerCase();
    const slug = node.slug.current.toLowerCase();
    const productUrl = `${ category }/${ slug }`;

    createPage({
      path: productUrl,
      component: path.resolve('./src/templates/ProductPost.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
      },
    })

    // For iFrame Embedded
    createPage({
      path: `embedded/${ productUrl }`,
      component: path.resolve('./src/templates/ProductPostEmbedded.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        id: node.id,
      },
    })
  })
}
