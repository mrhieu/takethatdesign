import React from 'react';
import { graphql } from 'gatsby';
import ProductIframe from '../components/ProductIframe/ProductIframe';

export default ({ data }) => {

  const productData = data.allSanityProduct.edges[0].node;

  return (
    <ProductIframe
      data={ productData }
    />
  )
}

export const query = graphql`
  query($id: String!) {
    allSanityProduct(filter: { id: { eq: $id } }) {
      edges {
        node {
          ...ProductItem
        }
      }
    }
  }
`
