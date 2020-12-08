import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import Layout from '../components/Layout';
import HeroSlide from '../components/HeroSlide/HeroSlide';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';

export default ({ location }) => {

  const data = useStaticQuery(
    graphql`
      query {
        allSanityProduct(sort: { fields: createdAt, order: DESC }) {
          totalCount
          edges {
            node {
              ...ProductItem
            }
          }
        }
      }
    `
  )

  const { edges: productList } = data.allSanityProduct;
  const featuredThemeList = productList
    .filter(({ node }) => node.category.title.toUpperCase() === 'THEME')
    .map(item => item.node)

  const featuredPluginList = productList
    .filter(({ node }) => node.category.title.toUpperCase() === 'PLUGIN')
    .map(item => item.node)

  return (
    <Layout
      metaTags={{
        pageUrl: location.href,
      }}
    >
      <div className="hero-slide-wrapper">
        <HeroSlide />
      </div>

      <div className="featured-products-wrapper">
        <div className="featured-header">
          <div className="feature-title">
            Themes
          </div>
          <Link to="/products?q=Theme">
            All Themes
            <Icon path={ mdiChevronRight } color="#007bff" size="20px" />
          </Link>
        </div>
        <FeaturedProducts listData={ featuredThemeList } />
      </div>

      <div className="featured-products-wrapper">
        <div className="featured-header">
          <div className="feature-title">
            Plugins
          </div>
          <Link to="/products?q=Plugin">
            All Plugins
            <Icon path={ mdiChevronRight } color="#007bff" size="20px" />
          </Link>
        </div>
        <FeaturedProducts listData={ featuredPluginList } />
      </div>
    </Layout>
  )
}
