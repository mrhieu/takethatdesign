import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from '@mdi/react';
import { mdiMagnify, mdiCloseCircle } from '@mdi/js';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss';

export default () => {
  const [ searchQuery, setSearchQuery ] = useState('');

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

  const { edges: productList } = data.allMarkdownRemark;

  return (
    <React.Fragment>
      <div className="search-bar row mb-2">
        <div className="form-group col-lg-8 offset-lg-2">
          <Icon className="search-icon" path={ mdiMagnify } />
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
            className="form-control form-control-lg"
            value={ searchQuery }
            onChange={ handleInputChange }
            placeholder="Search: Tinder, Pinterest, etc"
          />
        </div>
      </div>

      <div className="product-items row">
        {
          filteredProductlist()
            .map(({ node }) => (
              <div key={ node.id } className="col-lg-4 col-md-6">
                <ProductItem data={ node }/>
              </div>
            ))
        }
      </div>
      <div className="text-center text-muted">
        Total: { searchQuery.length > 0 ? filteredProductlist().length : data.allMarkdownRemark.totalCount } items.
      </div>
    </React.Fragment>
  )
}
