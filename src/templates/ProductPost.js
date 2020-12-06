/*
  add ?type="embedded to be served as iFrame
*/

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductDetail from '../components/ProductDetail/ProductDetail';

export default ({ data, location }) => {
  const { frontmatter: metadata } = data.markdownRemark;

  return (
    <Layout
      metaTags={{
        title: metadata.title,
        thumbnail: metadata.icon,
        pageUrl: location.href,
      }}
    >
      <ProductDetail
        data={data}
      />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allSanityProduct(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`


// html
// frontmatter {
//   title
//   shortDescription
//   price
//   createdAt(formatString: "DD MMMM, YYYY")
//   category
//   icon
//   tags
//   framework
//   marketUrl
//   gumroadUrl
//   sellfyUrl
//   paypalUrl
//   color
//   thumbnails
//   smallThumbnails
// }
// excerpt
