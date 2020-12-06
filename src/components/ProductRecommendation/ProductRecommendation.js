import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './ProductRecommendation.scss';
import ProductItem from '../ProductItem/ProductItem';

export default ({ itemData }) => {
  // TODO: Naive. Need a real solution. Won't work when the number of products increases
  const data = useStaticQuery(
    graphql`
      query {
        allSanityProduct {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `
  )

  const { edges: productList } = data.allSanityProduct;

  const filteredProductlist = () => {
    return productList
      .filter(({ node }) => {
        const { title, category, framework, tags } = node.frontmatter;
        const itemKey = `${title}${category}${framework}${tags.join('')}`;
        return title !== itemData.title
          && itemKey.toUpperCase().indexOf(itemData.framework.toUpperCase()) > -1;
      })
      .slice(0, 4);
  }

  return filteredProductlist().length > 0
    ? (
      <div className="product-recommendation">
        <h4>More Like This</h4>
        <div className="row product-items">
          {
            filteredProductlist()
              .map(({ node }) => (
                <div key={ node.id } className="col-lg-3 col-md-6">
                  <ProductItem
                    data={ node }
                  />
                </div>
              ))
          }
        </div>
      </div>
    )
    : null;
}

// query {
//   allMarkdownRemark(sort: { fields: [frontmatter___createdAt], order: DESC }) {
//     totalCount
//     edges {
//       node {
//         id
//         frontmatter {
//           title
//           shortDescription
//           price
//           createdAt(formatString: "DD MMMM, YYYY")
//           category
//           icon
//           tags
//           framework
//           marketUrl
//           gumroadUrl
//           sellfyUrl
//           paypalUrl
//           color
//           thumbnails
//           smallThumbnails
//         }
//         fields {
//           slug
//         }
//         excerpt
//       }
//     }
//   }
// }
