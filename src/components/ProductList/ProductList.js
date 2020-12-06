import React, { useState } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Icon from '@mdi/react';
import { mdiMagnify, mdiCloseCircle } from '@mdi/js';
import queryString from 'query-string';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';

export default ({location}) => {
  const [ searchQuery, setSearchQuery ] = useState(queryString.parse(location.search).q || '');

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

  const handleInputChange = e => {
    const { value } = e.target;
    setSearchQuery(value);
  }

  const filteredProductlist = () => {
    return productList
      .filter(({ node }) => {
        const { title, category, framework, tags } = node.frontmatter;
        const itemKey = `${title}${category}${framework}${tags.join('')}`;
        return itemKey.toUpperCase().indexOf(searchQuery.toUpperCase()) > -1;
      });
  }

  const handleClearSearch = () => {
    setSearchQuery('');
  }

  const searchTag = tag => {
    navigate(`/products?q=${tag.name}`);
    setSearchQuery(tag.name);
  }

  const { edges: productList } = data.allSanityProduct;

  return (
    <React.Fragment>
      <div className="search-bar row mb-2 mt-4">
        <div className="form-group col-lg-8 offset-lg-2">
          <Icon className="search-icon" path={ mdiMagnify } color="#aaa" />
          {
            searchQuery.length > 1 &&
            <Icon
              className="clear-icon"
              path={ mdiCloseCircle }
              color="#777"
              onClick={handleClearSearch}
            />
          }
          <input
            type="text"
            className={`form-control form-control-lg${searchQuery.length > 0 ? ' active' : ''}`}
            value={ searchQuery }
            onChange={ handleInputChange }
            placeholder="Search: Tinder, Pinterest, etc"
          />
        </div>
      </div>

      {
        searchQuery.length > 0 &&
        <h4 className="text-center mb-4 font-bold">
          Showing { filteredProductlist().length } results
        </h4>
      }

      <div className="product-items row">
        {
          filteredProductlist()
            .map(({ node }) => (
              <div key={ node.id } className="col-lg-4 col-md-6">
                <ProductItem
                  data={ node }
                  onTagClick={searchTag}
                />
              </div>
            ))
        }
      </div>
      {
        searchQuery.length === 0 &&
        <div className="text-center text-muted">
          Total: { data.allSanityProduct.totalCount } items.
        </div>
      }
    </React.Fragment>
  )
}

// allMarkdownRemark(sort: { fields: [frontmatter___createdAt], order: DESC }) {
//   totalCount
//   edges {
//     node {
//       id
//       frontmatter {
//         title
//         shortDescription
//         price
//         createdAt(formatString: "DD MMMM, YYYY")
//         category
//         icon
//         tags
//         framework
//         marketUrl
//         gumroadUrl
//         sellfyUrl
//         paypalUrl
//         color
//         thumbnails
//         smallThumbnails
//       }
//       fields {
//         slug
//       }
//       excerpt
//     }
//   }
// }
