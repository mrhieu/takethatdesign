import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo/Seo';
import ProductItem from '../components/ProductItem/ProductItem';

export default ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Homepage"/>
      <Layout>
        <div className="hero-text">
          Best of Ionic Themes & Plugins
        </div>

        <div className="padder-v text-center text-muted text-sm m-b d-none d-md-block">
          Based on <a href="https://ionicframework.com/" className="font-bold text-dark" target="_blank" rel="noopener noreferrer">Ionic Framework</a> - My favorite hybrid mobile app framework
        </div>

        <div className="product-container">
          <div className="product-items row">
            {
              data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} className="col-lg-4 col-md-6">
                  <ProductItem data={node}/>
                </div>
              ))
            }
          </div>
          <div className="text-center text-muted">Total: {data.allMarkdownRemark.totalCount} items.</div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___createdAt], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
