import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProductItem from '../ProductItem/ProductItem';

export default () => {
  const data = useStaticQuery(
    graphql`
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
  )

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
