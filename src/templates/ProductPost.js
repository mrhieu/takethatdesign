import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import ProductService from '../services/productService';

export default ({ data, location }) => {

  const productData = data.allSanityProduct.edges[0].node;

  return (
    <Layout
      metaTags={{
        title: productData.title,
        thumbnail: ProductService.getImageDisplayUrl(productData.productImage.icon),
        pageUrl: location.href,
      }}
    >
      <ProductDetail data={ productData } />
    </Layout>
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
