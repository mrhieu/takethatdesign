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
        allMarkdownRemark(sort: { fields: [frontmatter___createdAt], order: DESC }) {
          totalCount
          edges {
            node {
              id
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

  const { edges: productList } = data.allMarkdownRemark;
  const themeList = productList
    .filter(({ node }) => {
      const { category } = node.frontmatter;

      return category.toUpperCase() === 'THEME';
    }).map(item => ({...item.node.frontmatter, id: item.node.id}));

  const pluginList = productList
    .filter(({ node }) => {
      const { category } = node.frontmatter;

      return category.toUpperCase() === 'PLUGIN';
    }).map(item => ({...item.node.frontmatter, id: item.node.id}));

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
        <FeaturedProducts listData={themeList}/>
      </div>

      <div className="featured-products-wrapper">
        <div className="featured-header">
          <div className="feature-title">
            Plugins
          </div>
          <Link to="/products?q=Theme">
            All Plugins
            <Icon path={ mdiChevronRight } color="#007bff" size="20px" />
          </Link>
        </div>
        <FeaturedProducts listData={pluginList}/>
      </div>
    </Layout>
  )
}
