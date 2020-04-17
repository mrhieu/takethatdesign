import React from 'react';
import { graphql } from 'gatsby';
import ProductIframe from '../components/ProductIframe/ProductIframe';

export default ({ data }) => {
  return (
    <ProductIframe
      data={data}
    />
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        shortDescription
        price
        createdAt(formatString: "DD MMMM, YYYY")
        category
        icon
        tags
        framework
        marketUrl
        gumroadUrl
        sellfyUrl
        paypalUrl
        color
        thumbnails
        smallThumbnails
      }
      excerpt
    }
  }
`
